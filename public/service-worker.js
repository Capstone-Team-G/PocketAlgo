/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-64f1e998'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": ".DS_Store",
    "revision": "f6c620a62616bb11fb5c8f4b48f68574"
  }, {
    "url": "241fddcdeb225255d8f37267a285d009.png",
    "revision": "e4e6242772ed19e5a37ef84f6b162534"
  }, {
    "url": "31d6cfe0d16ae931b73c59d7e0c089c0.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }, {
    "url": "34e75c410bcbc517114ac5a70460e33d.png",
    "revision": "d27da066840881240d9e7e4f48c05bfa"
  }, {
    "url": "4c846021d268fedb398420dd33ac1397.png",
    "revision": "c1b3ec490e31f66f782fab4c155454cf"
  }, {
    "url": "59b87e45cc912525b7f4b61b71d4eb7c.png",
    "revision": "fe1cb33e3f893257a84a206b127b3df6"
  }, {
    "url": "8474a721b39dbc1336ec0288cf832e90.png",
    "revision": "188de43eb4d75f1f87a0718b7d5169db"
  }, {
    "url": "8e393318935f715f3d2a03c42ceb408b.png",
    "revision": "da2f37997908c3be37f9cce2eadf1ce2"
  }, {
    "url": "9a4693a2607a9161a890a022537178fc.png",
    "revision": "ea5157645671d89858a986094916ac1b"
  }, {
    "url": "PA_maskable_icon.png",
    "revision": "b0163391f625867d85faa4b728539e77"
  }, {
    "url": "apple-splash-1125-2436.jpg",
    "revision": "dd6c20bfdcf17e21868150de020b6b4c"
  }, {
    "url": "apple-splash-1136-640.jpg",
    "revision": "022c2eea834a29fd44a34c88d4e093e9"
  }, {
    "url": "apple-splash-1242-2208.jpg",
    "revision": "e06d864e57aeac66734efba870f6b9fa"
  }, {
    "url": "apple-splash-1242-2688.jpg",
    "revision": "2773e568d2162e704e9627b979f8c25f"
  }, {
    "url": "apple-splash-1334-750.jpg",
    "revision": "887c12669758b0d9ef1bde8e837eacb5"
  }, {
    "url": "apple-splash-1536-2048.jpg",
    "revision": "062bd4ac2b12e60668545d0be3be45b1"
  }, {
    "url": "apple-splash-1668-2224.jpg",
    "revision": "1fc005503856485cefe7e090e5e1008a"
  }, {
    "url": "apple-splash-1668-2388.jpg",
    "revision": "a9ae4651a14c9b63634da6fb12a59082"
  }, {
    "url": "apple-splash-1792-828.jpg",
    "revision": "b19174714b0c5ca22a4f48015db68ad8"
  }, {
    "url": "apple-splash-2048-1536.jpg",
    "revision": "a6e2bd2727b7e9cd2fbfb401267fbaa4"
  }, {
    "url": "apple-splash-2048-2732.jpg",
    "revision": "93c6c92e812427f3ff731245d7be0ebc"
  }, {
    "url": "apple-splash-2208-1242.jpg",
    "revision": "e1c984c7d16645f893a0dbe7833d5a6f"
  }, {
    "url": "apple-splash-2224-1668.jpg",
    "revision": "65bb90136557a9e87b4459dfcaa603f9"
  }, {
    "url": "apple-splash-2388-1668.jpg",
    "revision": "88b5ef9b11eeb8fddc98a5c24f41f5ed"
  }, {
    "url": "apple-splash-2436-1125.jpg",
    "revision": "ab2660f32bc64f6dbbcf1d452e490588"
  }, {
    "url": "apple-splash-2688-1242.jpg",
    "revision": "d21815bc7fdd2e3c80cf0c52af982f30"
  }, {
    "url": "apple-splash-2732-2048.jpg",
    "revision": "7fd033a2374b996e6ef626219b97cb1e"
  }, {
    "url": "apple-splash-640-1136.jpg",
    "revision": "bfe0959d971283b320301f1da5ceca4a"
  }, {
    "url": "apple-splash-750-1334.jpg",
    "revision": "c6ef57da6009d8637fd09370ea1afaff"
  }, {
    "url": "apple-splash-828-1792.jpg",
    "revision": "a6a2468c89c24881c4e5aba744e91f90"
  }, {
    "url": "bfabc5e352489193b70727ed04032554.png",
    "revision": "91c5e9936b7af7b13ba107103084b2ad"
  }, {
    "url": "d6ceab0bd96f9f6fb50fb65a146b33ff.png",
    "revision": "86ddf3ff5bb0818c85dca0a8e4208643"
  }, {
    "url": "da5fc8a4d6b16885ebada6ec12867fa2.png",
    "revision": "a8662c90d1ed5b369ccf31e19aaef881"
  }, {
    "url": "dc0f7dece949fca6194f6c9dd088259c.png",
    "revision": "2ddcb638a79950c63ddc1f7a4f4c7334"
  }, {
    "url": "dsd.css",
    "revision": "2f19eee775d29f149d81eb73a7d81067"
  }, {
    "url": "f88bb3465d39c4ba87e0d7952ddba0f3.png",
    "revision": "d4b9fd4a445e6a97d649668c3607628c"
  }, {
    "url": "f9f16284917c14d6a24a64a337c65e2f.png",
    "revision": "e512ef2290266a0436ac686fbc541778"
  }, {
    "url": "img/.DS_Store",
    "revision": "aa43c104295cf68f5701cd15a254d476"
  }, {
    "url": "img/About.png",
    "revision": "e4e6242772ed19e5a37ef84f6b162534"
  }, {
    "url": "img/AboutUs.png",
    "revision": "e4e6242772ed19e5a37ef84f6b162534"
  }, {
    "url": "img/AlgoOfTheDay.png",
    "revision": "c1b3ec490e31f66f782fab4c155454cf"
  }, {
    "url": "img/Algotree.jpg",
    "revision": "551426e11179a105b7f63628fc53d9d8"
  }, {
    "url": "img/Categories.png",
    "revision": "d4b9fd4a445e6a97d649668c3607628c"
  }, {
    "url": "img/Home.png",
    "revision": "188de43eb4d75f1f87a0718b7d5169db"
  }, {
    "url": "img/bigdata.png",
    "revision": "91c5e9936b7af7b13ba107103084b2ad"
  }, {
    "url": "img/logo1.png",
    "revision": "86ddf3ff5bb0818c85dca0a8e4208643"
  }, {
    "url": "img/logo2.png",
    "revision": "e512ef2290266a0436ac686fbc541778"
  }, {
    "url": "img/logo3.png",
    "revision": "fe1cb33e3f893257a84a206b127b3df6"
  }, {
    "url": "img/logo4.png",
    "revision": "da2f37997908c3be37f9cce2eadf1ce2"
  }, {
    "url": "index.html",
    "revision": "7dcae736af26e9fe31772a3f130d0610"
  }, {
    "url": "manifest.json",
    "revision": "be487262de6a94ada8775ee0feb0219a"
  }, {
    "url": "maskable_icon.png",
    "revision": "b0163391f625867d85faa4b728539e77"
  }, {
    "url": "style.css",
    "revision": "6deea1ef6e5b214b3fb3c5e4ac6e36e2"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
