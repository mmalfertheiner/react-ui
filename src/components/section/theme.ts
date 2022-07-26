export default {
  section: {
    base: '',
  },
  container: {
    base: 'bg-white border border-neutral-400 rounded-lg overflow-hidden',
  },
  content: {
    base: 'flex flex-col gap-y-6 px-6 pt-6 pb-9',
  },
  contentTitle: {
    base: 'bg-neutral-100 px-6 py-1 border-b border-t border-neutral-200 text-sm text-neutral-600',
  },
  contentList: {
    base: 'space-y-px bg-neutral-200',
  },
  contentListEmpty: {
    base: 'justify-center py-4',
  },
  contentListError: {
    base: 'justify-center py-4',
    icon: {
      base: 'fill-current text-white',
    },
    iconContainer: {
      base: 'p-1.5 mr-2 rounded-full bg-critical-500',
    },
    children: {
      base: 'text-critical-500',
    },
  },
  contentTwoColumn: {
    base: 'grid xl:grid-cols-2 xl:gap-x-11 gap-y-6 px-6 pt-6 pb-9',
  },
  listItem: {
    base: 'flex items-center min-h-[3.5rem] bg-white px-6',
  },
  listItemWithAction: {
    base: 'justify-between space-x-4',
    action: {
      base: 'flex flex-shrink-0',
    },
  },
  descriptionItem: {
    base: 'flex flex-col text-neutral-800 border-b border-neutral-200',
  },
  descriptionItemTitle: {
    base: 'text-xs',
  },
  listItemButton: {
    button:
      'block w-full border-b border-neutral-200 last:border-0 focus:outline-neutral-800',
    base: 'px-6 justify-between space-x-4 hover:bg-neutral-100',
  },
  listItemLink: {
    link: 'block focus:outline-neutral-800',
    base: 'justify-between space-x-4 hover:bg-neutral-100 active:bg-neutral-100',
  },
  header: {
    base: 'py-2 flex flex-col gap-y-2',
    increasedBottomSpacing: 'mb-2',
  },
  title: {
    base: 'py-2 flex-1 text-base text-neutral-800',
  },
  headerRow: {
    base: '',
    layout: {
      full: '',
      spaceBetween: 'flex justify-between gap-x-2.5',
      start: 'flex justify-start gap-x-2.5',
      center: 'flex justify-center gap-x-2.5',
      end: 'flex justify-end gap-x-2.5',
    },
  },
  headerGroup: {
    base: 'flex items-center gap-y-2',
    spacing: {
      sm: 'gap-x-2.5',
      md: 'gap-x-6',
    },
  },
  footer: {
    base: 'px-6 py-4 bg-neutral-100 border-t border-neutral-200 text-xs',
  },
}
