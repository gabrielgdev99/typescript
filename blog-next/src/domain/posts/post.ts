export interface ContentChild {
  text: string;
  type: string; // geralmente "text"
}
export interface ContentBlock {
  type: string; // "paragraph"
  children: ContentChild[];
}
export interface StrapiImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;

  formats: {
    large?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    small?: StrapiImageFormat;
    thumbnail?: StrapiImageFormat;
  };

  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;

  provider_metadata: {
    public_id: string;
    resource_type: string;
  };

  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;

  content: ContentBlock[];

  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  cover: StrapiImage;
}

export interface StrapiPostResponse {
  data: Post[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
