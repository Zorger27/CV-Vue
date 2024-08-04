interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export const openGraphMixin = {
  methods: {
    setPageTitle(mainTitle: string): void {
      let pageTitle = document.querySelector('title');

      if (pageTitle) {
        pageTitle.innerText = mainTitle;
      } else {
        const newTitleTag = document.createElement('title');
        newTitleTag.innerText = mainTitle;
        document.head.appendChild(newTitleTag);
      }
    },

    setOpenGraphTags(metaDescription: string, title: string, description: string, imageUrl: string, url: string): void {
      const metaTags: MetaTag[] = [
        { name: 'description', content: metaDescription },
        { property: 'og:title', content: title },
        { property: 'twitter:title', content: title },
        { property: 'og:description', content: description },
        { property: 'twitter:description', content: description },
        { property: 'og:image', content: imageUrl },
        { property: 'twitter:image', content: imageUrl },
        { property: 'og:url', content: url },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'https://Zorin.Expert' },
        { property: 'twitter:card', content: 'summary_large_image' }
      ];

      metaTags.forEach((metaTag) => {
        const meta = document.createElement('meta');
        if (metaTag.property) {
          meta.setAttribute('property', metaTag.property);
        } else if (metaTag.name) {
          meta.setAttribute('name', metaTag.name);
        }
        meta.setAttribute('content', metaTag.content);

        const existingMetaTags = document.querySelectorAll(
          `[property="${metaTag.property || ''}"], [name="${metaTag.name || ''}"]`
        );
        existingMetaTags.forEach((tag) => tag.remove());

        document.head.appendChild(meta);
      });
    },
  },
};
