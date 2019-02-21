import Typography from "typography"
import CodePlugin from 'typography-plugin-code'
import themeJudah from "typography-theme-judah"

themeJudah.plugins = [new CodePlugin()]

const typography = new Typography(themeJudah);

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography;
export const rhythm = typography.rhythm
export const options = typography.options
export const scale = typography.scale