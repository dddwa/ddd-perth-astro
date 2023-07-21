import { withoutSpace } from '../helpers.mjs';

const conditions = new Set(["_hover","_focus","_focusWithin","_focusVisible","_disabled","_active","_visited","_target","_readOnly","_readWrite","_empty","_checked","_enabled","_expanded","_highlighted","_before","_after","_firstLetter","_firstLine","_marker","_selection","_file","_backdrop","_first","_last","_only","_even","_odd","_firstOfType","_lastOfType","_onlyOfType","_peerFocus","_peerHover","_peerActive","_peerFocusWithin","_peerFocusVisible","_peerDisabled","_peerChecked","_peerInvalid","_peerExpanded","_peerPlaceholderShown","_groupFocus","_groupHover","_groupActive","_groupFocusWithin","_groupFocusVisible","_groupDisabled","_groupChecked","_groupExpanded","_groupInvalid","_indeterminate","_required","_valid","_invalid","_autofill","_inRange","_outOfRange","_placeholder","_placeholderShown","_pressed","_selected","_default","_optional","_open","_fullscreen","_loading","_currentPage","_currentStep","_motionReduce","_motionSafe","_print","_landscape","_portrait","_dark","_light","_osDark","_osLight","_highContrast","_lessContrast","_moreContrast","_ltr","_rtl","_scrollbar","_scrollbarThumb","_scrollbarTrack","_horizontal","_vertical","xxs","xxsOnly","xxsDown","xs","xsOnly","xsDown","sm","smOnly","smDown","md","mdOnly","mdDown","lg","lgOnly","lgDown","xl","xlOnly","xlDown","1.5xl","1.5xlOnly","1.5xlDown","2xl","2xlOnly","2xlDown","3xl","3xlOnly","3xlDown","4xl","4xlOnly","4xlDown","5xl","5xlOnly","5xlDown","6xl","6xlOnly","xxsToXs","xxsToSm","xxsToMd","xxsToLg","xxsToXl","xxsTo1.5xl","xxsTo2xl","xxsTo3xl","xxsTo4xl","xxsTo5xl","xxsTo6xl","xsToSm","xsToMd","xsToLg","xsToXl","xsTo1.5xl","xsTo2xl","xsTo3xl","xsTo4xl","xsTo5xl","xsTo6xl","smToMd","smToLg","smToXl","smTo1.5xl","smTo2xl","smTo3xl","smTo4xl","smTo5xl","smTo6xl","mdToLg","mdToXl","mdTo1.5xl","mdTo2xl","mdTo3xl","mdTo4xl","mdTo5xl","mdTo6xl","lgToXl","lgTo1.5xl","lgTo2xl","lgTo3xl","lgTo4xl","lgTo5xl","lgTo6xl","xlTo1.5xl","xlTo2xl","xlTo3xl","xlTo4xl","xlTo5xl","xlTo6xl","1.5xlTo2xl","1.5xlTo3xl","1.5xlTo4xl","1.5xlTo5xl","1.5xlTo6xl","2xlTo3xl","2xlTo4xl","2xlTo5xl","2xlTo6xl","3xlTo4xl","3xlTo5xl","3xlTo6xl","4xlTo5xl","4xlTo6xl","5xlTo6xl","base"])

export function isCondition(value){
  return conditions.has(value) || /^@|&|&$/.test(value)
}

const underscoreRegex = /^_/
const selectorRegex = /&|@/

export function finalizeConditions(paths){
  return paths.map((path) => {
    if (conditions.has(path)){
      return path.replace(underscoreRegex, '')
    }

    if (selectorRegex.test(path)){
      return `[${withoutSpace(path.trim())}]`
    }

    return path
  })}

  export function sortConditions(paths){
    return paths.sort((a, b) => {
      const aa = isCondition(a)
      const bb = isCondition(b)
      if (aa && !bb) return 1
      if (!aa && bb) return -1
      return 0
    })
  }