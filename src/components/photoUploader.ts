const MAX_BYTES = 10 * 1024 * 1024;
const ALLOWED = ["image/jpeg", "image/png"];

export interface Uploader {
  getFile(): File | null;
}

export function mountPhotoUploader(
  zone: HTMLElement,
  input: HTMLInputElement,
  preview: HTMLImageElement,
  label: HTMLElement,
  onError: (message: string) => void,
): Uploader {
  let current: File | null = null;

  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (!file) return;

    if (!ALLOWED.includes(file.type)) {
      onError("Please choose a JPG or PNG image.");
      input.value = "";
      return;
    }
    if (file.size > MAX_BYTES) {
      onError("That image is larger than 10 MB.");
      input.value = "";
      return;
    }

    if (current) URL.revokeObjectURL(preview.src);
    current = file;

    preview.src = URL.createObjectURL(file);
    preview.hidden = false;
    label.textContent = file.name;
    zone.classList.add("upload-zone--has-photo");
  });

  return { getFile: () => current };
}
