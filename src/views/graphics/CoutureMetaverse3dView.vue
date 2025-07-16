<script>
import {inject, nextTick, onMounted, onUnmounted, ref, watch} from 'vue';
import {useI18n} from 'vue-i18n';
import jsPDF from "jspdf";
import * as THREE from 'three';
import {TextureLoader} from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import CanvasFullScreen from '@/components/util/CanvasFullScreen.vue';
import ToggleFullScreen from '@/components/util/ToggleFullScreen.vue';
import { openGraphMixin } from "@/assets/ogimage/openGraphMixin";


export default {
  name: 'couture3d',
  mixins: [openGraphMixin],
  components: {CanvasFullScreen, ToggleFullScreen},
  mounted() {
    const mainTitle = 'Couture Metaverse 3D';
    const title = 'Couture Metaverse 3D';
    const metaDescription = 'A unique platform for creating and customizing 3D models!';
    const description = 'A unique platform for creating and customizing 3D models!';
    const imageUrl = 'https://zorin.expert/assets/ogimage/extra/graphics/OG_Image_Couture3d.jpg';
    const url = 'https://zorin.expert/extra/graphics/couture3d';

    this.setOpenGraphTags(metaDescription, title, description, imageUrl, url);
    this.setPageTitle(mainTitle);
  },
  methods: {},
  setup() {
    const { t } = useI18n();
    const toggleFooter = inject('toggleFooter');
    const isFooterHidden = inject('isFooterHidden');
    const canvasContainer = ref(null);
    let scene, camera, renderer, model;
    let sceneGroup = null; // Эта переменная будет использоваться для всех моделей
    const isSmallScreen = ref(window.innerWidth <= 768);
    const isMixingEnabled = ref(false); // Флаг для смешивания текстур и цветов
    const isRecording = ref(false); // Показываем статус записи
    const showSaveOptions = ref(false);
    const showColorMenu = ref(false);
    const showTextureMenu = ref(false);
    const showLogoMenu = ref(false);
    const currentModelKey = ref(null);  // 🏷 Переменная для отслеживания текущей модели
    const isMultiModelView = ref(false); // 🏷 Флаг для обычного режима "1x4 модели"
    const isThreeDView = ref(false); // 🏷 Флаг для режима "2x2 модели"
    const isWomenDress = ref (false);
    const isWomenShirt = ref(false);
    const isBrandingOpen = ref(false);
    const scale = ref(1.0);
    const positionX = ref(0.5);
    const positionY = ref(0.5);
    const stepSize = 0.02; // Было 0.01, увеличиваем в 2 раза
    const textureLoader = new TextureLoader();
    const textureCache = {};
    const logoCache = new Map(); // Добавляем кеш для логотипов

    // Кнопки-ползунки
    const incrementX = () => { positionX.value = Math.min(1, Number(positionX.value) + stepSize); };
    const decrementX = () => { positionX.value = Math.max(-1, Number(positionX.value) - stepSize); };
    const incrementY = () => { positionY.value = Math.min(1, Number(positionY.value) + stepSize); };
    const decrementY = () => { positionY.value = Math.max(-1, Number(positionY.value) - stepSize); };
    const incrementScale = () => { scale.value = Math.min(2, Number(scale.value) + stepSize); };
    const decrementScale = () => { scale.value = Math.max(0.1, Number(scale.value) - stepSize); };

    // Храним последнее загруженное изображение и меш логотипа
    let lastLoadedImage = null;
    let logoMesh = null;

    // Определение текстур
    const textures = {
      texture1: '/assets/textures/texture6.webp',
      texture2: '/assets/textures/texture7.webp',
      texture3: '/assets/textures/texture8.webp',
      texture4: '/assets/textures/texture4.webp',
      texture5: '/assets/textures/texture5.webp'
    };

    // Определение логотипов
    const logos = {
      logo1: '/assets/logos/logo1.webp',
      logo2: '/assets/logos/logo2.webp',
      logo3: '/assets/logos/logo3.webp',
      logo4: '/assets/logos/logo4.webp'
    };

    // Фиксированная запись MP4 для Safari
    let safariRecorder = null;
    let safariStream = null;

    let mediaRecorder;
    let recordedChunks = [];

    const getTexture = (path) => {
      if (!textureCache[path]) {
        textureCache[path] = textureLoader.load(path);
      }
      return textureCache[path];
    };

    // Загрузка состояния моделей из localStorage
    const loadStoredModels = () => {
      try {
        const storedModels = localStorage.getItem('modelsSettings');
        if (!storedModels) return null;

        const parsedModels = JSON.parse(storedModels);

        // Преобразуем загруженные данные
        Object.entries(parsedModels).forEach(([key, modelData]) => {
          parsedModels[key] = {
            ...modelData,
            settings: {
              ...modelData.settings,
              color: new THREE.Color(modelData.settings.color),
              logo: modelData.settings.logo ? {
                ...modelData.settings.logo,
                positionX: Number(modelData.settings.logo.positionX || 0),
                positionY: Number(modelData.settings.logo.positionY || 0),
                scale: Number(modelData.settings.logo.scale || 1),
                lastModified: '2025-03-12 02:20:05',
                modifiedBy: 'Zorger27'
              } : null
            },
            originalSettings: {
              ...modelData.originalSettings,
              color: new THREE.Color(modelData.originalSettings.color)
            }
          };
        });

        return parsedModels;
      } catch (error) {
        console.error("Ошибка при загрузке настроек моделей:", error);
        return null;
      }
    };

    // Сохранение состояния моделей в localStorage
    const saveModelsToStorage = () => {
      try {
        // Создаем копию для сохранения с сохранением всех настроек логотипа
        const modelsToSave = {};

        for (const [key, modelData] of Object.entries(models)) {
          modelsToSave[key] = {
            ...modelData,
            settings: {
              ...modelData.settings,
              color: modelData.settings.color.getHex(),
              // Явно сохраняем все настройки логотипа
              logo: modelData.settings.logo ? {
                imageData: modelData.settings.logo.imageData,
                positionX: modelData.settings.logo.positionX,
                positionY: modelData.settings.logo.positionY,
                scale: modelData.settings.logo.scale,
                lastModified: '2025-03-12 01:45:40',
                modifiedBy: 'Zorger27'
              } : null
            },
            originalSettings: {
              ...modelData.originalSettings,
              color: modelData.originalSettings.color.getHex()
            }
          };
        }

        const serialized = JSON.stringify(modelsToSave);
        localStorage.setItem('modelsSettings', serialized);
      } catch (error) {
        console.error('Error saving models settings:', error);
      }
    };

    // Удаление данных из localStorage с подтверждением и восстановлением оригинальных настроек
    const clearLocalStorage = async () => {
      const modelsSettings = localStorage.getItem('modelsSettings');

      if (modelsSettings) {
        const confirmed = confirm(t('extra.graphics.couture3d.special.confirm'));

        if (confirmed) {
          // Удаляем данные из localStorage
          localStorage.removeItem('modelsSettings');

          // Очищаем логотип используя нашу функцию clearLogo
          clearLogo();

          // Сбрасываем значения позиции и масштаба
          positionX.value = 0;
          positionY.value = 0;
          scale.value = 1;

          // Восстанавливаем оригинальные настройки для всех моделей
          for (const key in models) {
            // Восстанавливаем настройки и добавляем пустые настройки логотипа
            models[key].settings = {
              ...models[key].originalSettings,
              logo: {
                imageData: null,
                positionX: 0,
                positionY: 0,
                scale: 1,
              }
            };
          }

          // Если текущая модель загружена, перезагружаем её
          if (model && model.userData.modelKey) {
            const currentModelKey = model.userData.modelKey;

            // Очищаем сцену
            clearScene();

            // Перезагружаем модель с оригинальными настройками
            await loadModel(currentModelKey);
          }

          // Принудительно обновляем рендер несколько раз
          if (renderer && scene && camera) {
            // Первый рендер
            renderer.render(scene, camera);

            // Дополнительный рендер через небольшую задержку
            setTimeout(() => {
              renderer.render(scene, camera);
            }, 100);
          }

          alert(t('extra.graphics.couture3d.special.alertYes'));
        } else {
          alert(t('extra.graphics.couture3d.special.alertNo'));
        }
      } else {
        alert(t('extra.graphics.couture3d.special.noData'));
      }
    };

    // Загружаем данные из localStorage, иначе используем стандартные настройки
    const models = loadStoredModels() || {
      menShirt1: {
        path: '/assets/models/04_men_shirt.glb',
        name: 'extra.graphics.couture3d.models.menShirt1',
        icon: '/assets/img/models/01_men_shirt.webp',
        originalSettings: {
          texture: '/assets/textures/materialTexture1.webp',
          color: new THREE.Color(0xffffff),
          roughness: 0.1,
          metalness: 0.5,
          brightnessMultiplier: 4.5,
          logo: {
            imageData: null,
            positionX: 0,
            positionY: 0,
            scale: 1
          }
        },
        settings: {
          texture: '/assets/textures/materialTexture1.webp',
          color: new THREE.Color(0xffffff),
          roughness: 0.1,
          metalness: 0.5,
          brightnessMultiplier: 4.5,
          logo: {
            imageData: null,
            positionX: 0,
            positionY: 0,
            scale: 1
          }
        },
      },
      womenShirt: {
        path: '/assets/models/05_women_shirt.glb',
        name: 'extra.graphics.couture3d.models.womenShirt',
        icon: '/assets/img/models/02_women_shirt.webp',
        originalSettings: {
          texture: '/assets/textures/materialTexture2.webp',
          color: new THREE.Color(0xffffff),
          roughness: 0.1,
          metalness: 0.5,
          brightnessMultiplier: 4.5,
          logo: {
            imageData: null,
            positionX: 0,
            positionY: 0,
            scale: 1
          }
        },
        settings: {
          texture: '/assets/textures/materialTexture2.webp',
          color: new THREE.Color(0xffffff),
          roughness: 0.1,
          metalness: 0.5,
          brightnessMultiplier: 4.5,
          logo: {
            imageData: null,
            positionX: 0,
            positionY: 0,
            scale: 1
          }
        },
      },
      menShirt2: {
        path: '/assets/models/06_men_shirt.glb',
        name: 'extra.graphics.couture3d.models.menShirt2',
        icon: '/assets/img/models/03_men_shirt.webp',
        originalSettings: {
          texture: '/assets/textures/materialTexture3.webp',
          color: new THREE.Color(0xffffff),
          roughness: 0.1,
          metalness: 0.5,
          brightnessMultiplier: 4.5,
          logo: {
            imageData: null,
            positionX: 0,
            positionY: 0,
            scale: 1
          }
        },
        settings: {
          texture: '/assets/textures/materialTexture3.webp',
          color: new THREE.Color(0xffffff),
          roughness: 0.1,
          metalness: 0.5,
          brightnessMultiplier: 4.5,
          logo: {
            imageData: null,
            positionX: 0,
            positionY: 0,
            scale: 1
          }
        },
      },
      womenDress: {
        path: '/assets/models/07_dress.glb',
        name: 'extra.graphics.couture3d.models.womenDress',
        icon: '/assets/img/models/04_dress.webp',
        originalSettings: {
          texture: '/assets/textures/materialTexture1.webp',
          color: new THREE.Color(0xffffff),
          roughness: 0.1,
          metalness: 0.5,
          brightnessMultiplier: 4.5,
          logo: {
            imageData: null,
            positionX: 0,
            positionY: 0,
            scale: 1
          }
        },
        settings: {
          texture: '/assets/textures/materialTexture1.webp',
          color: new THREE.Color(0xffffff),
          roughness: 0.1,
          metalness: 0.5,
          brightnessMultiplier: 4.5,
          logo: {
            imageData: null,
            positionX: 0,
            positionY: 0,
            scale: 1
          }
        },
      },
    };

    // Функция загрузки одной модели
    const loadModel = async (modelKey) => {
      isMultiModelView.value = false;
      isThreeDView.value = false;
      isBrandingOpen.value = false; // Закрываем меню при смене модели
      currentModelKey.value = modelKey;

      isWomenDress.value = modelKey === "womenDress";
      isWomenShirt.value = modelKey === "womenShirt";

      clearScene();
      clearLogo(); // Используем функцию clearLogo вместо прямой очистки

      sceneGroup = new THREE.Group();
      scene.add(sceneGroup);

      const loader = new GLTFLoader();
      try {
        const gltf = await loader.loadAsync(models[modelKey].path);
        model = gltf.scene;

        model.userData.modelKey = modelKey;

        // Применяем материалы к модели
        const materialPromises = [];
        model.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            materialPromises.push(applyMaterialSettings(child.material, modelKey));
          }
        });

        await Promise.all(materialPromises);

        model.position.set(0, 0, 0);
        model.scale.set(4, 4, 4);

        sceneGroup.add(model);
        rotationStates.set(modelKey, { clockwise: false, counterClockwise: false });

        const boundingBox = new THREE.Box3().setFromObject(model);
        const height = boundingBox.max.y - boundingBox.min.y;
        model.position.y = -height / 2;

        // Если есть логотип в настройках
        if (models[modelKey].settings?.logo?.imageData) {
          try {
            // Используем getCachedLogo для загрузки логотипа
            lastLoadedImage = await getCachedLogo(models[modelKey].settings.logo.imageData);

            // Находим меш груди
            let chestMesh = null;
            let maxSize = 0;
            model.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                const bbox = new THREE.Box3().setFromObject(child);
                const size = bbox.max.y - bbox.min.y;
                if (bbox.max.z > 0 && size > maxSize) {
                  chestMesh = child;
                  maxSize = size;
                }
              }
            });

            if (chestMesh) {
              // Создаем меш для логотипа
              logoMesh = new THREE.Mesh(
                chestMesh.geometry.clone(),
                new THREE.MeshBasicMaterial({
                  map: null,
                  transparent: true,
                  opacity: 1,
                  depthTest: true,
                  depthWrite: false,
                  side: THREE.DoubleSide,
                  blending: THREE.CustomBlending,
                  blendEquation: THREE.AddEquation,
                  blendSrc: THREE.SrcAlphaFactor,
                  blendDst: THREE.OneMinusSrcAlphaFactor,
                  premultipliedAlpha: true
                })
              );

              // Копируем трансформации
              logoMesh.position.copy(chestMesh.position);
              logoMesh.rotation.copy(chestMesh.rotation);
              logoMesh.scale.copy(chestMesh.scale);
              logoMesh.position.z += 0.001;

              logoMesh.userData = {
                isLogo: true,
                modelKey: modelKey,
              };

              chestMesh.parent.add(logoMesh);

              // Восстанавливаем сохраненные значения
              const logoSettings = models[modelKey].settings.logo;
              positionX.value = Number(logoSettings.positionX || 0);
              positionY.value = Number(logoSettings.positionY || 0);
              scale.value = Number(logoSettings.scale || 1);

              // Обновляем текстуру логотипа с восстановленными значениями
              await updateLogoTexture();
            }
          } catch (error) {
            console.error(`❌ Ошибка при добавлении логотипа для модели ${modelKey}:`, error);
          }
        }

        renderer.render(scene, camera);

      } catch (error) {
        console.error(`❌ Ошибка загрузки модели ${modelKey}:`, error);
      }
      renderer.render(scene, camera);
    };

    // Функция загрузки всех моделей
    const loadAllModels = async () => {
      isMultiModelView.value = true;
      isThreeDView.value = false;
      isBrandingOpen.value = false;
      currentModelKey.value = null;

      clearScene();
      const loader = new GLTFLoader();
      const totalModels = Object.keys(models).length;

      sceneGroup = new THREE.Group();
      scene.add(sceneGroup);

      let maxModelHeight = 0;
      let maxModelWidth = 0;
      let modelsArray = [];

      // 1️⃣ Загружаем модели и вычисляем их размеры
      let modelPromises = Object.keys(models).map(async (key, index) => {
        try {
          const gltf = await loader.loadAsync(models[key].path);
          const model = gltf.scene;
          model.userData.modelKey = key;
          model.userData.lastModified = '2025-03-10 04:10:31';
          model.userData.modifiedBy = 'Zorger27';

          let boundingBox = new THREE.Box3().setFromObject(model);
          const modelWidth = boundingBox.max.x - boundingBox.min.x;
          const modelHeight = boundingBox.max.y - boundingBox.min.y;

          maxModelWidth = Math.max(maxModelWidth, modelWidth);
          maxModelHeight = Math.max(maxModelHeight, modelHeight);

          console.log(`✅ ${key}: Высота = ${modelHeight}, Ширина = ${modelWidth}`);

          modelsArray[index] = model;
          rotationStates.set(key, { clockwise: false, counterClockwise: false });

        } catch (error) {
          console.error(`❌ Ошибка загрузки модели ${key}:`, error);
        }
      });

      await Promise.all(modelPromises);
      console.log(`📏 Максимальная высота: ${maxModelHeight}, максимальная ширина: ${maxModelWidth}`);

      // 2️⃣ Второй проход — нормализация размеров и позиционирование
      let materialPromises = [];
      let logoPromises = [];
      const spacing = maxModelWidth * 3.2;
      let startX = -(totalModels - 1) * spacing / 2;

      modelsArray.forEach((model, index) => {
        const modelKey = model.userData.modelKey;
        let boundingBox = new THREE.Box3().setFromObject(model);

        const scaleFactor = 1.8 / maxModelHeight;
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);

        boundingBox.setFromObject(model);
        model.position.x = startX + index * spacing;

        console.log(`📍 ${modelKey} -> X: ${model.position.x}, Y: ${model.position.y}, Масштаб: ${scaleFactor}`);

        // Применяем материалы и текстуры
        model.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            materialPromises.push(applyMaterialSettings(child.material, modelKey));
          }
        });

        // Добавляем логотип, если он есть в настройках модели
        if (models[modelKey].settings?.logo?.imageData) {
          logoPromises.push((async () => {
            try {
              // Используем кеш для логотипа
              let modelLogo;
              if (logoCache.has(models[modelKey].settings.logo.imageData)) {
                modelLogo = logoCache.get(models[modelKey].settings.logo.imageData);
              } else {
                modelLogo = new Image();
                modelLogo.src = models[modelKey].settings.logo.imageData;
                await new Promise((resolve, reject) => {
                  modelLogo.onload = resolve;
                  modelLogo.onerror = reject;
                });
                logoCache.set(models[modelKey].settings.logo.imageData, modelLogo);
              }

              // Находим меш груди для текущей модели
              let chestMesh = null;
              let maxSize = 0;
              model.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                  const bbox = new THREE.Box3().setFromObject(child);
                  const size = bbox.max.y - bbox.min.y;
                  if (bbox.max.z > 0 && size > maxSize) {
                    chestMesh = child;
                    maxSize = size;
                  }
                }
              });

              if (chestMesh) {
                const isMultiView = isMultiModelView.value || isThreeDView.value;
                const isWomenModel = modelKey === 'womenShirt';

                // Создаем новый меш для логотипа
                const modelLogoMesh = new THREE.Mesh(
                  chestMesh.geometry.clone(),
                  new THREE.MeshBasicMaterial({
                    map: createLogoTexture(
                      models[modelKey].settings.logo.positionX,
                      models[modelKey].settings.logo.positionY,
                      models[modelKey].settings.logo.scale,
                      modelLogo
                    ),
                    transparent: true,
                    opacity: 1,
                    depthTest: true,
                    depthWrite: false,
                    side: THREE.DoubleSide,
                    blending: THREE.CustomBlending,
                    blendEquation: THREE.AddEquation,
                    blendSrc: THREE.SrcAlphaFactor,
                    blendDst: THREE.OneMinusSrcAlphaFactor,
                    premultipliedAlpha: true
                  })
                );

                // Копируем трансформации
                modelLogoMesh.position.copy(chestMesh.position);
                modelLogoMesh.rotation.copy(chestMesh.rotation);
                modelLogoMesh.scale.copy(chestMesh.scale);

                // Специальная обработка для женской модели в мульти-режиме
                if (isWomenModel && isMultiView) {
                  modelLogoMesh.scale.x *= -1;  // Отражаем по оси X
                }

                modelLogoMesh.position.z += 0.001;

                modelLogoMesh.userData = {
                  isLogo: true,
                  modelKey: modelKey,
                };

                chestMesh.parent.add(modelLogoMesh);
              }
            } catch (error) {
              console.error(`❌ Ошибка при добавлении логотипа для модели ${modelKey}:`, error);
            }
          })());
        }

        sceneGroup.add(model);
      });

      // Ждём загрузки всех материалов и логотипов
      await Promise.all([...materialPromises, ...logoPromises]);

      // Корректируем позицию группы
      const groupBoundingBox = new THREE.Box3().setFromObject(sceneGroup);
      const groupHeight = groupBoundingBox.max.y - groupBoundingBox.min.y;
      sceneGroup.position.y = -groupBoundingBox.min.y - groupHeight * 0.5;

      console.log(`🎯 Группа -> X: ${sceneGroup.position.x}, Y: ${sceneGroup.position.y}`);

      renderer.render(scene, camera);
      console.log("🎉 Все модели и логотипы загружены!");
    };

    // Функция загрузки всех моделей (2 спереди, 2 сзади)
    const loadAllModels3d = async () => {
      isThreeDView.value = true;
      isMultiModelView.value = false;
      isBrandingOpen.value = false;
      currentModelKey.value = null;

      clearScene();
      const loader = new GLTFLoader();

      sceneGroup = new THREE.Group();
      scene.add(sceneGroup);

      let maxModelHeight = 0;
      let maxModelWidth = 0;
      let modelsArray = [];

      // 1️⃣ Загружаем модели и вычисляем их размеры
      let modelPromises = Object.keys(models).map(async (key, index) => {
        try {
          const gltf = await loader.loadAsync(models[key].path);
          const model = gltf.scene;
          model.userData.modelKey = key;
          model.userData.lastModified = '2025-03-10 04:11:39';
          model.userData.modifiedBy = 'Zorger27';

          let boundingBox = new THREE.Box3().setFromObject(model);
          const modelWidth = boundingBox.max.x - boundingBox.min.x;
          const modelHeight = boundingBox.max.y - boundingBox.min.y;

          maxModelWidth = Math.max(maxModelWidth, modelWidth);
          maxModelHeight = Math.max(maxModelHeight, modelHeight);

          console.log(`✅ ${key}: Высота = ${modelHeight}, Ширина = ${modelWidth}`);

          modelsArray[index] = model;
          rotationStates.set(key, { clockwise: false, counterClockwise: false });

        } catch (error) {
          console.error(`❌ Ошибка загрузки модели ${key}:`, error);
        }
      });

      await Promise.all(modelPromises);
      console.log(`📏 Максимальная высота: ${maxModelHeight}, максимальная ширина: ${maxModelWidth}`);

      // 2️⃣ Второй проход — нормализация размеров и позиционирование
      let materialPromises = [];
      let logoPromises = [];
      const frontScale = 1.8 / maxModelHeight;
      const backScale = frontScale * 0.8;
      const spacingX = maxModelWidth * 4.0;
      const spacingZ = maxModelWidth * 2.5;

      modelsArray.forEach((model, index) => {
        const modelKey = model.userData.modelKey;
        const isBackRow = index >= 2;

        const scaleFactor = isBackRow ? backScale : frontScale;
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);

        let boundingBox = new THREE.Box3().setFromObject(model);

        const xOffset = isBackRow ? -spacingX / 2 : 0;
        model.position.x = xOffset + (index % 2 === 0 ? -spacingX / 2 : spacingX / 2);
        model.position.z = isBackRow ? -spacingZ : 0;
        model.position.y = -boundingBox.min.y;

        console.log(`📍 ${modelKey} -> X: ${model.position.x}, Z: ${model.position.z}, Y: ${model.position.y}, Масштаб: ${scaleFactor}`);

        // Применяем материалы и текстуры
        model.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            materialPromises.push(applyMaterialSettings(child.material, modelKey));
          }
        });

        // Добавляем логотип, если он есть в настройках модели
        if (models[modelKey].settings?.logo?.imageData) {
          logoPromises.push((async () => {
            try {
              // Используем кеш для логотипа
              let modelLogo;
              if (logoCache.has(models[modelKey].settings.logo.imageData)) {
                modelLogo = logoCache.get(models[modelKey].settings.logo.imageData);
              } else {
                modelLogo = new Image();
                modelLogo.src = models[modelKey].settings.logo.imageData;
                await new Promise((resolve, reject) => {
                  modelLogo.onload = resolve;
                  modelLogo.onerror = reject;
                });
                logoCache.set(models[modelKey].settings.logo.imageData, modelLogo);
              }

              // Находим меш груди для текущей модели
              let chestMesh = null;
              let maxSize = 0;
              model.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                  const bbox = new THREE.Box3().setFromObject(child);
                  const size = bbox.max.y - bbox.min.y;
                  if (bbox.max.z > 0 && size > maxSize) {
                    chestMesh = child;
                    maxSize = size;
                  }
                }
              });

              if (chestMesh) {
                const isMultiView = isMultiModelView.value || isThreeDView.value;
                const isWomenModel = modelKey === 'womenShirt';

                // Создаем новый меш для логотипа
                const modelLogoMesh = new THREE.Mesh(
                  chestMesh.geometry.clone(),
                  new THREE.MeshBasicMaterial({
                    map: createLogoTexture(
                      models[modelKey].settings.logo.positionX,
                      models[modelKey].settings.logo.positionY,
                      models[modelKey].settings.logo.scale,
                      modelLogo
                    ),
                    transparent: true,
                    opacity: 1,
                    depthTest: true,
                    depthWrite: false,
                    side: THREE.DoubleSide,
                    blending: THREE.CustomBlending,
                    blendEquation: THREE.AddEquation,
                    blendSrc: THREE.SrcAlphaFactor,
                    blendDst: THREE.OneMinusSrcAlphaFactor,
                    premultipliedAlpha: true
                  })
                );

                // Копируем трансформации
                modelLogoMesh.position.copy(chestMesh.position);
                modelLogoMesh.rotation.copy(chestMesh.rotation);
                modelLogoMesh.scale.copy(chestMesh.scale);

                // Специальная обработка для женской модели в мульти-режиме
                if (isWomenModel && isMultiView) {
                  modelLogoMesh.scale.x *= -1;  // Отражаем по оси X
                  // modelLogoMesh.position.x += 0.15; // Смещаем логотип влево
                }

                modelLogoMesh.position.z += 0.001;

                modelLogoMesh.userData = {
                  isLogo: true,
                  modelKey: modelKey,
                  lastUpdated: '2025-03-11 07:06:20',
                  updatedBy: 'Zorger27'
                };

                chestMesh.parent.add(modelLogoMesh);
              }
            } catch (error) {
              console.error(`❌ Ошибка при добавлении логотипа для модели ${modelKey}:`, error);
            }
          })());
        }

        sceneGroup.add(model);
      });

      // Ждём загрузки всех материалов и логотипов
      await Promise.all([...materialPromises, ...logoPromises]);

      // Корректируем позицию группы
      const groupBoundingBox = new THREE.Box3().setFromObject(sceneGroup);
      const groupHeight = groupBoundingBox.max.y - groupBoundingBox.min.y;
      sceneGroup.position.y = -groupBoundingBox.min.y - groupHeight * 0.5;

      console.log(`🎯 Группа -> X: ${sceneGroup.position.x}, Y: ${sceneGroup.position.y}`);

      renderer.render(scene, camera);
      console.log("🎉 Все модели и логотипы загружены (2 спереди, 2 сзади)!");
    };

    // Функция очистки сцены
    const clearScene = () => {
      if (sceneGroup) {
        sceneGroup.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            if (object.geometry) {
              object.geometry.dispose();
            }
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach(material => {
                  if (material.map) material.map.dispose();
                  material.dispose();
                });
              } else {
                if (object.material.map) object.material.map.dispose();
                object.material.dispose();
              }
            }
          }
        });
        scene.remove(sceneGroup);
        sceneGroup = null;
      }

      // Очищаем все меши логотипов
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh && object.userData.isLogo) {
          if (object.material && object.material.map) {
            object.material.map.dispose();
          }
          if (object.material) {
            object.material.dispose();
          }
          if (object.geometry) {
            object.geometry.dispose();
          }
          object.parent?.remove(object);
        }
      });

      // Запускаем сборщик мусора
      renderer.renderLists.dispose();
    };

    // Функция применяет настройки материала
    const applyMaterialSettings = async (material, modelKey) => {
      if (!models[modelKey]) {
        console.warn(`⚠️ Нет настроек для модели: ${modelKey}`);
        return;
      }

      const settings = models[modelKey].settings;
      if (!settings) return;

      let needsUpdate = false;

      // Преобразуем цвет из HEX в THREE.Color, если нужно
      const newColor = new THREE.Color(settings.color);
      newColor.multiplyScalar(settings.brightnessMultiplier); // Применяем яркость

      // Загружаем текстуру, если она указана (асинхронно)
      const newTexture = settings.texture ? await getTexture(settings.texture) : null;

      // Если включено смешивание - применяем цвет и текстуру вместе
      if (isMixingEnabled.value && settings.texture) {
        if (!material.color.equals(newColor)) {
          material.color.set(newColor);
          needsUpdate = true;
        }
        if (material.map !== newTexture) {
          material.map = newTexture; // Применяем текстуру, если она изменилась
          needsUpdate = true;
        }
      }
      // Если текстура задана, но смешивание отключено - применяем только текстуру
      else if (!isMixingEnabled.value && settings.texture) {
        if (!material.color.equals(newColor)) {
          material.color.set(newColor);
          needsUpdate = true;
        }
        if (material.map !== newTexture) {
          material.map = newTexture;
          needsUpdate = true;
        }
      }
      // Если текстуры нет - применяем только цвет
      else {
        if (!material.color.equals(newColor)) {
          material.color.set(newColor);
          needsUpdate = true;
        }
        if (material.map) {
          material.map = null;
          needsUpdate = true;
        }
      }

      // Применяем roughness и metalness
      if (material.roughness !== settings.roughness || material.metalness !== settings.metalness) {
        material.roughness = settings.roughness;
        material.metalness = settings.metalness;
        needsUpdate = true;
      }

      // Обновляем сцену, если были изменения
      if (needsUpdate) {
        material.needsUpdate = true;
        // setTimeout(() => renderer.render(scene, camera), 50); // Небольшая задержка для обновления
        renderer.render(scene, camera);
      }
    };

    const init = () => {
      // Создаем сцену
      scene = new THREE.Scene();

      // Создаем камеру
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 3;

      // Создаем рендерер
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.addEventListener('change', () => renderer.render(scene, camera));

      scene.add(camera);

      // Добавляем освещение
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 10, 5);
      scene.add(directionalLight);

      // Загружаем модель по умолчанию
      loadModel('menShirt1'); // По умолчанию загружается мужская тенниска

      // Добавляем рендерер в контейнер
      canvasContainer.value.appendChild(renderer.domElement);

      // Обновляем сцену
      const animate = () => {
        requestAnimationFrame(animate);

        // Проверяем, инициализирована ли `sceneGroup`
        if (sceneGroup && sceneGroup.children.length > 0) {
          sceneGroup.children.forEach((model) => {
            const modelKey = model.userData.modelKey;
            const state = rotationStates.get(modelKey);

            if (state?.clockwise) model.rotation.y += 0.02;
            else if (state?.counterClockwise) model.rotation.y -= 0.02;
          });
        }

        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    };

    // Универсальная функция для изменения материалов модели
    const updateMaterials = async (callback) => {
      return new Promise((resolve) => {
        if (!model) return resolve();

        const modelKey = model.userData.modelKey;

        // Сохраняем ссылку на текущий логотип, если он есть
        let currentLogo = null;
        model.traverse((child) => {
          if (child.userData?.isLogo) {
            currentLogo = {
              mesh: child,
              position: child.position.clone(),
              rotation: child.rotation.clone(),
              scale: child.scale.clone()
            };
          }
        });

        // Обновляем материалы
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const materials = Array.isArray(child.material) ? child.material : [child.material];
            materials.forEach((material) => {
              if (material instanceof THREE.MeshStandardMaterial) {
                callback(material);
              }
            });
          }
        });

        // Восстанавливаем логотип, если он был
        if (currentLogo && models[modelKey]?.settings?.logo) {
          const logoMesh = currentLogo.mesh;
          logoMesh.position.copy(currentLogo.position);
          logoMesh.rotation.copy(currentLogo.rotation);
          logoMesh.scale.copy(currentLogo.scale);

          // Обновляем текстуру логотипа
          if (logoMesh.material && logoMesh.material.map) {
            logoMesh.material.needsUpdate = true;
          }
        }

        // Принудительно обновляем сцену
        scene.updateMatrixWorld(true);
        renderer.render(scene, camera);

        resolve();
      });
    };

    // Функция изменения цвета модели
    const changeColor = (colorHex) => {
      if (!model) return;
      const modelKey = model.userData.modelKey;
      if (!modelKey) return;

      models[modelKey].settings.color = new THREE.Color(colorHex); // Обновляем настройки модели
      if (!isMixingEnabled.value) {
        models[modelKey].settings.texture = null; // Убираем текстуру, если смешивание выключено
      }

      saveModelsToStorage();
      updateMaterials((material) => {applyMaterialSettings(material, modelKey);});

      // setTimeout(() => renderer.render(scene, camera), 50); // Обновляем рендер после смены цвета
      renderer.render(scene, camera);
    };

    // Функция изменения текстуры модели
    const changeTexture = (textureKey) => {
      if (!model) return;
      const modelKey = model.userData.modelKey;
      if (!modelKey || !textures[textureKey]) return;

      models[modelKey].settings.texture = textures[textureKey]; // Обновляем настройки модели
      if (!isMixingEnabled.value) {
        models[modelKey].settings.color = models[modelKey].originalSettings.color; // Сбрасываем цвет к оригинальному, если смешивание выключено
      }

      saveModelsToStorage();
      updateMaterials((material) => {applyMaterialSettings(material, modelKey);});

      renderer.render(scene, camera);
    };

    const toggleMixing = () => {
      isMixingEnabled.value = !isMixingEnabled.value;
      updateMaterials((material) => {applyMaterialSettings(material);});
      saveModelsToStorage(); // Сохранение изменений
    };

    // Загрузка текстуры с диска (FileReader.readAsDataURL())
    const uploadTexture = async (event) => {
      // Получаем файл из события, если его нет — прекращаем выполнение функции
      const file = event.target.files[0];
      if (!file || !model) return;  // Если файл или модель не найдены, прекращаем выполнение

      // Получаем ключ модели, если он отсутствует — прекращаем выполнение
      const modelKey = model.userData.modelKey;
      if (!modelKey) return;

      // Создаём новый объект FileReader для чтения содержимого файла
      const reader = new FileReader();

      // Оборачиваем FileReader в Promise для асинхронной загрузки текстуры
      const loadTexture = new Promise((resolve, reject) => {
        // Если чтение файла прошло успешно, разрешаем Promise с результатом (DataURL)
        reader.onload = function (e) {
          resolve(e.target.result);  // Передаем результат чтения файла
        };

        // Если произошла ошибка при чтении файла, отклоняем Promise с ошибкой
        reader.onerror = function (error) {
          reject(error);  // Отклоняем Promise с ошибкой
        };

        // Запускаем чтение файла как DataURL (встроенный формат для изображений)
        reader.readAsDataURL(file);
      });

      try {
        // Ждем завершения загрузки текстуры и обновляем настройки модели
        models[modelKey].settings.texture = await loadTexture;

        // Если смешивание текстуры выключено, сбрасываем цвет модели к оригинальному
        if (!isMixingEnabled.value) {
          models[modelKey].settings.color = models[modelKey].originalSettings.color;
        }

        // Обновляем все материалы модели с применением новых настроек
        await updateMaterials((material) => {
          applyMaterialSettings(material, modelKey);  // Применяем настройки к материалам
        });

        // Сохраняем обновленные настройки модели в localStorage
        saveModelsToStorage();
      } catch (error) {
        // Обработка ошибок при загрузке текстуры
        console.error('Ошибка при загрузке текстуры:', error);
      }
    };

    // Изменение цвета через палитру
    const changeColorFromPicker = (event) => {
      changeColor(event.target.value);
    };

    // Сброс настроек модели!!!
    const resetModelSettings = async () => {
      if (!model) return;

      const modelKey = model.userData.modelKey;
      if (!modelKey) return;

      // Очищаем логотип
      if (logoMesh) {
        logoMesh.parent?.remove(logoMesh);
        if (logoMesh.material.map) {
          logoMesh.material.map.dispose();
        }
        logoMesh.material.dispose();
        logoMesh.geometry.dispose();
        logoMesh = null;
      }
      lastLoadedImage = null;
      positionX.value = 0;
      positionY.value = 0;
      scale.value = 1;

      // Восстанавливаем настройки модели из оригинальных
      models[modelKey].settings = {
        ...models[modelKey].originalSettings,
        logo: {
          imageData: null,
          positionX: 0,
          positionY: 0,
          scale: 1
        }
      };

      await updateMaterials((material) => {applyMaterialSettings(material, modelKey);});

      saveModelsToStorage();
      renderer.render(scene, camera);
    };

    // Флаг для направления вращения перед паузой
    let lastRotationDirection = null;

    // Флаг для хранения направлений вращения каждой модели
    let rotationStates = new Map(); // { modelKey: { clockwise: true/false, counterClockwise: true/false } }

    // Вращение по часовой стрелке (для всех моделей)
    const rotateClockwise = () => {
      rotationStates.forEach((state) => {
        state.clockwise = true;
        state.counterClockwise = false;
      });
      lastRotationDirection = 'clockwise';
    };

    // Вращение против часовой стрелке (для всех моделей)
    const rotateCounterClockwise = () => {
      rotationStates.forEach((state) => {
        state.clockwise = false;
        state.counterClockwise = true;
      });
      lastRotationDirection = 'counterclockwise';
    };

    // Пауза / Возобновление вращения (для всех моделей)
    const pauseRotation = () => {
      rotationStates.forEach((state) => {
        if (state.clockwise || state.counterClockwise) {
          state.clockwise = false;
          state.counterClockwise = false;
        } else {
          state.clockwise = lastRotationDirection === "clockwise";
          state.counterClockwise = lastRotationDirection === "counterclockwise";
        }
      });
    };

    // Остановка и сброс вращения (для всех моделей)
    const stopRotation = () => {
      sceneGroup.children.forEach((model) => {
        model.rotation.set(0, 0, 0);
      });

      rotationStates.forEach((state) => {
        state.clockwise = false;
        state.counterClockwise = false;
      });

      lastRotationDirection = null;
    };

    // Поворот на 180 градусов (для всех моделей)
    const rotate180 = () => {
      sceneGroup.children.forEach((model) => {
        model.rotation.y += Math.PI;
      });
    };

    // Переключение меню
    const toggleSaveMenu = () => {showSaveOptions.value = !showSaveOptions.value;};

    // Закрывает меню после нажатия на кнопку
    const closeSaveMenu = () => {
      if (!isRecording.value) { // Не закрываем меню, если идет запись
        showSaveOptions.value = false;
      }
    };

    const toggleColorMenu = () => {
      showColorMenu.value = !showColorMenu.value;
      if (showColorMenu.value) showTextureMenu.value = false; // Закрываем другое меню
    };

    const closeColorMenu = () => {showColorMenu.value = false;};

    const toggleTextureMenu = () => {
      showTextureMenu.value = !showTextureMenu.value;
      if (showTextureMenu.value) showColorMenu.value = false; // Закрываем другое меню
    };

    const closeTextureMenu = () => {showTextureMenu.value = false;};

    // Открыть или закрыть меню "Брендирование"
    const toggleBranding = () => {
      isBrandingOpen.value = !isBrandingOpen.value;
      if (!isBrandingOpen.value) showLogoMenu.value = false;
    };

    const toggleLogoMenu = () => {showLogoMenu.value = !showLogoMenu.value;}

    const closeLogoMenu = () => {showLogoMenu.value = false;};

    const closeAllMenus = () => {
      if (isRecording.value) {
        showSaveOptions.value = true;
        showColorMenu.value = false;
        showTextureMenu.value = false;
        showLogoMenu.value = false;
        // isBrandingOpen.value = false;
      } else {
        showColorMenu.value = false;
        showTextureMenu.value = false;
        showSaveOptions.value = false;
        showLogoMenu.value = false;
        // isBrandingOpen.value = true;
      }
    };

    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".color-container") &&
        !event.target.closest(".texture-container") &&
        !event.target.closest(".special-controls")
      ) {
        closeAllMenus();
      }
    };

    // Функция для изменения логотипов из заранее загруженных
    const changeLogo = async (logoKey) => {
      if (!model) return;

      const modelKey = model.userData.modelKey;
      if (!modelKey || !logos[logoKey]) return;

      try {
        const previousSettings = models[modelKey].settings?.logo ?? {
          positionX: 0.5,
          positionY: 0.5,
          scale: 1.0
        };

        clearLogo();

        // Загружаем логотип
        if (!logoCache.has(logos[logoKey])) {
          lastLoadedImage = new Image();
          lastLoadedImage.src = logos[logoKey];
          await new Promise((resolve, reject) => {
            lastLoadedImage.onload = resolve;
            lastLoadedImage.onerror = reject;
          });
          logoCache.set(logos[logoKey], lastLoadedImage);
        } else {
          lastLoadedImage = logoCache.get(logos[logoKey]);
        }

        // Обновляем настройки логотипа в модели
        models[modelKey].settings.logo = {
          imageData: logos[logoKey],
          positionX: Number(previousSettings.positionX),
          positionY: Number(previousSettings.positionY),
          scale: Number(previousSettings.scale),
          lastModified: '2025-03-12 03:33:58',
          modifiedBy: 'Zorger27'
        };

        // Синхронизируем значения ползунков
        await syncSliderValues(modelKey);

        await createLogoMesh();
        saveModelsToStorage();
        await updateMaterials();

        renderer.render(scene, camera);

      } catch (error) {
        console.error('Error changing logo:', error);
      }
    };

    // 📌 Функция получения данных для сохранения
    const getSaveMetadata = () => {
      let title = "Unknown Model";

      if (currentModelKey.value) {
        const model = models[currentModelKey.value];
        title = model ? t(model.name) : currentModelKey.value;
      } else if (isThreeDView.value) {
        title = t('extra.graphics.couture3d.models.composition2x2');
      } else if (isMultiModelView.value) {
        title = t('extra.graphics.couture3d.models.composition1x4');
      }

      const dateTime = new Date().toLocaleString();
      const footer = t('extra.graphics.couture3d.special.created');
      const site = "https://couture-metaverse.vercel.app";

      return { title, dateTime, footer, site };
    };

    // Сохранение сцены как JPG (белый фон)
    const saveAsJPG = () => {
      if (!renderer || !scene || !camera) {
        console.error("Ошибка: renderer, scene или camera не инициализированы");
        return;
      }

      renderer.render(scene, camera);
      const canvas = renderer.domElement;
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");

      // Определение мобильного режима
      const isMobile = window.innerWidth < 768;

      // Коэффициент масштабирования
      const scaleFactor = isMobile ? 1.2 : 1.0;
      let baseFontSize = Math.floor(canvas.width * 0.045 * scaleFactor);
      const smallFontSize = Math.floor(baseFontSize * 0.7);
      let footerFontSize = Math.floor(baseFontSize * 0.6);
      const padding = Math.floor(baseFontSize * 1.1);

      // Система отступов
      const topMargin = padding * (isMobile ? 2.0 : 1.2); // Отступ сверху
      const titleDateSpacing = padding * (isMobile ? 1.0 : 0.9); // Пробел для заголовка-даты
      const footerSiteSpacing = padding * (isMobile ? 0.8 : 0.7); // Пробел для footer-site
      const bottomMargin = padding * (isMobile ? 1.0 : 0.5); // Отступ снизу

      const canvasWidth = canvas.width + padding * 2;
      const canvasHeight = canvas.height + topMargin + titleDateSpacing + footerSiteSpacing + bottomMargin;

      tempCanvas.width = canvasWidth;
      tempCanvas.height = canvasHeight;

      tempCtx.fillStyle = "white";
      tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      tempCtx.drawImage(canvas, padding, topMargin + titleDateSpacing);

      const { title, dateTime, footer, site } = getSaveMetadata();

      // Функция для динамического подбора размера шрифта
      const adjustFontSize = (text, maxWidth, initialFontSize) => {
        let fontSize = initialFontSize;
        do {
          tempCtx.font = `bold ${fontSize}px Arial`;
          if (tempCtx.measureText(text).width <= maxWidth) {
            return fontSize;
          }
          fontSize--;
        } while (fontSize > 10);
        return fontSize;
      };

      // Подбор размера шрифта для каждого текста
      baseFontSize = adjustFontSize(title, tempCanvas.width * 0.9, baseFontSize);
      footerFontSize = adjustFontSize(footer, tempCanvas.width * 0.9, footerFontSize);
      const siteFontSize = adjustFontSize(site, tempCanvas.width * 0.9, footerFontSize);

      // 📌 Заголовок (зелёный)
      tempCtx.font = `bold ${baseFontSize}px Arial`;
      tempCtx.fillStyle = "green";
      tempCtx.textAlign = "center";
      tempCtx.fillText(title, tempCanvas.width / 2, topMargin);

      // 📅 Дата (голубая)
      tempCtx.font = `normal ${smallFontSize}px Arial`;
      tempCtx.fillStyle = "dodgerblue";
      tempCtx.fillText(dateTime, tempCanvas.width / 2, topMargin + titleDateSpacing);

      // 🔽 Footer (розовый)
      const footerY = tempCanvas.height - footerSiteSpacing - bottomMargin;
      tempCtx.font = `normal ${footerFontSize}px Arial`;
      tempCtx.fillStyle = "deeppink";
      tempCtx.fillText(footer, tempCanvas.width / 2, footerY);

      // 📅 Сайт (синий)
      tempCtx.font = `italic ${siteFontSize}px Arial`;
      tempCtx.fillStyle = "blue";
      tempCtx.fillText(site, tempCanvas.width / 2, footerY + footerSiteSpacing);

      const image = tempCanvas.toDataURL("image/jpeg", 0.99);
      const link = document.createElement("a");
      link.href = image;
      link.download = "model.jpg";
      link.click();

      closeSaveMenu();
    };

    // Сохранение сцены как PNG (прозрачный фон)
    const saveAsPNG = () => {
      if (!renderer || !scene || !camera) return;

      renderer.render(scene, camera);
      const canvas = renderer.domElement;
      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");

      // Определение мобильного режима
      const isMobile = window.innerWidth < 768;

      // Коэффициент масштабирования
      const scaleFactor = isMobile ? 1.2 : 1.0;
      let baseFontSize = Math.floor(canvas.width * 0.045 * scaleFactor);
      const smallFontSize = Math.floor(baseFontSize * 0.7);
      let footerFontSize = Math.floor(baseFontSize * 0.6);
      const padding = Math.floor(baseFontSize * 1.1);

      // Система отступов
      const topMargin = padding * (isMobile ? 2.0 : 1.2); // Отступ сверху
      const titleDateSpacing = padding * (isMobile ? 1.0 : 0.9); // Пробел для заголовка-даты
      const footerSiteSpacing = padding * (isMobile ? 0.8 : 0.7); // Пробел для footer-site
      const bottomMargin = padding * (isMobile ? 1.0 : 0.5); // Отступ снизу

      const canvasWidth = canvas.width + padding * 2;
      const canvasHeight = canvas.height + topMargin + titleDateSpacing + footerSiteSpacing + bottomMargin;

      tempCanvas.width = canvasWidth;
      tempCanvas.height = canvasHeight;

      // tempCtx.fillStyle = "white";
      // tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
      tempCtx.drawImage(canvas, padding, topMargin + titleDateSpacing);

      const { title, dateTime, footer, site } = getSaveMetadata();

      // Функция для динамического подбора размера шрифта
      const adjustFontSize = (text, maxWidth, initialFontSize) => {
        let fontSize = initialFontSize;
        do {
          tempCtx.font = `bold ${fontSize}px Arial`;
          if (tempCtx.measureText(text).width <= maxWidth) {
            return fontSize;
          }
          fontSize--;
        } while (fontSize > 10);
        return fontSize;
      };

      // Подбор размера шрифта для каждого текста
      baseFontSize = adjustFontSize(title, tempCanvas.width * 0.9, baseFontSize);
      footerFontSize = adjustFontSize(footer, tempCanvas.width * 0.9, footerFontSize);
      const siteFontSize = adjustFontSize(site, tempCanvas.width * 0.9, footerFontSize);

      // 📌 Заголовок (зелёный)
      tempCtx.font = `bold ${baseFontSize}px Arial`;
      tempCtx.fillStyle = "green";
      tempCtx.textAlign = "center";
      tempCtx.fillText(title, tempCanvas.width / 2, topMargin);

      // 📅 Дата (голубая)
      tempCtx.font = `normal ${smallFontSize}px Arial`;
      tempCtx.fillStyle = "dodgerblue";
      tempCtx.fillText(dateTime, tempCanvas.width / 2, topMargin + titleDateSpacing);

      // 🔽 Footer (розовый)
      const footerY = tempCanvas.height - footerSiteSpacing - bottomMargin;
      tempCtx.font = `normal ${footerFontSize}px Arial`;
      tempCtx.fillStyle = "deeppink";
      tempCtx.fillText(footer, tempCanvas.width / 2, footerY);

      // 📅 Сайт (синий)
      tempCtx.font = `italic ${siteFontSize}px Arial`;
      tempCtx.fillStyle = "blue";
      tempCtx.fillText(site, tempCanvas.width / 2, footerY + footerSiteSpacing);

      // 📸 Сохранение в PNG
      const image = tempCanvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "model.png";
      link.click();

      closeSaveMenu();
    };

    // Сохранение сцены как PDF
    const saveAsPDF = async () => {
      if (!renderer || !scene || !camera) {
        console.error("Ошибка: renderer, scene или camera не инициализированы");
        return;
      }

      // Функция для загрузки шрифта
      const loadFont = async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Не удалось загрузить шрифт: ${response.statusText}`);
        }
        return await response.arrayBuffer();
      };

      // Загрузка шрифта
      let fontArrayBuffer;
      try {
        fontArrayBuffer = await loadFont('/assets/fonts/RobotoFlex-Regular.ttf');
      } catch (error) {
        console.error(error);
        return;
      }

      const fontBase64 = btoa(
        new Uint8Array(fontArrayBuffer)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );

      // Добавление кастомного шрифта в jsPDF
      const addCustomFont = (pdf) => {
        pdf.addFileToVFS('RobotoFlex-Regular.ttf', fontBase64);
        pdf.addFont('RobotoFlex-Regular.ttf', 'RobotoFlex', 'normal');
      };

      renderer.render(scene, camera);
      const tempCanvas = document.createElement("canvas");
      const ctx = tempCanvas.getContext("2d");
      const { width, height } = renderer.domElement;

      tempCanvas.width = width;
      tempCanvas.height = height;

      // ⚪ 1️⃣ Заливаем фон белым
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, width, height);

      // 🔄 2️⃣ Рендерим сцену
      renderer.render(scene, camera);

      // 🖼️ 3️⃣ Копируем WebGL canvas поверх белого фона
      ctx.drawImage(renderer.domElement, 0, 0);

      // 📸 4️⃣ Конвертируем в JPEG (99% качество)
      const image = tempCanvas.toDataURL("image/jpeg", 0.99);

      const pdf = new jsPDF("landscape", "mm", "a4");
      addCustomFont(pdf);
      pdf.setFont('RobotoFlex');

      const { title, dateTime, footer, site } = getSaveMetadata();

      // 📌 Расчёт масштабирования
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const canvasRatio = width / height;
      const pdfRatio = pageWidth / pageHeight;

      let imgWidth, imgHeight;
      if (canvasRatio > pdfRatio) {
        imgWidth = pageWidth;
        imgHeight = pageWidth / canvasRatio;
      } else {
        imgHeight = pageHeight;
        imgWidth = pageHeight * canvasRatio;
      }

      // 📌 Расчёт центровки
      const xOffset = (pageWidth - imgWidth) / 2;
      const yOffset = (pageHeight - imgHeight) / 2 + 10; // Добавляем отступ вниз

      pdf.addImage(image, "JPEG", xOffset, yOffset, imgWidth, imgHeight);

      // 📝 5️⃣ Добавляем текст
      pdf.setFontSize(22);
      pdf.setTextColor(0, 128, 0);
      pdf.text(title, pageWidth / 2, 15, { align: "center" });

      pdf.setFontSize(16);
      pdf.setTextColor(30, 144, 255);
      pdf.text(dateTime, pageWidth / 2, 25, { align: "center" });

      pdf.setFontSize(14);
      pdf.setTextColor(255, 105, 180);
      pdf.text(footer, pageWidth / 2, pageHeight - 12, { align: "center" });

      pdf.setFont("RobotoFlex", "italic");
      pdf.setTextColor(0, 0, 255);
      pdf.setFontSize(14);
      pdf.text(site, pageWidth / 2, pageHeight - 5, { align: "center" });

      pdf.save("model.pdf");

      closeSaveMenu(); // Закрываем меню
    };

    // Начать запись видео
    const startRecording = () => {
      if (!renderer || !scene || !camera) {
        console.error("Ошибка: renderer, scene или camera не инициализированы");
        return;
      }

      const streamCanvas = document.createElement("canvas");
      const streamCtx = streamCanvas.getContext("2d");
      streamCanvas.width = renderer.domElement.width;
      streamCanvas.height = renderer.domElement.height;
      const stream = streamCanvas.captureStream(60); // 60 FPS

      // 📏 Динамические параметры
      const isMobile = window.innerWidth < 768;
      const baseFontSize = Math.floor(streamCanvas.width * 0.03);
      const smallFontSize = Math.floor(baseFontSize * 0.7);
      const footerFontSize = Math.floor(baseFontSize * 0.6);

      // 🛠️ Отступы
      const paddingTop = baseFontSize * (isMobile ? 2.0 : 1.2); // Отступ сверху
      const paddingBottom = baseFontSize * (isMobile ? 1.0 : 0.5); // Отступ снизу
      const textSpacing = baseFontSize * (isMobile ? 1.0 : 0.9); // Расстояние между текстами

      const drawFrame = () => {
        renderer.render(scene, camera);
        streamCtx.fillStyle = "white";
        streamCtx.fillRect(0, 0, streamCanvas.width, streamCanvas.height);
        streamCtx.drawImage(renderer.domElement, 0, 0);

        const { title, dateTime, footer, site } = getSaveMetadata();

        // 📌 Заголовок (зелёный)
        streamCtx.font = `bold ${baseFontSize}px Arial`;
        streamCtx.fillStyle = "green";
        streamCtx.textAlign = "center";
        streamCtx.fillText(title, streamCanvas.width / 2, paddingTop);

        // 📅 Дата (голубая)
        streamCtx.font = `normal ${smallFontSize}px Arial`;
        streamCtx.fillStyle = "dodgerblue";
        streamCtx.fillText(dateTime, streamCanvas.width / 2, paddingTop + textSpacing);

        // 🔽 Footer (розовый)
        streamCtx.font = `normal ${footerFontSize}px Arial`;
        streamCtx.fillStyle = "deeppink";
        streamCtx.fillText(footer, streamCanvas.width / 2, streamCanvas.height - paddingBottom - textSpacing);

        // 📅 Сайт (синий)
        streamCtx.font = `italic ${footerFontSize}px Arial`;
        streamCtx.fillStyle = "blue";
        streamCtx.fillText(site, streamCanvas.width / 2, streamCanvas.height - paddingBottom);

        requestAnimationFrame(drawFrame);
      };

      drawFrame(); // Запуск обновления кадров

      if (MediaRecorder.isTypeSupported("video/webm; codecs=vp9")) {
        mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm; codecs=vp9" });
      } else if (MediaRecorder.isTypeSupported("video/webm; codecs=vp8")) {
        mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm; codecs=vp8" });
      } else if (window.MediaSource && MediaSource.isTypeSupported("video/mp4; codecs=avc1.42E01E")) {
        console.log("🎥 Safari обнаружен! Используем MediaSource для записи MP4.");
        startRecordingForSafari(stream);
        return;
      } else {
        console.error("⛔ Ваш браузер не поддерживает запись видео.");
        return;
      }

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) recordedChunks.push(event.data);
      };

      mediaRecorder.onstop = saveVideo;
      recordedChunks = [];
      mediaRecorder.start();
      isRecording.value = true;
      console.log("🎥 Запись началась с аннотациями!");
    };

    // Запись видео для Safari
    const startRecordingForSafari = (stream) => {
      safariStream = stream;
      safariRecorder = new MediaRecorder(safariStream, { mimeType: "video/mp4" });

      safariRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) recordedChunks.push(event.data);
      };

      safariRecorder.onstop = saveVideo;

      recordedChunks = [];
      safariRecorder.start();
      isRecording.value = true;
      console.log("🎥 Запись MP4 началась (Safari)!");
    };

    // Остановка записи
    const stopRecording = () => {
      if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
      }

      if (safariRecorder && safariRecorder.state !== "inactive") {
        safariRecorder.stop();
      }

      isRecording.value = false;
      console.log("🛑 Запись остановлена!");

      closeSaveMenu(); // Закрываем меню только теперь!
    };

    // Сохранение видео
    const saveVideo = () => {
      if (recordedChunks.length === 0) {
        console.warn("⚠️ Нет записанных данных!");
        return;
      }

      const mimeType = safariRecorder ? "video/mp4" : "video/webm";
      const blob = new Blob(recordedChunks, { type: mimeType });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `model.${safariRecorder ? "mp4" : "webm"}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
      recordedChunks = [];
      console.log("💾 Видео сохранено!");
    };

    // Функция для работы с кешем логотипов
    const getCachedLogo = async (imageData) => {
      if (!logoCache.has(imageData)) {
        const image = new Image();
        image.src = imageData;
        await new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
        });
        logoCache.set(imageData, image);
      }
      return logoCache.get(imageData);
    };

    // Нанесение логотипа на модель
    const loadBrandImage = async (event) => {
      if (!event.target.files || !event.target.files[0]) return;
      if (!model) return;

      const modelKey = model.userData.modelKey;
      if (!modelKey) return;

      try {
        const file = event.target.files[0];
        if (!file) return;

        clearLogo();

        // Конвертируем файл в base64 для сохранения
        const base64Image = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });

        // Создаем временный URL для загрузки изображения
        const imageUrl = URL.createObjectURL(file);
        lastLoadedImage = new Image();
        lastLoadedImage.src = imageUrl;

        await new Promise((resolve, reject) => {
          lastLoadedImage.onload = resolve;
          lastLoadedImage.onerror = reject;
        });

        // Получаем предыдущие настройки или значения по умолчанию
        const previousSettings = models[modelKey].settings?.logo ?? {
          positionX: 0.5,
          positionY: 0.5,
          scale: 1.0
        };

        // Обновляем настройки, сохраняя base64 вместо URL
        models[modelKey].settings.logo = {
          imageData: base64Image, // Сохраняем base64 строку
          positionX: Number(previousSettings.positionX),
          positionY: Number(previousSettings.positionY),
          scale: Number(previousSettings.scale),
        };

        // Синхронизируем значения ползунков
        await syncSliderValues(modelKey);

        await createLogoMesh();
        saveModelsToStorage();

        // Очищаем input и освобождаем URL
        event.target.value = '';
        URL.revokeObjectURL(imageUrl);

        renderer.render(scene, camera);

      } catch (error) {
        console.error('Error loading brand image:', error);
        if (event.target) {
          event.target.value = '';
        }
      }
    };

    // Подготовка текстуры логотипа
    const createLogoTexture = (positionX, positionY, scale, image) => {
      if (!image) {
        console.error('No image provided for logo texture');
        return null;
      }

      try {
        // Получаем текущую модель
        const modelKey = model.userData.modelKey;
        const isMultiView = isMultiModelView.value || isThreeDView.value;

        const textureWidth = 2048;
        const textureHeight = 2048;

        const logoCanvas = document.createElement("canvas");
        const logoCtx = logoCanvas.getContext("2d", { alpha: true });
        if (!logoCtx) {
          console.error('Could not get 2D context');
          return null;
        }

        logoCanvas.width = textureWidth;
        logoCanvas.height = textureHeight;

        logoCtx.imageSmoothingEnabled = true;
        logoCtx.imageSmoothingQuality = 'high';

        // Очищаем канвас перед рисованием
        logoCtx.clearRect(0, 0, textureWidth, textureHeight);

        const baseLogoWidth = Math.floor(textureWidth * 0.15);
        const maxLogoWidth = Math.floor(baseLogoWidth * scale);
        const aspectRatio = image.width / image.height;
        const logoWidth = maxLogoWidth;
        const logoHeight = Math.floor(maxLogoWidth / aspectRatio);

        const x = Math.floor(textureWidth * (0.33 + positionX * 0.3));
        const y = Math.floor(textureHeight * (0.39 + positionY * 0.3));

        logoCtx.save();

        // Перемещаем в точку отрисовки
        logoCtx.translate(x, y);

        // Логика отражения в зависимости от модели и режима просмотра
        if (modelKey === 'womenShirt') {
          if (isMultiView) {
            logoCtx.scale(1, -1);  // для женской в мульти-режиме
          } else {
            logoCtx.scale(-1, -1); // для женской в одиночном режиме
          }
        } else {
          logoCtx.scale(1, -1);    // для мужских моделей всегда одинаково
        }

        // Центрируем изображение
        logoCtx.translate(-logoWidth/2, -logoHeight/2);

        // Рисуем изображение
        logoCtx.drawImage(image, 0, 0, logoWidth, logoHeight);

        logoCtx.restore();

        const texture = new THREE.Texture(logoCanvas);
        texture.transparent = true;
        texture.needsUpdate = true;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture.colorSpace = THREE.SRGBColorSpace;

        texture.userData = {
          lastModified: '2025-03-12 03:03:25',
          modifiedBy: 'Zorger27'
        };

        return texture;

      } catch (error) {
        console.error('Error creating logo texture:', error);
        return null;
      }
    };

    // Функция создания меша логотипа
    const createLogoMesh = async () => {
      if (!model || !lastLoadedImage) {
        console.error('Missing model or image for logo creation');
        return;
      }

      const modelKey = model.userData.modelKey;
      if (!modelKey) {
        console.error('Missing modelKey');
        return;
      }

      // Находим меш груди
      let chestMesh = null;
      let maxSize = 0;
      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const bbox = new THREE.Box3().setFromObject(child);
          const size = bbox.max.y - bbox.min.y;
          if (bbox.max.z > 0 && size > maxSize) {
            chestMesh = child;
            maxSize = size;
          }
        }
      });

      if (!chestMesh) {
        console.error('Could not find chest mesh');
        return;
      }

      try {
        const isMultiView = isMultiModelView.value || isThreeDView.value;
        const isWomenModel = modelKey === 'womenShirt';

        // Создаем текстуру логотипа
        const texture = createLogoTexture(
          positionX.value,
          positionY.value,
          scale.value,
          lastLoadedImage
        );

        // Создаем материал для логотипа
        const logoMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 1,
          depthTest: true,
          depthWrite: false,
          side: THREE.DoubleSide,
          blending: THREE.CustomBlending,
          blendEquation: THREE.AddEquation,
          blendSrc: THREE.SrcAlphaFactor,
          blendDst: THREE.OneMinusSrcAlphaFactor,
          premultipliedAlpha: true
        });

        // Создаем меш для логотипа
        logoMesh = new THREE.Mesh(chestMesh.geometry.clone(), logoMaterial);

        // Копируем трансформации
        logoMesh.position.copy(chestMesh.position);
        logoMesh.rotation.copy(chestMesh.rotation);
        logoMesh.scale.copy(chestMesh.scale);

        if (isWomenModel && isMultiView) {
          logoMesh.scale.x *= -1;
        }

        logoMesh.position.z += 0.001;

        // Добавляем метаданные
        logoMesh.userData = {
          isLogo: true,
          modelKey: modelKey,
          lastModified: '2025-03-12 02:52:35',
          modifiedBy: 'Zorger27'
        };

        // Добавляем меш к родительскому объекту
        chestMesh.parent.add(logoMesh);

        return true;
      } catch (error) {
        console.error('Error creating logo mesh:', error);
        return false;
      }
    };

    // Функция обновления текстуры логотипа
    const updateLogoTexture = async () => {
      if (!model || !lastLoadedImage || !logoMesh) return;

      const modelKey = model.userData.modelKey;
      if (!modelKey || !models[modelKey].settings?.logo) return;

      try {
        // Получаем текущие значения ползунков
        const currentX = Number(positionX.value);
        const currentY = Number(positionY.value);
        const currentScale = Number(scale.value);

        const texture = createLogoTexture(
          currentX,
          currentY,
          currentScale,
          lastLoadedImage
        );

        if (!texture) return;

        // Правильное освобождение старой текстуры
        if (logoMesh.material && logoMesh.material.map) {
          const oldTexture = logoMesh.material.map;
          logoMesh.material.map = null;
          oldTexture.dispose();
        }

        // Применяем новую текстуру
        logoMesh.material.map = texture;
        logoMesh.material.needsUpdate = true;

        // Синхронизируем значения в модели
        models[modelKey].settings.logo = {
          ...models[modelKey].settings.logo,
          positionX: currentX,
          positionY: currentY,
          scale: currentScale,
          lastModified: '2025-03-12 03:11:26',
          modifiedBy: 'Zorger27'
        };

        renderer.render(scene, camera);
      } catch (error) {
        console.error('Error updating logo texture:', error);
      }
    };

    // Функция очистки логотипа
    const clearLogo = () => {
      if (!model) return;

      model.traverse((child) => {
        if (child.userData?.isLogo) {
          if (child.material) {
            // Правильное освобождение текстуры
            if (child.material.map) {
              const oldTexture = child.material.map;
              child.material.map = null;
              oldTexture.dispose();
            }
            child.material.dispose();
          }
          if (child.geometry) {
            child.geometry.dispose();
          }
          if (child.parent) {
            child.parent.remove(child);
          }
        }
      });

      // Обновляем рендер после очистки
      renderer.render(scene, camera);
    };

    // Функция синхронизации ползунков
    const syncSliderValues = async (modelKey) => {
      if (!models[modelKey]?.settings?.logo) return;

      const logoSettings = models[modelKey].settings.logo;

      // Если значения уже совпадают, Vue не должен обновлять UI
      if (
        positionX.value !== Number(logoSettings.positionX) ||
        positionY.value !== Number(logoSettings.positionY) ||
        scale.value !== Number(logoSettings.scale)
      ) {
        positionX.value = Number(logoSettings.positionX);
        positionY.value = Number(logoSettings.positionY);
        scale.value = Number(logoSettings.scale);
        await nextTick();
      }

      console.log("✅ Sliders updated smoothly");
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Отслеживаем изменение разрешения
      const wasLargeScreen = isSmallScreen.value === false;
      isSmallScreen.value = window.innerWidth <= 768;

      // Если экран стал маленьким — закрываем меню
      if (wasLargeScreen && isSmallScreen.value) {
        isBrandingOpen.value = false;
      }
    };

    window.addEventListener('resize', onWindowResize);

    // Наблюдение за изменениями слайдеров
    watch([positionX, positionY, scale], async ([newX, newY, newScale]) => {
      console.log("🔄 watch triggered:", { newX, newY, newScale });

      if (!model || !model.userData.modelKey) return;

      const modelKey = model.userData.modelKey;
      if (!models[modelKey].settings?.logo) return;

      models[modelKey].settings.logo.positionX = Number(newX);
      models[modelKey].settings.logo.positionY = Number(newY);
      models[modelKey].settings.logo.scale = Number(newScale);

      console.log("🛠 Updated logo settings:", models[modelKey].settings.logo);

      await nextTick();

      requestAnimationFrame(() => {
        updateLogoTexture();
        saveModelsToStorage();
      });
    });

    onMounted(() => {
      init();
      onWindowResize();
      document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener("click", handleClickOutside);

      // Очищаем кеш логотипов
      logoCache.clear();

      if (model) {
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach((mat) => {
                  if (mat.map) mat.map.dispose();
                  mat.dispose();
                });
              } else {
                if (child.material.map) child.material.map.dispose();
                child.material.dispose();
              }
            }
            if (child.geometry) {
              child.geometry.dispose();
            }
          }
        });
        scene.remove(model);
      }

      // Очистка текстурного кеша
      Object.values(textureCache).forEach(texture => texture.dispose());

      scene.clear();
      renderer.dispose();
    });

    return {
      t, isFooterHidden, toggleFooter, canvasContainer, isSmallScreen,
      models, loadModel, loadAllModels, loadAllModels3d, isMultiModelView, isThreeDView, isWomenDress, isWomenShirt,
      uploadTexture, changeColor, changeColorFromPicker, changeTexture, changeLogo,
      toggleMixing, isMixingEnabled,
      resetModelSettings, clearLocalStorage,
      rotateClockwise, rotateCounterClockwise, pauseRotation, stopRotation, rotate180,
      showSaveOptions, toggleSaveMenu, saveAsJPG, saveAsPNG, saveAsPDF, startRecording, stopRecording, isRecording,
      toggleColorMenu, toggleTextureMenu, toggleLogoMenu, showColorMenu, showTextureMenu, showLogoMenu,
      closeColorMenu, closeTextureMenu, closeLogoMenu, closeAllMenus,
      isBrandingOpen, toggleBranding, loadBrandImage,
      scale, positionX, positionY,
      incrementX, decrementX,incrementY, decrementY, incrementScale, decrementScale
    };
  },
}
</script>

<template>
  <div class="container">
    <h1> <router-link class="back-to-menu" to="/extra/graphics" title="Back to 3D Graphics page"><i class="fa fa-arrow-circle-left"></i>
    </router-link>
      {{ t('extra.graphics.couture3d.title') }}
      <CanvasFullScreen :canvasContainer="canvasContainer" /> <ToggleFullScreen /> <button
      @click="toggleFooter" class="toggle-footer-btn" :title="isFooterHidden ? t('extra.openFooter') : t('extra.closeFooter')"><i
      :class="isFooterHidden ? 'fas fa-toggle-on' : 'fas fa-toggle-off'"></i></button>
    </h1>
    <line></line>
    <div class="scene-container" ref="canvasContainer"></div>

    <!-- Кнопки управления моделями -->
    <div class="model-selection">
      <img :src="models.menShirt1.icon" :alt="t('extra.graphics.couture3d.models.menShirt1')" @click="loadModel('menShirt1')" class="button" :title="t('extra.graphics.couture3d.models.menShirt1')">
      <img :src="models.womenShirt.icon" :alt="t('extra.graphics.couture3d.models.womenShirt')" @click="loadModel('womenShirt')" class="button" :title="t('extra.graphics.couture3d.models.womenShirt')">
      <img :src="models.menShirt2.icon" :alt="t('extra.graphics.couture3d.models.menShirt2')" @click="loadModel('menShirt2')" class="button" :title="t('extra.graphics.couture3d.models.menShirt2')">
      <img :src="models.womenDress.icon" :alt="t('extra.graphics.couture3d.models.womenDress')" @click="loadModel('womenDress')" class="button" :title="t('extra.graphics.couture3d.models.womenDress')">
      <button @click="loadAllModels" class="load-all-btn" :title="t('extra.graphics.couture3d.models.composition1x4')"><i class="fas fa-th-large"></i></button>
      <button @click="loadAllModels3d" class="load-all-btn" :title="t('extra.graphics.couture3d.models.composition2x2')"><i class="fas fa-cubes"></i></button>
      <button @click="clearLocalStorage" class="delete" :title="t('extra.graphics.couture3d.special.delete')"><i class="fas fa-broom"></i></button>
    </div>

    <!-- Кнопки управления вращением -->
    <div class="rotation-controls">
      <button @click="rotateClockwise" :title="t('extra.graphics.couture3d.rotating.clockwise')"><i class="fas fa-arrow-rotate-right"></i></button>
      <button @click="pauseRotation" :title="t('extra.graphics.couture3d.rotating.pause')"><i class="fas fa-pause"></i></button>
      <button @click="stopRotation" :title="t('extra.graphics.couture3d.rotating.stop')"><i class="fas fa-stop"></i></button>
      <button @click="rotate180" :title="t('extra.graphics.couture3d.rotating.180')"><i class="fas fa-sync-alt"></i></button>
      <button @click="rotateCounterClockwise" :title="t('extra.graphics.couture3d.rotating.counterclockwise')"><i class="fas fa-arrow-rotate-left"></i></button>
    </div>

    <div class="model-controls" v-if="!isMultiModelView && !isThreeDView">

      <!-- Кнопка и выезжающее меню для выбора цвета -->
      <div class="color-container">
        <button @click="toggleColorMenu" :title="showColorMenu ? t('extra.graphics.couture3d.changeColor.closeColorMenu') : t('extra.graphics.couture3d.changeColor.openColorMenu')" class="color-main" :class="{'active': showColorMenu}"><i class="fas fa-palette"></i></button>

        <!-- Анимированное выезжающее меню -->
        <transition name="slide">
          <div v-show="showColorMenu" class="color-controls" :class="{'show': showColorMenu}">
            <button @click="changeColor(0xfbc6c6); closeColorMenu()" :title="t('extra.graphics.couture3d.changeColor.red')" class="color-button" style="background-color: #fbc6c6;"></button>
            <button @click="changeColor(0xc6fbc6); closeColorMenu()" :title="t('extra.graphics.couture3d.changeColor.green')" class="color-button" style="background-color: #c6fbc6;"></button>
            <button @click="changeColor(0xd0d0fb); closeColorMenu()" :title="t('extra.graphics.couture3d.changeColor.blue')" class="color-button" style="background-color: #d0d0fb;"></button>
            <button @click="changeColor(0xffffff); closeColorMenu()" :title="t('extra.graphics.couture3d.changeColor.white')" class="color-button" style="background-color: #ffffff;"></button>
            <button @click="changeColor(0xfaeeb2); closeColorMenu()" :title="t('extra.graphics.couture3d.changeColor.golden')" class="color-button" style="background-color: #faeeb2;"></button>
          </div>
        </transition>
      </div>

      <div class="color-other">
        <input type="color" @input="changeColorFromPicker" @click="closeAllMenus()" :title="t ('extra.graphics.couture3d.changeColor.picker')" class="color-button color-picker"/>
      </div>

      <!-- Кнопка и выезжающее меню для выбора текстуры -->
      <div class="texture-container">
        <button @click="toggleTextureMenu" :title="showTextureMenu ? t('extra.graphics.couture3d.texture.closeTextureMenu') : t('extra.graphics.couture3d.texture.openTextureMenu')" class="texture-main" :class="{'active': showTextureMenu}"><i class="fas fa-images"></i></button>

        <transition name="slide">
          <div v-show="showTextureMenu" class="texture-controls" :class="{'show': showTextureMenu}">
            <img src="/assets/textures/texture6.webp" alt="texture1" @click="changeTexture('texture1'); closeTextureMenu()" class="button" :title="t('extra.graphics.couture3d.texture.texture1')">
            <img src="/assets/textures/texture7.webp" alt="texture2" @click="changeTexture('texture2'); closeTextureMenu()" class="button" :title="t('extra.graphics.couture3d.texture.texture2')">
            <img src="/assets/textures/texture8.webp" alt="texture3" @click="changeTexture('texture3'); closeTextureMenu()" class="button" :title="t('extra.graphics.couture3d.texture.texture3')">
            <img src="/assets/textures/texture4.webp" alt="texture4" @click="changeTexture('texture4'); closeTextureMenu()" class="button" :title="t('extra.graphics.couture3d.texture.texture4')">
            <img src="/assets/textures/texture5.webp" alt="texture5" @click="changeTexture('texture5'); closeTextureMenu()" class="button" :title="t('extra.graphics.couture3d.texture.texture5')">
          </div>
        </transition>
      </div>

      <div class="texture-other">
        <!-- Кнопка для загрузки текстуры с диска -->
        <input type="file" @change="uploadTexture" id="file-input" class="file-input">
        <label for="file-input" class="button upload" :title="t('extra.graphics.couture3d.texture.upload')"><i class="fa-solid fa-upload"></i></label>
        <!-- Кнопка сброса -->
        <button @click="resetModelSettings(); closeAllMenus()" class="button reset" :title="t('extra.graphics.couture3d.texture.resetAll')"><i class="fas fa-reply"></i></button>
        <!-- Кнопка для включения/отключения смешивания -->
        <button @click="toggleMixing(); closeAllMenus()" :title="isMixingEnabled ? t('extra.graphics.couture3d.rotating.mixYes') : t('extra.graphics.couture3d.rotating.mixNo')" class="mixing" :class="{'active': isMixingEnabled}"><i :class="isMixingEnabled ? 'fas fa-sliders-h' : 'fas fa-gem'"></i></button>
      </div>
    </div>

    <div class="special-controls">
      <div class="branding-container">
        <transition name="fade">
          <div v-if="isBrandingOpen" class="branding-controls">
            <div class="select-brand">
              <div class="logos-container">
                <!-- Кнопка "Выбрать логотип" и раскрывающееся меню -->
                <button @click="toggleLogoMenu" :title="showLogoMenu ? t('extra.graphics.couture3d.special.branding.closeLogoMenu') : t('extra.graphics.couture3d.special.branding.openLogoMenu')" class="logos-button" :class="{'open': showLogoMenu}"><i class="fas fa-registered"></i></button>
                <!-- Меню с анимацией -->
                <transition name="slide">
                  <div v-show="showLogoMenu" class="logos-options" :class="{'show': showLogoMenu}">
                    <img src="/assets/logos/logo1.webp" alt="logo1" @click="changeLogo('logo1'); closeLogoMenu()" class="logo" :title="t('extra.graphics.couture3d.special.branding.logo1')">
                    <img src="/assets/logos/logo2.webp" alt="logo2" @click="changeLogo('logo2'); closeLogoMenu()" class="logo" :title="t('extra.graphics.couture3d.special.branding.logo2')">
                    <img src="/assets/logos/logo3.webp" alt="logo3" @click="changeLogo('logo3'); closeLogoMenu()" class="logo" :title="t('extra.graphics.couture3d.special.branding.logo3')">
                    <img src="/assets/logos/logo4.webp" alt="logo4" @click="changeLogo('logo4'); closeLogoMenu()" class="logo" :title="t('extra.graphics.couture3d.special.branding.logo4')">
                  </div>
                </transition>
              </div>
              <!-- Кнопка для загрузки картинки бренда с диска -->
              <input type="file" @change="loadBrandImage" id="brand-input" class="brand-input" accept="image/*" />
              <label for="brand-input" class="upload" :title="t('extra.graphics.couture3d.special.branding.upload')"><i class="fa-solid fa-upload"></i></label>
            </div>

            <div class="position">
              <!-- Кнопка-ползунок "Масштаб" -->
              <label for="scale" style="margin-top: 5px">{{ t('extra.graphics.couture3d.special.branding.scale') }}</label>
              <div class="slider-wrapper">
                <!--                <button class="slider-button minus" @click="decrementScale"><i class="fa-solid fa-chevron-left"></i></button>-->
                <button v-if="(!isWomenShirt || !isSmallScreen)" class="slider-button minus" @click="decrementScale">-</button>
                <input type="range" v-model="scale" @input="loadBrandImage" id="scale" min="0.3" max="2" step="0.05" class="slider" :class="{'shirt': (isWomenShirt && isSmallScreen)}" />
                <button v-if="(!isWomenShirt || !isSmallScreen)" class="slider-button plus" @click="incrementScale">+</button>
              </div>

              <!-- Кнопка-ползунок "Вертикаль" -->
              <label for="positionY">{{ t('extra.graphics.couture3d.special.branding.positionY') }}</label>
              <div class="slider-wrapper">
                <button v-if="(!isWomenShirt || !isSmallScreen)" class="slider-button minus" @click="decrementY">-</button>
                <input type="range" v-model="positionY" @input="loadBrandImage" id="positionY" min="-1.5" max="1.5" step="0.05" class="slider" :class="{'shirt': (isWomenShirt && isSmallScreen)}" />
                <button v-if="(!isWomenShirt || !isSmallScreen)" class="slider-button plus" @click="incrementY">+</button>
              </div>

              <!-- Кнопка-ползунок "Горизонталь" -->
              <label for="positionX">{{ t('extra.graphics.couture3d.special.branding.positionX') }}</label>
              <div class="slider-wrapper">
                <button v-if="(!isWomenShirt || !isSmallScreen)" class="slider-button minus" @click="decrementX">-</button>
                <input type="range" v-model="positionX" @input="loadBrandImage" id="positionX" min="-1" max="1" step="0.05" class="slider" :class="{'shirt': (isWomenShirt && isSmallScreen)}" />
                <button v-if="(!isWomenShirt || !isSmallScreen)" class="slider-button plus" @click="incrementX">+</button>
              </div>
            </div>
          </div>
        </transition>
        <div class="right-menu" :class="{'active': isBrandingOpen}">
          <!-- Кнопка "Брендировать" и раскрывающееся меню -->
          <button v-if="!isMultiModelView && !isThreeDView && !isWomenDress" @click="toggleBranding" :title="isBrandingOpen ? t('extra.graphics.couture3d.special.branding.closeBranding') : t('extra.graphics.couture3d.special.branding.openBranding')" class="branding" :class="{'active': isBrandingOpen}"><i class="fas fa-trademark"></i></button>

          <div class="saving-container">
            <!-- Кнопка "Сохранить" и раскрывающееся меню -->
            <button @click="toggleSaveMenu" :title="showSaveOptions ? t('extra.graphics.couture3d.special.saving.closeSaveData') : t('extra.graphics.couture3d.special.saving.saveData')" class="save-button" :class="{'open': showSaveOptions}"><i class="fas fa-save"></i></button>
            <!-- Меню с анимацией -->
            <transition name="slide">
              <div v-show="showSaveOptions" class="save-options" :class="{'show': showSaveOptions, 'active': isBrandingOpen}">
                <button @click="saveAsJPG" :title="t('extra.graphics.couture3d.special.saving.saveJPG')"><i class="fas fa-camera"></i></button>
                <button @click="saveAsPNG" :title="t('extra.graphics.couture3d.special.saving.savePNG')"><i class="fas fa-file-image"></i></button>
                <button @click="saveAsPDF" :title="t('extra.graphics.couture3d.special.saving.savePDF')"><i class="fas fa-file-pdf"></i></button>
                <button v-show="!isRecording" @click="startRecording" :title="t('extra.graphics.couture3d.special.saving.startVideo')" class="film-start"><i class="fas fa-film"></i></button>
                <button v-show="isRecording" @click="stopRecording" :title="t('extra.graphics.couture3d.special.saving.stopVideo')" class="film-stop"><i class="fas fa-stop-circle"></i></button>
              </div>
            </transition>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin btn($width: 50px, $height: 50px, $fs: 24px) {
  width: $width;
  height: $height;
  font-size: $fs;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  transition: ease-in-out, border .2s, background-color .2s, box-shadow .2s;

  @media (max-width: 1020px) {
    width: calc(#{$width} - 5px);
    height: calc(#{$height} - 5px);
    font-size: calc(#{$fs} - 2px);
  }

  @media (max-width: 768px) {
    width: calc(#{$width} - 10px);
    height: calc(#{$height} - 10px);
    font-size: calc(#{$fs} - 6px);
  }
}

@mixin img-style {
  width: 100%; /* Ширина изображения соответствует ширине контейнера */
  height: 100%; /* Высота изображения соответствует высоте контейнера */
  object-fit: cover; /* Сохраняет пропорции изображения и заполняет контейнер */
  display: block; /* Убирает нижний отступ у изображений */
}

.container {
  flex: 1 0 auto;
  background: linear-gradient(to bottom, rgb(255, 249, 229), rgb(255, 240, 244)) no-repeat center;
  h1 {
    font-size: 2.5rem;
    margin: 0.7rem auto;
    color: black;
    .toggle-footer-btn {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      font-size: 2.5rem;
      color: mediumseagreen;
    }
    .toggle-footer-btn:hover {color: goldenrod;}
  }

  .scene-container {
    max-height: 70vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .model-selection {
    position: absolute;
    top: 170px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 15px;

    .button {
      @include btn; // Используем значения по умолчанию
      color: white;
      border: 1px solid grey;
      overflow: hidden; /* Скрываем части изображения, выходящие за границы контейнера */

      &:hover {
        //background-color: #2cbd03; /* Более яркий цвет при наведении */
        border: 1px solid darkgrey;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      img {@include img-style;} // Стили для img подключены
    }

    .load-all-btn {
      @include btn;
      background: #6f1f8e;
      color: white;

      .fas {color: white;}
    }

    .load-all-btn:hover {
      .fas {color: gold;}

      background: royalblue;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .delete {
      @include btn; // Используем значения по умолчанию
      color: black;
      background-color: #ffea00;

      &:hover {
        background-color: #ffffff; /* Более яркий цвет при наведении */
        color: deeppink;
        border: 2px solid deeppink;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .rotation-controls {
    position: absolute;
    bottom: 80px; // Перемещаем вниз
    left: 50%; // Центрируем
    transform: translateX(-50%); // Смещаем на половину ширины
    display: flex;
    flex-direction: row; // Горизонтальное расположение
    gap: 20px; // Отступ между кнопками

    button {
      @include btn; // Используем значения по умолчанию
      color: white;
      background-color: #87ceeb;

      &:hover {
        background-color: #00bfff; /* Более яркий цвет при наведении */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .model-controls {
    position: absolute;
    left: 40px;
    top: 55%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 10px;

    .color-container,
    .texture-container {
      position: relative;
      display: flex;
      align-items: center;

      .color-main, .texture-main {
        @include btn; // Используем значения по умолчанию
        background: darkblue;
        color: white;

        &.active {background-color: darkgreen;}
        &:hover {box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);}
      }

      .color-controls, .texture-controls {
        position: absolute;
        left: 60px; /* Отступ вправо от основной кнопки */
        display: flex;
        gap: 10px;
        opacity: 0;
        transform: translateX(-20px);
        transition: opacity 0.3s ease-out, transform 0.3s ease-out;

        img {@include img-style;} // Стили для img подключены

        &.show {
          opacity: 1;
          transform: translateX(0);
        }

        .color-button, .button {
          @include btn; // Используем значения по умолчанию

          &:hover {box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);}
        }
      }
    }
    /* Анимация для Vue Transition */
    .slide-enter-from, .slide-leave-to {
      opacity: 0;
      transform: translateX(-20px);
    }

    .slide-enter-to, .slide-leave-from {
      opacity: 1;
      transform: translateX(0);
    }

    .slide-enter-active, .slide-leave-active {
      transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }

    .color-other {
      display: flex;
      flex-direction: column;

      .color-button {
        @include btn; // Используем значения по умолчанию

        &:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
      }

      .color-picker {
        padding: 0;
        border-radius: 5px;
      }
    }

    .texture-other {
      display: flex;
      flex-direction: column;

      .button {
        @include btn; // Используем значения по умолчанию
        margin-bottom: 10px;
        overflow: hidden; /* Скрываем части изображения, выходящие за границы контейнера */

        .fa-solid, .fa-brands, .fas {font-size: 24px;}

        &:hover {box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);}

        img {@include img-style;} // Стили для img подключены
      }

      .upload {
        @include btn; // Используем значения по умолчанию
        color: white;
        margin-bottom: 10px;
        background-color: dodgerblue;

        &:hover {
          background-color: darkgreen;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
      }

      .reset {
        color: black;
        background-color: #f0f0f0;
        border: 1px solid #ccc;

        &:hover {background-color: #e0e0e0;}
      }

      /* Скрываем оригинальный input */
      .file-input {display: none;}

      .mixing {
        @include btn; // Используем значения по умолчанию
        color: white;
        background-color: red;

        &:hover {
          background-color: mediumvioletred;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
      }

      .active {
        background-color: darkgreen;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
        transition: ease-in-out, background-color .2s, box-shadow .2s;

        &:hover {
          background-color: mediumseagreen;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

          i {
            transform: rotate(180deg); /* При активном состоянии иконка может анимированно поворачиваться */
          }
        }
      }
    }
  }

  .special-controls {
    position: absolute;
    top: 55%;
    right: 40px; /* Кнопка справа */
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;

    .branding-container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      .right-menu {
        display: flex;
        flex-direction: column;

        .saving-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;

          .save-button {
            @include btn; // Используем значения по умолчанию
            margin-bottom: 10px;
            background: dodgerblue;
            color: white;

            &:hover {box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);}
            &.open {background-color: darkgreen;}
          }

          .save-options {
            display: flex;
            flex-direction: row; /* Меню горизонтальное */
            position: absolute;
            right: 100%; /* Меню появляется слева от кнопки */
            top: 0;
            opacity: 0;
            transform: translateX(20px); /* Начальная позиция для анимации (справа) */
            transition: opacity 0.4s ease, transform 0.4s ease;

            &.show {
              opacity: 1;
              transform: translateX(0); /* Меню появляется в центре */
            }

            &.active {
              //transform: translateX(40px);
              margin-right: -2px;
            }

            button {
              @include btn; // Используем значения по умолчанию
              margin-right: 10px; /* Расстояние между кнопками */
              background: lightgoldenrodyellow;

              &:hover {
                background-color: #ffffff;
                color: darkgreen;
                border: 2px solid darkgreen;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }

              &.film-start:hover {
                color: purple;
                border-color: purple;
              }

              &.film-stop:hover {
                color: red;
                border-color: red;
              }
            }
          }

          /* 🎯 Анимация для Vue Transition */
          .slide-enter-from, .slide-leave-to {
            opacity: 0;
            transform: translateX(20px); /* Меню уезжает вправо, начиная с центра */
          }

          .slide-enter-to, .slide-leave-from {
            opacity: 1;
            transform: translateX(0); /* Меню появляется или возвращается в нормальное положение */
          }

          .slide-enter-active, .slide-leave-active {
            transition: opacity 0.3s ease-out, transform 0.3s ease-out;
          }
        }

        .branding {
          @include btn; // Используем значения по умолчанию
          margin-bottom: 10px;
          background: mediumvioletred;
          color: white;

          &:hover {box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);}
          &.active {background-color: darkgreen;}
        }

        &.active {
          display: flex;
          flex-direction: row-reverse;
          column-gap: 10px;
        }
      }

      .branding-controls {
        display: flex;
        flex-direction: column;

        button {
          @include btn; // Используем значения по умолчанию
          margin-bottom: 10px;

          &:hover {box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);}
        }

        .select-brand {
          display: flex;
          flex-direction: row;
          justify-content: center;

          .logos-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;

            .logos-button {
              @include btn; // Используем значения по умолчанию
              margin-right: 10px;
              background: lightgoldenrodyellow;

              &:hover {
                background-color: #ffffff;
                color: dodgerblue;
                border: 2px solid dodgerblue;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              &.open {
                color: white;
                border-color: transparent;
                background-color: darkblue;
              }
            }

            .logos-options {
              display: flex;
              flex-direction: row; /* Меню горизонтальное */
              position: absolute;
              right: 100%; /* Меню появляется слева от кнопки */
              top: 0;
              opacity: 0;
              transform: translateX(20px); /* Начальная позиция для анимации (справа) */
              transition: opacity 0.4s ease, transform 0.4s ease;

              &.show {
                opacity: 1;
                transform: translateX(0); /* Меню появляется в центре */
              }

              .logo {
                @include btn; // Используем значения по умолчанию
                margin-right: 10px; /* Расстояние между кнопками */
                //border: 2px solid transparent;
                overflow: hidden; /* Скрываем части изображения, выходящие за границы контейнера */
                background: white;
                //background: lightgoldenrodyellow;

                img {@include img-style;} // Стили для img подключены

                &:hover {
                  background-color: #ffffff;
                  color: darkgreen;
                  //border: 2px solid darkgreen;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
              }
            }

            /* 🎯 Анимация для Vue Transition */
            .slide-enter-from, .slide-leave-to {
              opacity: 0;
              transform: translateX(20px); /* Меню уезжает вправо, начиная с центра */
            }

            .slide-enter-to, .slide-leave-from {
              opacity: 1;
              transform: translateX(0); /* Меню появляется или возвращается в нормальное положение */
            }

            .slide-enter-active, .slide-leave-active {
              transition: opacity 0.3s ease-out, transform 0.3s ease-out;
            }
          }

          .upload {
            //@include btn($width: 46px, $height: 46px);
            @include btn($width: calc(50px - 4px), $height: calc(50px - 4px));

            border: 2px solid transparent;
            margin-bottom: 10px;
            background-color: lightgoldenrodyellow;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
            transition: ease-in-out, background-color .2s, color .2s, border-color .2s, box-shadow .2s;

            &:hover {
              background-color: #ffffff;
              color: dodgerblue;
              border: 2px solid dodgerblue;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
          }
          .brand-input {display: none;} /* Скрываем оригинальный input */
        }

        .position {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 10px;

          label {
            margin: 0;
            padding: 0;
            color: black;
            font-weight: bold;
            text-shadow: 2px 2px 4px white;
          }

          .slider-wrapper {
            display: flex;
            align-items: center;
            margin-top: -5px;
            gap: 5px;

            .slider {flex: 1; margin: 0; padding: 0}

            .slider-button {
              width: 24px;
              height: 24px;
              border: none;
              border-radius: 50%;
              background-color: #4CAF50;
              color: white;
              font-size: 20px;
              font-weight: bold;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: background-color 0.3s;
            }

            .slider-button:hover {background-color: #45a049;}
            .slider-button:active {background-color: #3d8b40;}
            .minus {background-color: #f44336;}
            .minus:hover {background-color: #da190b;}
            .minus:active {background-color: #b71c1c;}
          }
        }
      }

      .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
      }
      .fade-enter, .fade-leave-to {
        opacity: 0;
      }
    }
  }
}

@media(max-width: 1020px) {
  .container {
    h1 {
      font-size: 2.3rem;
      margin: 0.6rem auto;

      .toggle-footer-btn {font-size: 2.3rem;}
    }

    .model-selection {
      top: 165px;
      gap: 15px;

      .button {
        @include btn;
        border: 1px solid grey;
      }

      .load-all-btn {display: none;}

      .delete {@include btn;}
    }

    .rotation-controls {
      bottom: 80px;
      gap: 15px;

      button {@include btn;}
    }

    .model-controls {
      left: 22px;
      top: 54%;
      gap: 9px;

      .color-container,
      .texture-container {

        .color-main, .texture-main {@include btn;}

        .color-controls, .texture-controls {
          left: 55px; /* Отступ вправо от основной кнопки */
          gap: 9px;

          .color-button, .button {@include btn;}
        }
      }

      .color-other {
        .color-button {@include btn;}
      }

      .texture-other {
        .button {
          @include btn;
          margin-bottom: 9px;
          .fa-solid, .fa-brands, .fas {font-size: 22px;}
        }

        .upload {
          @include btn;
          margin-bottom: 9px;
        }

        .mixing {@include btn;}
      }
    }

    .special-controls {
      right: 22px; /* Размещение кнопок справа */
      top: 54%;

      .branding-container {

        .right-menu {

          .saving-container {
            .save-button {
              @include btn;
            }

            .save-options {
              //&.active {margin-right: -2px;}
              button {
                @include btn;
                margin-right: 9px;
              }
            }
          }

          .branding {
            @include btn;
            margin-bottom: 9px;
          }
        }

        .branding-controls {
          button {
            @include btn;
            margin-bottom: 9px;
          }

          .select-brand {
            .logos-container {
              .logos-button {
                @include btn;
                margin-right: 9px;
              }

              .logos-options {
                .logo {
                  @include btn;
                  margin-right: 9px; /* Расстояние между кнопками */
                }
              }
            }

            .upload {
              @include btn($width: 46px, $height: 46px);
              border: 2px solid transparent;
              margin-bottom: 9px;
            }
          }
          .position {
            margin-bottom: 9px;
            font-size: 20px;

            .slider-wrapper {
              margin-top: -4px;
              gap: 4px;

              .slider-button {
                width: 20px;
                height: 20px;
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    h1 {
      font-size: 1.9rem;
      margin: 0.5rem auto;

      .toggle-footer-btn {font-size: 1.9rem;}
    }

    .model-selection {
      top: 150px;
      gap: 10px;

      .button {
        @include btn;
        border: 1px solid grey;
      }

      .load-all-btn {display: none;}

      .delete {@include btn;}
    }

    .rotation-controls {
      bottom: 20px;
      gap: 10px;

      button {@include btn;}
    }

    .model-controls {
      left: 20px;
      top: 59%;
      gap: 8px;

      .color-container,
      .texture-container {

        .color-main, .texture-main {@include btn;}

        .color-controls, .texture-controls {
          left: 50px; /* Отступ вправо от основной кнопки */
          gap: 8px;

          .color-button, .button {@include btn;}
        }
      }

      .color-other {
        .color-button {@include btn;}
      }

      .texture-other {
        .button {
          @include btn;
          margin-bottom: 8px;
          .fa-solid, .fa-brands, .fas {font-size: 18px;}
        }

        .upload {
          @include btn;
          margin-bottom: 8px;
        }

        .mixing {@include btn;}
      }
    }

    .special-controls {
      right: 20px; /* Размещение кнопок справа */
      top: 59%;

      .branding-container {

        .right-menu {

          .saving-container {
            .save-button {@include btn;}

            .save-options {
              //&.active {margin-right: -2px;}
              button {
                @include btn;
                margin-right: 8px;
              }
              .film-start {display: none;}
              .film-stop {display: none;}
            }
          }

          .branding {
            @include btn;
            margin-bottom: 8px;
          }
        }

        .branding-controls {
          button {
            @include btn;
            margin-bottom: 8px;
          }

          .select-brand {
            .logos-container {
              .logos-button {
                @include btn;
                margin-right: 8px;
              }

              .logos-options {
                .logo {
                  @include btn;
                  margin-right: 8px; /* Расстояние между кнопками */
                }
              }
            }

            .upload {
              @include btn($width: 46px, $height: 46px);
              border: 2px solid transparent;
              margin-bottom: 8px;
            }
          }
          .position {
            font-size: 16px;
            margin-bottom: 8px;

            label {font-weight: normal;}

            .slider-wrapper {
              display: flex;
              justify-content: center;
              gap: 10px;

              input {display: none;}

              .shirt {
                display: block;
                margin: 7px 0;
              }

              .slider-button {
                width: 30px;
                height: 30px;
                font-size: 16px;
                margin-top: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>