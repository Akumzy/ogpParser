/**
 * @fileOverview OpenGraph Protocol Parser
 * @author ukyoda
 */

import getContents from './utils/getContents'
import parseHtml from './utils/parseHtml'

export default async function(url: string, redirectFlg?: boolean) {
  const html = await getContents(url, redirectFlg)
  return parseHtml(html)
}
