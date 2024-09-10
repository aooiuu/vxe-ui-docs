import Vue from 'vue'
import Vuex from 'vuex'
import { VxeUI } from 'vxe-pc-ui'
import axios from 'axios'
import i18n from '@/i18n'
import XEUtils from 'xe-utils'

const currTheme = (localStorage.getItem('VXE_DOCS_THEME') || 'light') as 'dark' | 'light'
const currLanguage = (localStorage.getItem('VXE_DOCS_LANGUAGE') || 'zh-CN') as 'zh-CN' | 'zh-TC' | 'en-US'

VxeUI.setLanguage(currLanguage)
setTimeout(() => {
  VxeUI.setTheme(currTheme)
})

document.documentElement.setAttribute('vxe-docs-theme', currTheme)

let apiPromise: Promise<any> | null = null
const i18nPromise: Record<string, Promise<any> | null> = {}
const i18nStatus: Record<string, boolean> = {
  [currLanguage]: true
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageLoading: false,
    pageTitle: process.env.VUE_APP_PAGE_TITLE,
    packName: process.env.VUE_APP_PACKAGE_NAME,
    isPluginDocs: process.env.VUE_APP_IS_PLUGIN_DOCS === 'true',
    theme: currTheme,
    docsVersion: '3',
    serveTY: new Date().getFullYear(),
    language: currLanguage,
    siteBaseUrl: process.env.VUE_APP_SITE_BASE_URL,
    pluginBuyUrl: process.env.VUE_APP_PLUGIN_BUY_URL,
    pluginDocsUrl: process.env.VUE_APP_PLUGIN_DOCS_URL,
    compApiMaps: null as any,
    showAuthMsgFlag: localStorage.getItem('SHOW_AUTH_MSG_FLAG') !== XEUtils.toDateString(new Date(), 'yyyy-MM-dd'),
    showTopMenuMsgFlag: localStorage.getItem('SHOW_TOP_MENU_MSG_FLAG') !== XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
  },
  mutations: {
    setPageLoading (state, status: boolean) {
      state.pageLoading = status
    },
    setTheme (state, name: 'dark' | 'light') {
      state.theme = name || 'light'
      VxeUI.setTheme(name)
      document.documentElement.setAttribute('vxe-docs-theme', name)
      localStorage.setItem('VXE_DOCS_THEME', name)
    },
    setLanguage (state, language: 'zh-CN' | 'zh-TC' | 'en-US') {
      if (i18nStatus[language]) {
        state.language = language || 'zh-CN'
        VxeUI.setLanguage(language)
        i18n.locale = language
        localStorage.setItem('VXE_DOCS_LANGUAGE', language)
      } else {
        if (!i18nPromise[language]) {
          state.pageLoading = true
          i18nPromise[language] = axios.get(`${process.env.VUE_APP_SITE_BASE_URL}/i18n/${language}.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
            i18n.setLocaleMessage(language, res.data)
            state.language = language || 'zh-CN'
            VxeUI.setLanguage(language)
            i18n.locale = language
            localStorage.setItem('VXE_DOCS_LANGUAGE', language)
            i18nStatus[language] = true
            state.pageLoading = false
          }).catch(() => {
            i18nPromise[language] = null
            state.pageLoading = false
          })
        }
      }
    },
    updateComponentApiJSON (state) {
      if (!apiPromise) {
        apiPromise = fetch(`${state.siteBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-v${process.env.VUE_APP_VXE_VERSION}/apiMaps.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
          return res.json().then(data => {
            if (data) {
              state.compApiMaps = data
            }
          })
        }).then(() => {
          apiPromise = null
        })
      }
      return apiPromise
    },
    readAuthMsgFlagVisible (state) {
      state.showAuthMsgFlag = false
      localStorage.setItem('SHOW_AUTH_MSG_FLAG', XEUtils.toDateString(new Date(), 'yyyy-MM-dd'))
    },
    readTopMenuMsgFlagVisible (state) {
      state.showTopMenuMsgFlag = false
      localStorage.setItem('SHOW_TOP_MENU_MSG_FLAG', XEUtils.toDateString(new Date(), 'yyyy-MM-dd'))
    }
  },
  actions: {
  },
  modules: {
  }
})