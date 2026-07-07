let _isWebGLAvailable: boolean | null = null;

export function isWebGLAvailable(): boolean {
  if (_isWebGLAvailable !== null) return _isWebGLAvailable;

  if (typeof window === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    _isWebGLAvailable = !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    _isWebGLAvailable = false;
  }

  return _isWebGLAvailable;
}
