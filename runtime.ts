import { proxy } from "deco/clients/withManifest.ts";
import type { Manifest } from "./manifest.gen.ts";
import type { Manifest as ManifestEmailJS } from "apps/emailjs/manifest.gen.ts";

export const invoke = proxy<
  Manifest & ManifestEmailJS
>();
