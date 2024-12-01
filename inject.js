
(function() {

  function handleChange(evt) {
    let {key, shiftKey, altKey, ctrlKey} = evt;

    if (shiftKey || altKey || ctrlKey || isInputableElement()) return;

    const regex = /^[a-zA-Z0-9]$/;

    if (!regex.test(key)) return;
    
    let candidates = fileManager.getFileList().array_.map((e, index) => { return {name: e.name, index} })
      .filter(({name}) => name.slice(0, 1).toLowerCase() == key.toLowerCase())
    let selectedIndex = candidates.findIndex(e => e.index == fileManager.ui.listContainer.selectionModel.selectedIndex);

    let nextItem = candidates[(selectedIndex + 1) % candidates.length]
    if (!nextItem) return;
    
    evt.preventDefault()
    
    setNextSelection(nextItem.index)
  }

  function isInputableElement() {
    const activeElement = document.activeElement;
    return activeElement && (
      activeElement.tagName === 'INPUT' ||
      activeElement.tagName === 'TEXTAREA' ||
      activeElement.tagName === 'SELECT' ||
      activeElement.isContentEditable
    );
  }

  function setNextSelection(newIndex) {
    let sm = fileManager.ui.listContainer.selectionModel
    
    sm.beginChange();
    sm.leadIndex = newIndex;
    sm.setCheckSelectMode(false);
    if (sm.multiple) {
        sm.unselectAll()
    }
    sm.setIndexSelected(newIndex, true);
    sm.anchorIndex = newIndex
    sm.endChange();
  }

  document.addEventListener('keydown', evt => handleChange(evt));

})();