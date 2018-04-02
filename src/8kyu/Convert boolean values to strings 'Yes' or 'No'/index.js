export function boolToWord(bool) {
  // return bool ? 'Yes' : 'No'
  return ['Yes', 'No'][+!bool]
}
