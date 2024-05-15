const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'modelValue',
        descKey: 'app.api.select.desc.value',
        version: '',
        type: 'any',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'max',
        desc: '限制最大可选数量，默认无限制',
        version: '4.3.0',
        type: 'string, number',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.select.desc.size',
        version: '',
        type: 'string',
        enum: 'medium, small, mini',
        defVal: '继承上下文',
        list: []
      },
      {
        name: 'multiple',
        descKey: 'app.api.select.desc.multiple',
        version: '',
        type: 'boolean',
        enum: 'false',
        defVal: '',
        list: []
      },
      {
        name: 'multi-char-overflow',
        desc: '只对 multiple 有效，设置多选中每个选项显示值的最大字符数，如果超出显示省略号；如果为 -1 则关闭',
        version: '',
        type: 'number, string',
        enum: '',
        defVal: '默认 8，继承 setup.select.multiCharOverflow',
        list: []
      },
      {
        name: 'clearable',
        descKey: 'app.api.select.desc.clearable',
        version: '',
        type: 'boolean',
        enum: 'false',
        defVal: '',
        list: []
      },
      {
        name: 'placeholder',
        descKey: 'app.api.select.desc.placeholder',
        version: '',
        type: 'string',
        enum: '',
        defVal: '请选择',
        list: []
      },
      {
        name: 'class-name',
        desc: '给选择器附加 className',
        version: '4.0.7',
        type: 'string | (({}) => string)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'popup-class-name',
        desc: '给下拉容器附加 className',
        version: '4.5.0',
        type: 'string | (({}) => string)',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'visible',
        desc: '是否显示',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'true',
        list: []
      },
      {
        name: 'disabled',
        descKey: 'app.api.select.desc.disabled',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'prefix-icon',
        descKey: 'app.api.select.desc.prefixIcon',
        version: '',
        type: 'string',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'placement',
        descKey: 'app.api.select.desc.placement',
        version: '',
        type: 'string',
        enum: 'top, bottom',
        defVal: 'bottom',
        list: []
      },
      {
        name: 'options',
        desc: '下拉选项列表',
        version: '',
        type: 'any[]',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'option-props',
        desc: '下拉选项属性参数配置',
        version: '',
        type: 'any',
        enum: '',
        defVal: '{ value, label }',
        list: []
      },
      {
        name: 'option-groups',
        desc: '下拉分组选项列表',
        version: '',
        type: 'any[]',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'option-group-props',
        desc: '下拉分组选项属性参数配置',
        version: '',
        type: 'any',
        enum: '',
        defVal: '{ options, label }',
        list: []
      },
      {
        name: 'option-config',
        desc: '选项配置信息',
        version: '4.2.0',
        type: 'any',
        enum: '',
        defVal: '继承 setup.select.optionConfig',
        list: [
          {
            name: 'useKey',
            desc: '是否需要为每一选项的 VNode 设置 key 属性',
            version: '',
            type: 'boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'keyField',
            desc: '自定义选项数据唯一主键的字段名（默认自动生成）',
            version: '',
            type: 'string',
            enum: '',
            defVal: '_X_OPTION_KEY',
            list: []
          }
        ]
      },
      {
        name: 'option-id',
        disabled: true,
        desc: '已废弃，被 option-config.keyField 替换',
        version: '',
        type: 'string',
        enum: '',
        defVal: '默认 _X_OPTION_KEY，继承 setup.select.optionId',
        list: []
      },
      {
        name: 'option-key',
        disabled: true,
        desc: '已废弃，被 option-config.useKey 替换',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'filterable',
        desc: '是否启用下拉过滤功能',
        version: '4.2.6',
        type: 'boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'filter-method',
        desc: '只对 filterable 有效，自定义过滤方法',
        version: '4.2.6',
        type: '({ searchValue, option, group }) => boolean',
        enum: '',
        defVal: '',
        list: []
      },
      // {
      //   name: 'remote',
      //   desc: '只对 filterable 有效，是否启用远程过滤功能',
      //   version: '4.2.6',
      //   type: 'boolean',
      //   enum: '',
      //   defVal: 'false',
      //   list: []
      // },
      // {
      //   name: 'remote-method',
      //   desc: '只对 remote 有效，自定义过滤方法',
      //   version: '4.2.6',
      //   type: '({ searchValue }) => void',
      //   enum: '',
      //   defVal: '',
      //   list: []
      // },
      {
        name: 'transfer',
        descKey: 'app.api.select.desc.transfer',
        version: '',
        type: 'boolean',
        enum: '',
        defVal: '默认 false，继承 setup.select.transfer',
        list: []
      }
    ]
  },
  {
    name: 'Slots',
    descKey: 'app.api.title.slots',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'prefix',
        desc: '自定义前缀图标模板',
        version: '4.0.14',
        type: '',
        enum: '',
        defVal: '{}',
        list: []
      },
      {
        name: 'header',
        desc: '自定义弹窗容器头部模板',
        version: '4.5.17',
        type: '',
        enum: '',
        defVal: '{}',
        list: []
      },
      {
        name: 'option',
        desc: '自定义弹窗容器选项模板',
        version: '4.5.17',
        type: '',
        enum: '',
        defVal: '{ option }',
        list: []
      },
      {
        name: 'footer',
        desc: '自定义弹窗容器底部模板',
        version: '4.5.17',
        type: '',
        enum: '',
        defVal: '{}',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    descKey: 'app.api.title.events',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'change',
        desc: '在值发生改变时触发该事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ value, $event }',
        list: []
      },
      {
        name: 'clear',
        desc: '在点击右侧清除按钮时触发该事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      },
      {
        name: 'focus',
        desc: '在输入框聚焦时触发该事件',
        version: '4.3.14',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      },
      {
        name: 'blur',
        desc: '在输入框失焦时触发该事件',
        version: '4.3.14',
        type: '',
        enum: '',
        defVal: '{ $event }',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    descKey: 'app.api.title.methods',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'isPanelVisible()',
        desc: '判断下拉面板是否可视',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'togglePanel()',
        desc: '切换下拉面板',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'showPanel()',
        desc: '显示下拉面板',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'hidePanel()',
        desc: '隐藏下拉面板',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'refreshOption()',
        desc: '刷新选项（对于动态修改显示/隐藏选项等场景下可能会用到）',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'focus()',
        desc: '使选择器获取焦点',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'blur()',
        desc: '使选择器失去焦点',
        version: '',
        type: 'Promise',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  }
]

export default apis
