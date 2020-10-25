const storeType = Object.freeze({
  object: "object",
  string: "string",
  number: "number",
})

class Storage {
  encode(value, type) {
    let val = value
    if (type === storeType.object) {
      val = JSON.stringify(value)
    }

    if (type === storeType.number) {
      val = Number.toString(val)
    }

    const codeUnits = new Uint16Array(val.length)
    for (let i = 0; i < codeUnits.length; i++) {
      codeUnits[i] = val.charCodeAt(i)
    }

    return window.btoa(
      String.fromCharCode(...new Uint8Array(codeUnits.buffer))
    )
  }

  decode(encoded, type) {
    let binary = window.atob(encoded)
    const bytes = new Uint8Array(binary.length)
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = binary.charCodeAt(i)
    }
    const val = String.fromCharCode(...new Uint16Array(bytes.buffer))

    if (type === storeType.object) {
      return JSON.parse(val)
    }

    if (type === storeType.number) {
      return Number.parseFloat(val)
    }

    return val
  }

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  get(key) {
    return JSON.parse(window.localStorage.getItem(key))
  }

  clear() {
    window.localStorage.clear()
  }

  getType(val) {
    const type = Object.keys(storeType).reduce((c, key) => {
      if (typeof val === storeType[key]) {
        return storeType[key]
      }

      return c
    }, undefined)

    return type
  }
}

const storage = new Storage({
  storage: window.localStorage,
  btoa: window.btoa,
  atob: window.atob,
})

export default storage
