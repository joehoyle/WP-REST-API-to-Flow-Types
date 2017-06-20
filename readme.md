## Generate Flow Types from your WordPress REST API definitions.

When building JavaScript applications using [flow](https://flow.org/en/) on top of the WordPress REST API, it's handy to have type definitions for all the WordPress data.

No two WordPresses are the same, fortunately the REST API is self-describing, so it's possible to get the details about all the REST API objects. We can then automatically compile Flow Types from this data specific to whatever WordPress REST API you are using.

## Usage

```bash
node index.js https://demo.wp-api.org/ > /my/application/src/Types.js
```

This will interpret the meta data about your WordPress REST API and generate the Flow types file, which you can then use throughout your application.

For reference, here is the default flow types for a standard WordPress install.

```js

export type Post = {
    date: string,
    date_gmt: string,
    guid: {
        raw: ?string,
        rendered: string
    },
    id: number,
    link: string,
    modified: string,
    modified_gmt: string,
    slug: string,
    status: "publish" | "future" | "draft" | "pending" | "private",
    type: string,
    password: ?string,
    title: {
        raw: ?string,
        rendered: string
    },
    content: {
        raw: ?string,
        rendered: string,
        protected: boolean
    },
    author: number,
    excerpt: {
        raw: ?string,
        rendered: string,
        protected: boolean
    },
    featured_media: number,
    comment_status: "open" | "closed",
    ping_status: "open" | "closed",
    format: "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio",
    meta: object,
    sticky: boolean,
    template: "",
    categories: Array<integer>,
    tags: Array<integer>
}


export type PostRevision = {
    author: number,
    date: string,
    date_gmt: string,
    guid: {
        raw: ?string,
        rendered: string
    },
    id: number,
    modified: string,
    modified_gmt: string,
    parent: number,
    slug: string,
    title: {
        raw: ?string,
        rendered: string
    },
    content: {
        raw: ?string,
        rendered: string,
        protected: boolean
    },
    excerpt: {
        raw: ?string,
        rendered: string,
        protected: boolean
    }
}


export type Page = {
    date: string,
    date_gmt: string,
    guid: {
        raw: ?string,
        rendered: string
    },
    id: number,
    link: string,
    modified: string,
    modified_gmt: string,
    slug: string,
    status: "publish" | "future" | "draft" | "pending" | "private",
    type: string,
    password: ?string,
    parent: number,
    title: {
        raw: ?string,
        rendered: string
    },
    content: {
        raw: ?string,
        rendered: string,
        protected: boolean
    },
    author: number,
    excerpt: {
        raw: ?string,
        rendered: string,
        protected: boolean
    },
    featured_media: number,
    comment_status: "open" | "closed",
    ping_status: "open" | "closed",
    menu_order: number,
    meta: object,
    template: ""
}


export type PageRevision = {
    author: number,
    date: string,
    date_gmt: string,
    guid: {
        raw: ?string,
        rendered: string
    },
    id: number,
    modified: string,
    modified_gmt: string,
    parent: number,
    slug: string,
    title: {
        raw: ?string,
        rendered: string
    },
    content: {
        raw: ?string,
        rendered: string,
        protected: boolean
    },
    excerpt: {
        raw: ?string,
        rendered: string,
        protected: boolean
    }
}


export type Attachment = {
    date: string,
    date_gmt: string,
    guid: {
        raw: ?string,
        rendered: string
    },
    id: number,
    link: string,
    modified: string,
    modified_gmt: string,
    slug: string,
    status: "publish" | "future" | "draft" | "pending" | "private",
    type: string,
    title: {
        raw: ?string,
        rendered: string
    },
    author: number,
    comment_status: "open" | "closed",
    ping_status: "open" | "closed",
    meta: object,
    template: "",
    alt_text: string,
    caption: {
        raw: ?string,
        rendered: string
    },
    description: {
        raw: ?string,
        rendered: string
    },
    media_type: "image" | "file",
    mime_type: string,
    media_details: object,
    post: number,
    source_url: string
}


export type Type = {
    capabilities: ?object,
    description: string,
    hierarchical: boolean,
    labels: ?object,
    name: string,
    slug: string,
    supports: ?object,
    taxonomies: Array<string>,
    rest_base: string
}


export type Status = {
    name: string,
    private: ?boolean,
    protected: ?boolean,
    public: boolean,
    queryable: boolean,
    show_in_list: ?boolean,
    slug: string
}


export type Taxonomy = {
    capabilities: ?object,
    description: string,
    hierarchical: boolean,
    labels: ?object,
    name: string,
    slug: string,
    show_cloud: ?boolean,
    types: Array<string>,
    rest_base: string
}


export type Category = {
    id: number,
    count: number,
    description: string,
    link: string,
    name: string,
    slug: string,
    taxonomy: "category" | "post_tag" | "nav_menu" | "link_category" | "post_format",
    parent: number,
    meta: object
}


export type Tag = {
    id: number,
    count: number,
    description: string,
    link: string,
    name: string,
    slug: string,
    taxonomy: "category" | "post_tag" | "nav_menu" | "link_category" | "post_format",
    meta: object
}


export type User = {
    id: number,
    username: ?string,
    name: string,
    first_name: ?string,
    last_name: ?string,
    email: ?string,
    url: string,
    description: string,
    link: string,
    locale: ?"" | "en_US",
    nickname: ?string,
    slug: string,
    registered_date: ?string,
    roles: ?Array<string>,
    password: ?string,
    capabilities: ?object,
    extra_capabilities: ?object,
    avatar_urls: {
        24: string,
        48: string,
        96: string
    },
    meta: object
}


export type Comment = {
    id: number,
    author: number,
    author_email: ?string,
    author_ip: ?string,
    author_name: string,
    author_url: string,
    author_user_agent: ?string,
    content: {
        raw: ?string,
        rendered: string
    },
    date: string,
    date_gmt: string,
    link: string,
    parent: number,
    post: number,
    status: string,
    type: string,
    author_avatar_urls: {
        24: string,
        48: string,
        96: string
    },
    meta: object
}


export type Settings = {
    title: string,
    description: string,
    timezone: string,
    date_format: string,
    time_format: string,
    start_of_week: number,
    language: string,
    use_smilies: boolean,
    default_category: number,
    default_post_format: string,
    posts_per_page: number,
    default_ping_status: "open" | "closed",
    default_comment_status: "open" | "closed"
}


export type Post = {
    date: string,
    date_gmt: string,
    guid: {
        raw: ?string,
        rendered: string
    },
    id: number,
    link: string,
    modified: string,
    modified_gmt: string,
    slug: string,
    status: "publish" | "future" | "draft" | "pending" | "private",
    type: string,
    password: ?string,
    title: {
        raw: ?string,
        rendered: string
    },
    content: {
        raw: ?string,
        rendered: string,
        protected: boolean
    },
    author: number,
    excerpt: {
        raw: ?string,
        rendered: string,
        protected: boolean
    },
    featured_media: number,
    comment_status: "open" | "closed",
    ping_status: "open" | "closed",
    format: "standard" | "aside" | "chat" | "gallery" | "link" | "image" | "quote" | "status" | "video" | "audio",
    meta: object,
    sticky: boolean,
    template: "",
    categories: Array<integer>,
    tags: Array<integer>
}
```
