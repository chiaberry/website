module.exports = {
  sidebar: [
    "demos",
    {
      type: "category",
      label: "Actions",
      items: ["actions/basic"],
    },
    {
      type: "category",
      label: "Override Components",
      items: ["override/toolbar"],
    },
    {
      type: "category",
      label: "Columns",
      items: ["columns/render-image", "columns/hide", "columns/fixed"],
    },
    {
      type: "category",
      label: "Details Panel",
      items: ["details-panel/basic", "details-panel/single"],
    },
    {
      type: "category",
      label: "Edit",
      items: ["edit/editable"],
    },
    {
      type: "category",
      label: "Export",
      items: [
        "export/basic",
        "export/custom",
        {
          type: "link",
          label: "Exporter Package",
          href: "https://github.com/material-table-core/exporters",
        },
      ],
    },
    {
      type: "category",
      label: "Filter",
      items: [
        "filter/basic",
        "filter/custom-filter",
        "filter/custom-filter-row",
      ],
    },
    {
      type: "category",
      label: "Group",
      items: ["group/basic"],
    },
    {
      type: "category",
      label: "Localization",
      items: ["localization/basic"],
    },
    {
      type: "category",
      label: "Remote Data",
      items: ["remote-data/basic"],
    },
    {
      type: "category",
      label: "Search",
      items: ["search/basic"],
    },
    {
      type: "category",
      label: "Selection",
      items: [
        "selection/basic",
        "selection/on-row-click",
        "selection/persist-events",
        "selection/outside-of-table",
      ],
    },
    {
      type: "category",
      label: "Sort",
      items: ["sort/basic"],
    },
    {
      type: "category",
      label: "Style",
      items: ["style/header-cell", "style/rows", "style/selected-row"],
    },
    {
      type: "category",
      label: "Tree Data",
      items: ["tree-data/basic"],
    },
    {
      type: "category",
      label: "Validation",
      items: ["validation/basic"],
    },
    {
      type: "category",
      label: "Summary Row",
      items: ["Summaryrow/basic"],
    },
    {
      type: "category",
      label: "Pagination",
      items: ["pagination/basic", "pagination/positioning"],
    },
  ],
};
