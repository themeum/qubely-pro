const { gloalSettings: { globalAttributes }, QubelyButton: { buttonAttributes }, } = wp.qubelyComponents

export const attributes = {

    uniqueId: { type: 'string', default: '' },
    // Global
    ...globalAttributes,
    ...buttonAttributes,
    layout: { type: 'number', default: 1 },
    mediaType: { type: 'string', default: 'video' },

    videoSource: { type: 'string', default: 'vimeo' },
    vimeoId: { type: 'string', default: '368867301' },
    youtubeId: { type: 'string', default: 'HY3sut8LTSw' },
    autoplay: { type: 'boolean', default: false },
    videoWidth: { 
        type: 'object', 
        default: { md: 100, unit: '%' }, 
        style: [
            { 
                selector: '{{QUBELY}} .qubely-mediacard-layout-2.media-type-video .qubely-mediacard-media { width: {{videoWidth}}; } {{QUBELY}} .qubely-mediacard-layout-3.media-type-video .qubely-mediacard-media { width: {{videoWidth}}; }' 
            }
        ] 
    },




    bgVideo: { type: 'object', default: {} },
    url: { type: 'string', default: 'https://www.youtube.com/watch?v=HY3sut8LTSw' },


    alignment: {
        type: 'object', default: { md: 'left' },
        style: [
            {
               condition: [
                   { key: 'layout', relation: '==', value: 1 }
               ],
               selector: '{{QUBELY}} .qubely-block-mediacard {text-align: {{alignment}};}'
            },
            {
               condition: [
                   { key: 'layout', relation: '==', value: 4 }
               ],
               selector: '{{QUBELY}} .qubely-block-mediacard {text-align: {{alignment}};}'
            }
        ]
    },

    spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{QUBELY}}' }] },
    
    enableButton: { type: 'boolean', default: false },
    buttonToggleOption: { type: 'boolean', default: true },

    

   // Image
   image: { type: 'object', default: {} },
   image2x: { type: 'object', default: {} },
   imgAlt: { type: 'string', default: '' },
   imageWidth: {
       type: 'object',
       default: {},
       style: [
           {
               condition: [
                   { key: 'layout', relation: '!=', value: 4 },
                   { key: 'mediaType', relation: '==', value: 'image' }
               ],
               selector: '{{QUBELY}} .qubely-mediacard-media img {width: {{imageWidth}};} {{QUBELY}} .qubely-mediacard-media .qubely-image-placeholder {height: {{imageWidth}}; width: {{imageWidths}};}'
           }
       ]
   },

  

   // Media background
   useMediaBg: { type: 'boolean', default: 1 },
   


   mediaBorderRadius: {
       type: 'object',
       default: {
           openBorderRadius: 1,
           radiusType: 'global',
           global: { md: 5 },
           unit: 'px',

       },
       style: [
           {
               condition: [
                   { key: 'layout', relation: '!=', value: 4 },
                   { key: 'useMediaBg', relation: '==', value: 1 }
               ],
               selector: '{{QUBELY}} .qubely-mediacard-media, {{QUBELY}} .qubely-mediacard-media img'
           }
       ]
   },

  

   

   // Media Spacing
   mediaSpacing: {
       type: 'object', default: { md: 20, unit: 'px' },
       style: [
           {
               condition: [
                   { key: 'layout', relation: '==', value: 1 }
               ],
               selector: '{{QUBELY}} .qubely-mediacard-media {margin-bottom: {{mediaSpacing}};}'
           },
           {
               condition: [
                   { key: 'layout', relation: '==', value: 2 }
               ],
               selector: '{{QUBELY}} .qubely-mediacard-media {margin-right: {{mediaSpacing}};}'
           },
           {
               condition: [
                   { key: 'layout', relation: '==', value: 3 }
               ],
               selector: '{{QUBELY}} .qubely-mediacard-media {margin-left: {{mediaSpacing}};}'
           },
       ]
   },

    // Title
    title: {
        type: 'string',
        source: 'html',
        selector: '.qubely-mediacard-title',
        default: 'This is an infobox'
    },
    titleLevel: { type: 'number', default: 2 },
    titleTypography: { type: 'object', default: { openTypography: 1, size: { md: 32, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-mediacard-title' }] },
    titleColor: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-mediacard-title {color: {{titleColor}};}' }] },
    titleColorHover: { type: 'string', default: '', style: [{ selector: '{{QUBELY}} .qubely-block-mediacard:hover .qubely-mediacard-title {color: {{titleColorHover}};}' }] },
    titleSpacing: { type: 'object', default: { md: 10, unit: 'px' }, style: [{ selector: '{{QUBELY}} .qubely-mediacard-title-inner {margin-bottom: {{titleSpacing}};}' }] },

    subTitle: { type: 'boolean', default: 0 },
    subTitleLevel: { type: 'number', default: 3 },
    subTitleContent: {
        type: 'string',
        source: 'html',
        selector: '.qubely-mediacard-sub-title',
        default: 'Sub Title'
    },
    subTitleTypography: { type: 'object', default: { openTypography: 1, size: { md: 16, unit: 'px' } }, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-sub-title' }] },
    subTitleColor: {
        type: 'string', default: '#333',
        style: [
            {
                condition: [
                    { key: 'subTitle', relation: '==', value: 1 }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-sub-title {color: {{subTitleColor}};}'
            },
        ]
    },
    subTitleColorHover: {
        type: 'string', default: '',
        style: [
            {
                condition: [
                    { key: 'subTitle', relation: '==', value: 1 }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard:hover .qubely-mediacard-sub-title {color: {{subTitleColorHover}};}'
            },
        ]
    },
    subTitleSpacing: {
        type: 'object', default: { md: 15, unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'subTitle', relation: '==', value: 1 }
                ],
                selector: '{{QUBELY}} .qubely-block-mediacard .qubely-mediacard-sub-title {margin-bottom: {{subTitleSpacing}};}'
            },
        ]
    },

   // Title separator
   separatorStyle: {
       type: 'string', default: '',
       style: [
           {
               condition: [
                   { key: 'separatorStyle', relation: '!=', value: '' }
               ],
               selector: '{{QUBELY}} .qubely-block-mediacard .qubely-separator-type-css {border-top-style: {{separatorStyle}};}'
           },
       ]
   },
   separatorPosition: { type: 'string', default: 'top' },
   separatorColor: {
       type: 'string', default: '#5D7FEB',
       style: [
           {
               condition: [
                   { key: 'separatorStyle', relation: '!=', value: '' }
               ],
               selector: '{{QUBELY}} .qubely-block-mediacard .qubely-separator-type-svg svg .qubely-separator-stroke {stroke: {{separatorColor}};} {{QUBELY}} .qubely-block-mediacard svg .qubely-separator-fill {fill: {{separatorColor}};} {{QUBELY}} .qubely-block-mediacard .qubely-separator-type-css {border-top-color: {{separatorColor}};}'
           },
       ]
   },
   separatorColorHover: {
       type: 'string', default: '',
       style: [
           {
               condition: [
                   { key: 'separatorStyle', relation: '!=', value: '' }
               ],
               selector: '{{QUBELY}} .qubely-block-mediacard:hover .qubely-separator-type-svg svg .qubely-separator-stroke {stroke: {{separatorColorHover}};} {{QUBELY}} .qubely-block-mediacard:hover svg .qubely-separator-fill {fill: {{separatorColorHover}};} {{QUBELY}} .qubely-block-mediacard:hover .qubely-separator-type-css {border-top-color: {{separatorColorHover}};}'
           },
       ]
   },
   separatorStroke: {
       type: 'number', default: 3,
       style: [
           {
               condition: [
                   { key: 'separatorStyle', relation: '!=', value: '' }
               ],
               selector: '{{QUBELY}} .qubely-block-mediacard .qubely-separator-type-svg svg .qubely-separator-stroke {stroke-width: {{separatorStroke}}px;} {{QUBELY}} .qubely-block-mediacard .qubely-separator-type-css {border-top-width: {{separatorStroke}}px;}'
           },
       ]
   },
   separatorWidth: {
       type: 'object', default: { md: 60 },
       style: [
           {
               condition: [
                   { key: 'separatorStyle', relation: '!=', value: '' }
               ],
               selector: '{{QUBELY}} .qubely-block-mediacard .qubely-separator-type-css {width: {{separatorWidth}}px;} {{QUBELY}} .qubely-block-mediacard .qubely-separator-type-svg svg {width: {{separatorWidth}}px;}'
           },
       ]
   },
   separatorSpacing: {
       type: 'object', default: { md: 10 },
       style: [
           {
               condition: [
                   { key: 'separatorStyle', relation: '!=', value: '' },
                   { key: 'separatorPosition', relation: '==', value: 'left' },
               ],
               selector: '{{QUBELY}} .qubely-separator {margin-right: {{separatorSpacing}}px;}'
           },
           {
               condition: [
                   { key: 'separatorStyle', relation: '!=', value: '' },
                   { key: 'separatorPosition', relation: '==', value: 'right' },
               ],
               selector: '{{QUBELY}} .qubely-separator {margin-left: {{separatorSpacing}}px;}'
           },
           {
               condition: [
                   { key: 'separatorStyle', relation: '!=', value: '' },
                   { key: 'separatorPosition', relation: '==', value: 'leftright' },
               ],
               selector: '{{QUBELY}} .qubely-separator-before {margin-right: {{separatorSpacing}}px;} {{QUBELY}} .qubely-separator-after {margin-left: {{separatorSpacing}}px;}'
           },
           {
               condition: [
                   { key: 'separatorStyle', relation: '!=', value: '' },
                   { key: 'separatorPosition', relation: '==', value: 'top' },
               ],
               selector: '{{QUBELY}} .qubely-separator {margin-bottom: {{separatorSpacing}}px;}'
           },
           {
               condition: [
                   { key: 'separatorStyle', relation: '!=', value: '' },
                   { key: 'separatorPosition', relation: '==', value: 'bottom' },
               ],
               selector: '{{QUBELY}} .qubely-separator {margin-top: {{separatorSpacing}}px;}'
           },
       ]
   },

   //Content
   enableContent: { type: 'boolean', default: true },
   content: {
       type: 'string',
       source: 'html',
       selector: '.qubely-mediacard-text',
       default: 'Qubely blocks are added to the Gutenberg editor as soon as you install the plugin. You can start using it as any other Gutenberg block.'
   },
   contentTypography: { type: 'object', default: { openTypography: 1, size: { md: 22, unit: 'px' } }, style: [{ condition: [{ key: 'enableContent', relation: '==', value: true }], selector: '{{QUBELY}} .qubely-mediacard-text' }] },
   contentColor: { type: 'string', default: '', style: [{ condition: [{ key: 'enableContent', relation: '==', value: true }], selector: '{{QUBELY}} .qubely-mediacard-text {color: {{contentColor}};}' }] },
   contentColorHover: { type: 'string', default: '', style: [{ condition: [{ key: 'enableContent', relation: '==', value: true }], selector: '{{QUBELY}} .qubely-block-mediacard:hover .qubely-mediacard-text {color: {{contentColorHover}};}' }] },
   contentPadding: { type: 'object', default: {}, style: [{ condition: [{ key: 'enableContent', relation: '==', value: true }], selector: '{{QUBELY}} .qubely-mediacard-body' }] },
   contentSpacing: {
       type: 'object', default: { md: 10, unit: 'px' },
       style: [
           {
               condition: [{ key: 'enableButton', relation: '==', value: true }, { key: 'enableContent', relation: '==', value: true }],
               selector: '{{QUBELY}} .qubely-mediacard-body .qubely-mediacard-text {margin-bottom: {{contentSpacing}};}'
           },
           {
               condition: [
                   { key: 'enableButton', relation: '==', value: false },
                   { key: 'enableContent', relation: '==', value: true }
               ],
               selector: '{{QUBELY}} .qubely-mediacard-body .qubely-mediacard-text {margin-bottom: 0;}'
           },
       ]
   },

    // Body
    bgColor: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard' }] },
    bgColorHover: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard:hover' }] },
    bgPadding: {
        type: 'object',
        default: {
            paddingType: 'global'
        },
        style: [
           {
               selector: '{{QUBELY}} .qubely-block-mediacard'
           }
       ]
    },
    bgBorderRadius: {
       type: 'object',
       default: {
           openBorderRadius: 1,
           radiusType: 'global',

       },
       style: [
           {
               selector: '{{QUBELY}} .qubely-block-mediacard'
           },
       ]
    },
    bgBorder: { type: 'object', default: {}, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard' }] },
    bgBorderColorHover: { type: 'string', default: '#e5e5e5', style: [{ selector: '{{QUBELY}} .qubely-block-mediacard:hover { border-color: {{bgBorderColorHover}};}' }] },
    bgShadow: { type: 'object', default: { color: '' }, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard' }] },
    bgShadowHover: { type: 'object', default: { color: '' }, style: [{ selector: '{{QUBELY}} .qubely-block-mediacard:hover' }] },

    sourceOfCopiedStyle: { type: 'boolean', default: false }

};