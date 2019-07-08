export class DownloadState {
  static get LOADING() {
    return "loading";
  }

  static get FINISHED() {
    return "finished";
  }

  static get SELECTION() {
    return "selection";
  }
  static get ERROR() {
    return "error";
  }
}

export class Actions {
  static get ADD_ITEM() {
    return "ADD_ITEM";
  }

  static get UPDATE_ITEM() {
    return "UPDATE_ITEM";
  }

  static get REMOVE_ITEM() {
    return "REMOVE_ITEM";
  }
}
