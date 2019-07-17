import cheerio from 'cheerio'

function extractData($meta: Cheerio, propKey: string, contentKey: string) {
  let prop = $meta.attr(propKey)
  let content = $meta.attr(contentKey)
  if (!prop || !content) {
    return null
  } else {
    return {
      prop: prop,
      content: content
    }
  }
}

export default  function parseHtml(html: string | Buffer) {
  const $ = cheerio.load(html)
  const $metas = $('head meta')
  const title = $('head title').text()
  let ogpSet = {}
  let seoSet = {}

  $metas.each((index, value) => {
    const ogp = extractData($(value), 'property', 'content')
    const seo = extractData($(value), 'name', 'content')
    let target: { [hek: string]: string[] } = {}
    let prop, content
    if (ogp !== null) {
      target = ogpSet
      prop = ogp.prop
      content = ogp.content
    } else if (seo !== null) {
      target = seoSet
      prop = seo.prop
      content = seo.content
    } else {
      return
    }

    if (!target[prop]) {
      target[prop] = []
    }
    target[prop].push(content)
  })
  return {
    title: title,
    ogp: ogpSet,
    seo: seoSet
  }
}
