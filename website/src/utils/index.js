export const slugify = originalText => {
  let text = originalText
    .toString()
    .toLowerCase()
    .trim()

  if (!/[\w-\.]+/.test(originalText)) {
    const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
    const to = 'aaaaaeeeeeiiiiooooouuuunc------'

    for (let i = 0; i <= from.length; i++) {
      text = text.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    } 
  }

  return text
    .replace(/\s+/g, '-')
    .replace(/&/g, '-y-')
    .replace(/[^\w-]+/g, '')
    .replace(/-{2,}/g, '-')
}
