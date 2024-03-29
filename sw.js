const SERVICE_WORK_CACHE_FILE_PATHS = [
"/ran/404.html",
"/ran/hls/example.m3u8",
"/ran/hls/5_1701577744714/5.m3u8",
"/ran/hls/5_1701577744714/5_00002.ts",
"/ran/hls/5_1701577744714/5_00005.ts",
"/ran/hls/5_1701577744714/5_00000.ts",
"/ran/hls/5_1701577744714/5_00003.ts",
"/ran/hls/5_1701577744714/5.key",
"/ran/hls/5_1701577744714/5_00004.ts",
"/ran/hls/5_1701577744714/5_00001.ts",
"/ran/hls/5_1701577744714/5_00006.ts",
"/ran/hls/5_1701577771368/5.m3u8",
"/ran/hls/5_1701577771368/5_00002.ts",
"/ran/hls/5_1701577771368/5_00005.ts",
"/ran/hls/5_1701577771368/5_00000.ts",
"/ran/hls/5_1701577771368/5_00003.ts",
"/ran/hls/5_1701577771368/5.key",
"/ran/hls/5_1701577771368/5_00004.ts",
"/ran/hls/5_1701577771368/5_00001.ts",
"/ran/hls/5_1701577771368/5_00006.ts",
"/ran/index.html",
"/ran/ocr/eng.png",
"/ran/ocr/chi_sim.png",
"/ran/icon_192.png",
"/ran/src/types/TS类型.html",
"/ran/src/types/高级类型.html",
"/ran/src/types/类型运算.html",
"/ran/src/types/模式匹配.html",
"/ran/src/ranui/image/index.html",
"/ran/src/ranui/index.html",
"/ran/src/ranui/progress/index.html",
"/ran/src/ranui/checkbox/index.html",
"/ran/src/ranui/preview/index.html",
"/ran/src/ranui/input/index.html",
"/ran/src/ranui/radar/index.html",
"/ran/src/ranui/modal/index.html",
"/ran/src/ranui/icon/index.html",
"/ran/src/ranui/popover/index.html",
"/ran/src/ranui/message/index.html",
"/ran/src/ranui/select/index.html",
"/ran/src/ranui/tab/index.html",
"/ran/src/ranui/skeleton/index.html",
"/ran/src/ranui/player/index.html",
"/ran/src/ranui/tabs/index.html",
"/ran/src/ranui/button/index.html",
"/ran/src/article/sort/index.html",
"/ran/src/article/sort/merge/index.html",
"/ran/src/article/sort/count/index.html",
"/ran/src/article/sort/radix/index.html",
"/ran/src/article/sort/bubble/index.html",
"/ran/src/article/sort/insert/index.html",
"/ran/src/article/sort/quick/index.html",
"/ran/src/article/sort/select/index.html",
"/ran/src/article/sort/shell/index.html",
"/ran/src/article/sort/heap/index.html",
"/ran/src/article/sort/bucket/index.html",
"/ran/src/article/astParse/tokenizer.html",
"/ran/src/article/designMode.html",
"/ran/src/article/functionalProgramming.html",
"/ran/src/article/babel.html",
"/ran/src/article/typescript/index.html",
"/ran/src/article/typescript/reconstruction.html",
"/ran/src/article/typescript/calculate.html",
"/ran/src/article/typescript/recursion.html",
"/ran/src/article/typescript/pattern.html",
"/ran/src/article/typescript/unionType.html",
"/ran/src/article/imagemin.html",
"/ran/src/article/javascript/domLoad.html",
"/ran/src/article/bundle.html",
"/ran/src/ranuts/index.html",
"/ran/src/ranuts/mimeType/mimeType.html",
"/ran/src/ranuts/mode/subscribe.html",
"/ran/src/ranuts/binaryTree/index.html",
"/ran/src/ranuts/file/watchFile.html",
"/ran/src/ranuts/file/fileInfo.html",
"/ran/src/ranuts/file/readDir.html",
"/ran/src/ranuts/file/appendFile.html",
"/ran/src/ranuts/file/readFile.html",
"/ran/src/ranuts/file/writeFile.html",
"/ran/src/ranuts/utils/str2xml.html",
"/ran/src/ranuts/utils/filterObj.html",
"/ran/src/ranuts/utils/task.html",
"/ran/src/ranuts/utils/convertImageToBase64.html",
"/ran/src/ranuts/utils/formatJson.html",
"/ran/src/ranuts/utils/ocr.html",
"/ran/src/ranuts/utils/getCookie.html",
"/ran/src/ranuts/bundler/index.html",
"/ran/pagefind/pagefind.zh-cn_2aba5a9a2a67e.pf_meta",
"/ran/pagefind/pagefind-entry.json",
"/ran/pagefind/pagefind-modular-ui.js",
"/ran/pagefind/wasm.en.pagefind",
"/ran/pagefind/fragment/zh-cn_5888cbb.pf_fragment",
"/ran/pagefind/fragment/zh-cn_86caad9.pf_fragment",
"/ran/pagefind/fragment/en_4c54dcd.pf_fragment",
"/ran/pagefind/fragment/en_ab5b7c1.pf_fragment",
"/ran/pagefind/fragment/en_67164e3.pf_fragment",
"/ran/pagefind/fragment/en_173a22b.pf_fragment",
"/ran/pagefind/fragment/zh-cn_4aa3033.pf_fragment",
"/ran/pagefind/fragment/zh-cn_e6b1657.pf_fragment",
"/ran/pagefind/fragment/zh-cn_21aa409.pf_fragment",
"/ran/pagefind/fragment/en_fef81bf.pf_fragment",
"/ran/pagefind/fragment/en_f5a1553.pf_fragment",
"/ran/pagefind/fragment/zh-cn_1d676ed.pf_fragment",
"/ran/pagefind/fragment/zh-cn_e8d7fb5.pf_fragment",
"/ran/pagefind/fragment/en_13157a1.pf_fragment",
"/ran/pagefind/fragment/en_fba3fcb.pf_fragment",
"/ran/pagefind/fragment/en_94cd0a8.pf_fragment",
"/ran/pagefind/fragment/en_55a7cf9.pf_fragment",
"/ran/pagefind/fragment/en_27ced55.pf_fragment",
"/ran/pagefind/fragment/zh-cn_56bf7c1.pf_fragment",
"/ran/pagefind/fragment/zh-cn_2320816.pf_fragment",
"/ran/pagefind/fragment/zh-cn_7135acd.pf_fragment",
"/ran/pagefind/fragment/zh-cn_9bb27f9.pf_fragment",
"/ran/pagefind/fragment/en_2771bf1.pf_fragment",
"/ran/pagefind/fragment/en_f917c1c.pf_fragment",
"/ran/pagefind/fragment/en_106ee7d.pf_fragment",
"/ran/pagefind/fragment/en_7755d1b.pf_fragment",
"/ran/pagefind/fragment/zh-cn_e712c2f.pf_fragment",
"/ran/pagefind/fragment/zh-cn_9919be9.pf_fragment",
"/ran/pagefind/fragment/zh-cn_bb4f399.pf_fragment",
"/ran/pagefind/fragment/zh-cn_63cce06.pf_fragment",
"/ran/pagefind/fragment/en_6623363.pf_fragment",
"/ran/pagefind/fragment/zh-cn_a7404f9.pf_fragment",
"/ran/pagefind/fragment/en_27a0b4a.pf_fragment",
"/ran/pagefind/fragment/zh-cn_542bc65.pf_fragment",
"/ran/pagefind/fragment/en_65bc9fe.pf_fragment",
"/ran/pagefind/fragment/zh-cn_61c329a.pf_fragment",
"/ran/pagefind/fragment/zh-cn_e1f4a79.pf_fragment",
"/ran/pagefind/fragment/en_a034a97.pf_fragment",
"/ran/pagefind/fragment/en_3f75462.pf_fragment",
"/ran/pagefind/fragment/en_b5741b3.pf_fragment",
"/ran/pagefind/fragment/zh-cn_5cb0744.pf_fragment",
"/ran/pagefind/fragment/zh-cn_1795edd.pf_fragment",
"/ran/pagefind/fragment/zh-cn_a7785c3.pf_fragment",
"/ran/pagefind/fragment/en_3bfb6f7.pf_fragment",
"/ran/pagefind/fragment/zh-cn_2186e18.pf_fragment",
"/ran/pagefind/fragment/zh-cn_fca9594.pf_fragment",
"/ran/pagefind/fragment/en_a116508.pf_fragment",
"/ran/pagefind/fragment/en_3bf4f84.pf_fragment",
"/ran/pagefind/fragment/zh-cn_a91af19.pf_fragment",
"/ran/pagefind/fragment/zh-cn_4152685.pf_fragment",
"/ran/pagefind/fragment/zh-cn_ae66cea.pf_fragment",
"/ran/pagefind/fragment/en_1fd6515.pf_fragment",
"/ran/pagefind/fragment/zh-cn_3775faf.pf_fragment",
"/ran/pagefind/fragment/en_a4c51e8.pf_fragment",
"/ran/pagefind/fragment/zh-cn_cc13270.pf_fragment",
"/ran/pagefind/fragment/zh-cn_b736c83.pf_fragment",
"/ran/pagefind/fragment/zh-cn_90c7194.pf_fragment",
"/ran/pagefind/fragment/en_738928a.pf_fragment",
"/ran/pagefind/fragment/zh-cn_62e4d07.pf_fragment",
"/ran/pagefind/fragment/zh-cn_7c1b50b.pf_fragment",
"/ran/pagefind/fragment/zh-cn_e85c0d6.pf_fragment",
"/ran/pagefind/fragment/en_c2b6cbd.pf_fragment",
"/ran/pagefind/fragment/zh-cn_1404275.pf_fragment",
"/ran/pagefind/fragment/zh-cn_4e4f462.pf_fragment",
"/ran/pagefind/fragment/en_d8f3a4b.pf_fragment",
"/ran/pagefind/fragment/zh-cn_62c4e29.pf_fragment",
"/ran/pagefind/fragment/en_346b990.pf_fragment",
"/ran/pagefind/fragment/en_b977a71.pf_fragment",
"/ran/pagefind/fragment/en_34522ba.pf_fragment",
"/ran/pagefind/fragment/zh-cn_c4a5995.pf_fragment",
"/ran/pagefind/fragment/zh-cn_cfbcb39.pf_fragment",
"/ran/pagefind/fragment/en_7b5a911.pf_fragment",
"/ran/pagefind/fragment/zh-cn_6791f1c.pf_fragment",
"/ran/pagefind/fragment/zh-cn_9c8fd1c.pf_fragment",
"/ran/pagefind/fragment/en_9c45c89.pf_fragment",
"/ran/pagefind/fragment/en_cbc1448.pf_fragment",
"/ran/pagefind/fragment/en_75d1df3.pf_fragment",
"/ran/pagefind/fragment/zh-cn_cbf0f26.pf_fragment",
"/ran/pagefind/fragment/zh-cn_c551e89.pf_fragment",
"/ran/pagefind/fragment/zh-cn_6e3ea19.pf_fragment",
"/ran/pagefind/fragment/en_c8893d7.pf_fragment",
"/ran/pagefind/fragment/zh-cn_b5d6ea8.pf_fragment",
"/ran/pagefind/fragment/en_1f67d37.pf_fragment",
"/ran/pagefind/fragment/zh-cn_8cf4d26.pf_fragment",
"/ran/pagefind/fragment/zh-cn_48a39a0.pf_fragment",
"/ran/pagefind/fragment/en_5ff5133.pf_fragment",
"/ran/pagefind/fragment/en_bc653ea.pf_fragment",
"/ran/pagefind/fragment/en_12451bd.pf_fragment",
"/ran/pagefind/fragment/en_b81d242.pf_fragment",
"/ran/pagefind/fragment/zh-cn_16fb727.pf_fragment",
"/ran/pagefind/fragment/zh-cn_ac43f88.pf_fragment",
"/ran/pagefind/fragment/en_e8f3a9e.pf_fragment",
"/ran/pagefind/fragment/zh-cn_e766c87.pf_fragment",
"/ran/pagefind/fragment/en_ac97cd9.pf_fragment",
"/ran/pagefind/fragment/zh-cn_2c5b442.pf_fragment",
"/ran/pagefind/fragment/en_65ccfe9.pf_fragment",
"/ran/pagefind/fragment/zh-cn_2e59c37.pf_fragment",
"/ran/pagefind/fragment/zh-cn_3130d28.pf_fragment",
"/ran/pagefind/fragment/en_dd6246f.pf_fragment",
"/ran/pagefind/fragment/zh-cn_578e3e5.pf_fragment",
"/ran/pagefind/fragment/zh-cn_9e1b73b.pf_fragment",
"/ran/pagefind/fragment/zh-cn_9ceec36.pf_fragment",
"/ran/pagefind/fragment/en_b46590e.pf_fragment",
"/ran/pagefind/fragment/zh-cn_b6d2c22.pf_fragment",
"/ran/pagefind/fragment/en_f8cf77f.pf_fragment",
"/ran/pagefind/fragment/en_1e31265.pf_fragment",
"/ran/pagefind/fragment/zh-cn_c4f682e.pf_fragment",
"/ran/pagefind/fragment/en_e2846bf.pf_fragment",
"/ran/pagefind/fragment/en_6a66788.pf_fragment",
"/ran/pagefind/fragment/en_d01c729.pf_fragment",
"/ran/pagefind/fragment/en_baf552f.pf_fragment",
"/ran/pagefind/fragment/zh-cn_f8b7d53.pf_fragment",
"/ran/pagefind/fragment/en_447484b.pf_fragment",
"/ran/pagefind/fragment/en_222d98b.pf_fragment",
"/ran/pagefind/fragment/en_a3a3739.pf_fragment",
"/ran/pagefind/fragment/zh-cn_f521899.pf_fragment",
"/ran/pagefind/fragment/en_ac6abbe.pf_fragment",
"/ran/pagefind/fragment/en_39ca4e7.pf_fragment",
"/ran/pagefind/fragment/en_b2b1326.pf_fragment",
"/ran/pagefind/fragment/en_e34b39a.pf_fragment",
"/ran/pagefind/fragment/zh-cn_519fac2.pf_fragment",
"/ran/pagefind/fragment/en_d6fd44d.pf_fragment",
"/ran/pagefind/fragment/zh-cn_544fd92.pf_fragment",
"/ran/pagefind/fragment/en_91e701d.pf_fragment",
"/ran/pagefind/fragment/zh-cn_332b751.pf_fragment",
"/ran/pagefind/fragment/en_919ab78.pf_fragment",
"/ran/pagefind/fragment/en_229996f.pf_fragment",
"/ran/pagefind/wasm.unknown.pagefind",
"/ran/pagefind/index/zh-cn_c898f54.pf_index",
"/ran/pagefind/index/zh-cn_d1e1a37.pf_index",
"/ran/pagefind/index/en_a02c658.pf_index",
"/ran/pagefind/index/en_b5f91c4.pf_index",
"/ran/pagefind/index/zh-cn_5521b2b.pf_index",
"/ran/pagefind/index/en_71df5cf.pf_index",
"/ran/pagefind/index/zh-cn_c43020e.pf_index",
"/ran/pagefind/pagefind-ui.css",
"/ran/pagefind/pagefind-highlight.js",
"/ran/pagefind/pagefind-modular-ui.css",
"/ran/pagefind/pagefind-ui.js",
"/ran/pagefind/pagefind.en_16ebb4a51e.pf_meta",
"/ran/pagefind/pagefind.js",
"/ran/icon_96.png",
"/ran/icon_48.png",
"/ran/assets/cn_src_ranuts_utils_convertImageToBase64.md.B3lllCyE.js",
"/ran/assets/src_ranui_radar_index.md.JzC72lKL.js",
"/ran/assets/cn_src_ranuts_file_fileInfo.md.CKg8s5gg.lean.js",
"/ran/assets/cn_src_ranuts_utils_ocr.md.D9pHUi8y.js",
"/ran/assets/cn_src_article_sort_index.md.BWj5jCvU.lean.js",
"/ran/assets/cn_src_article_typescript_pattern.md.NFp3SHqL.lean.js",
"/ran/assets/cn_src_ranuts_utils_getCookie.md.CI8E2ExS.js",
"/ran/assets/src_ranui_skeleton_index.md.G8HiQn4o.lean.js",
"/ran/assets/src_article_sort_radix_index.md.DYW833gu.lean.js",
"/ran/assets/cn_src_ranuts_utils_filterObj.md.CSJftAUL.js",
"/ran/assets/cn_src_ranui_index.md.RPTVkaIp.js",
"/ran/assets/inter-roman-latin.Bu8hRsVA.woff2",
"/ran/assets/src_ranuts_file_writeFile.md.Az-ztGNa.js",
"/ran/assets/src_ranuts_file_fileInfo.md.jZnZnH8G.js",
"/ran/assets/inter-italic-latin-ext.BGcWXLrn.woff2",
"/ran/assets/index.md.BXVCfiRg.lean.js",
"/ran/assets/cn_src_article_sort_index.md.BWj5jCvU.js",
"/ran/assets/src_ranuts_file_readFile.md.Q5NyngeK.lean.js",
"/ran/assets/src_ranuts_utils_task.md.f2ek6IHN.js",
"/ran/assets/src_article_typescript_calculate.md.DoRwzoy_.js",
"/ran/assets/src_article_typescript_reconstruction.md.HHPbCwLs.js",
"/ran/assets/cn_src_ranui_popover_index.md.Cx_yK-M7.js",
"/ran/assets/cn_src_article_babel.md.B_kU4idG.lean.js",
"/ran/assets/cn_src_ranui_input_index.md.BsgdZ0JN.js",
"/ran/assets/File.BiH2GpuW.jpeg",
"/ran/assets/src_ranui_icon_index.md.BCPHaDPr.lean.js",
"/ran/assets/cn_src_ranui_radar_index.md.BicV7u2F.js",
"/ran/assets/extra.Da45cF33.jpeg",
"/ran/assets/cn_src_ranuts_file_readFile.md.Dp-4Viwj.js",
"/ran/assets/cn_index.md.DzB0mQ3G.lean.js",
"/ran/assets/src_article_sort_merge_index.md.BwOsaf0P.lean.js",
"/ran/assets/cn_src_article_sort_bubble_index.md.BbWj8AHI.lean.js",
"/ran/assets/cn_src_article_sort_shell_index.md.Bobabm1F.js",
"/ran/assets/inter-italic-cyrillic.D6csxwjC.woff2",
"/ran/assets/src_article_sort_index.md.D5bXfny8.lean.js",
"/ran/assets/src_ranui_message_index.md.C772Od4e.lean.js",
"/ran/assets/src_article_sort_insert_index.md.DUolhM5t.js",
"/ran/assets/cn_src_article_sort_insert_index.md.DLcsgnIK.js",
"/ran/assets/src_ranui_tabs_index.md.nuhJhUZZ.js",
"/ran/assets/quick.DD28bswc.gif",
"/ran/assets/src_article_functionalProgramming.md.g2AJyg-M.lean.js",
"/ran/assets/src_article_typescript_calculate.md.DoRwzoy_.lean.js",
"/ran/assets/cn_src_types_高级类型.md.CEmcTgNw.js",
"/ran/assets/src_ranui_tab_index.md.DPT_lCTL.lean.js",
"/ran/assets/src_ranui_player_index.md.Bl1wCx91.lean.js",
"/ran/assets/src_types_高级类型.md.BMvt_ZkC.lean.js",
"/ran/assets/cn_src_ranui_player_index.md.B8G4ZmNQ.lean.js",
"/ran/assets/cn_src_article_typescript_calculate.md.BVbWp3J7.js",
"/ran/assets/Program.BBf_t-me.jpeg",
"/ran/assets/cn_src_article_typescript_recursion.md.dI9HcV1P.js",
"/ran/assets/src_ranuts_utils_str2xml.md.BPuzsaPr.js",
"/ran/assets/src_ranui_popover_index.md.BZOcRJuF.js",
"/ran/assets/cn_src_ranui_skeleton_index.md.CCVP4zCH.lean.js",
"/ran/assets/src_ranuts_bundler_index.md.Cb4-zv_J.lean.js",
"/ran/assets/src_ranuts_file_readFile.md.Q5NyngeK.js",
"/ran/assets/cn_src_article_sort_select_index.md.Bi-qLbG1.js",
"/ran/assets/src_ranui_player_index.md.Bl1wCx91.js",
"/ran/assets/src_article_sort_heap_index.md.BYv_AVdl.lean.js",
"/ran/assets/src_types_类型运算.md.C3if_b8a.lean.js",
"/ran/assets/cn_src_article_javascript_domLoad.md.BA6uiTQH.js",
"/ran/assets/cn_src_article_typescript_unionType.md.AfQtKLju.lean.js",
"/ran/assets/src_ranuts_mimeType_mimeType.md.D1Anyrl4.js",
"/ran/assets/cn_src_article_astParse_tokenizer.md.F42LduFC.js",
"/ran/assets/cn_src_ranuts_utils_ocr.md.D9pHUi8y.lean.js",
"/ran/assets/src_ranui_select_index.md.BRzQjwh-.lean.js",
"/ran/assets/cn_src_ranui_modal_index.md.Defgnagq.lean.js",
"/ran/assets/src_ranui_modal_index.md.DzF9CRg7.lean.js",
"/ran/assets/cn_src_ranuts_utils_task.md.Dvop1Zi0.lean.js",
"/ran/assets/cn_src_ranuts_file_readDir.md.DbpYyY07.js",
"/ran/assets/src_ranui_input_index.md.BowELL0n.lean.js",
"/ran/assets/src_ranui_preview_index.md.C0WVcHyr.lean.js",
"/ran/assets/cn_src_article_sort_radix_index.md._Nij2pnS.js",
"/ran/assets/cn_src_types_模式匹配.md.DlCHAXXV.js",
"/ran/assets/Statement.9lGuRes5.jpeg",
"/ran/assets/cn_src_article_sort_merge_index.md.dg4OFmck.lean.js",
"/ran/assets/src_article_typescript_index.md.BgBN2xsh.lean.js",
"/ran/assets/cn_src_ranuts_file_watchFile.md.REC4w5YH.js",
"/ran/assets/src_article_bundle.md.DeW8CjuV.js",
"/ran/assets/src_ranuts_utils_ocr.md.RtKbcYWN.lean.js",
"/ran/assets/Literal.Dl-JxujV.jpeg",
"/ran/assets/src_article_typescript_reconstruction.md.HHPbCwLs.lean.js",
"/ran/assets/heap.D4myjC6C.gif",
"/ran/assets/cn_src_article_astParse_tokenizer.md.F42LduFC.lean.js",
"/ran/assets/cn_src_article_sort_quick_index.md.BWWd8ay2.js",
"/ran/assets/inter-italic-greek.9J96vYpw.woff2",
"/ran/assets/src_article_sort_radix_index.md.DYW833gu.js",
"/ran/assets/src_ranuts_utils_convertImageToBase64.md.oC6dQz3N.lean.js",
"/ran/assets/cn_src_types_高级类型.md.CEmcTgNw.lean.js",
"/ran/assets/适配器.C2VH4lXy.png",
"/ran/assets/src_article_typescript_recursion.md.DEveDbCu.js",
"/ran/assets/cn_src_ranui_progress_index.md.CxP9d1nN.lean.js",
"/ran/assets/export.ne8l5ppO.jpeg",
"/ran/assets/src_article_sort_quick_index.md.CgmSxGlt.js",
"/ran/assets/cn_src_ranuts_index.md.BIAHyknB.js",
"/ran/assets/cn_src_ranui_progress_index.md.CxP9d1nN.js",
"/ran/assets/src_ranuts_mimeType_mimeType.md.D1Anyrl4.lean.js",
"/ran/assets/cn_src_article_sort_count_index.md.BMRgxcSw.lean.js",
"/ran/assets/merge.Bguw-KQu.gif",
"/ran/assets/src_article_javascript_domLoad.md.D16-jBwo.lean.js",
"/ran/assets/cn_src_article_sort_bubble_index.md.BbWj8AHI.js",
"/ran/assets/src_types_高级类型.md.BMvt_ZkC.js",
"/ran/assets/cn_src_article_bundle.md.BxqDDMOX.lean.js",
"/ran/assets/cn_src_ranui_checkbox_index.md.BvI-BJIX.js",
"/ran/assets/cn_src_ranui_player_index.md.B8G4ZmNQ.js",
"/ran/assets/index.md.BXVCfiRg.js",
"/ran/assets/src_article_designMode.md.DqE3DVvj.lean.js",
"/ran/assets/cn_src_ranuts_file_readDir.md.DbpYyY07.lean.js",
"/ran/assets/src_article_designMode.md.DqE3DVvj.js",
"/ran/assets/src_ranui_tabs_index.md.nuhJhUZZ.lean.js",
"/ran/assets/src_ranuts_bundler_index.md.Cb4-zv_J.js",
"/ran/assets/cn_src_ranuts_utils_getCookie.md.CI8E2ExS.lean.js",
"/ran/assets/src_article_sort_shell_index.md.CFrBOy3c.js",
"/ran/assets/cn_src_ranuts_bundler_index.md.BXywAVY7.js",
"/ran/assets/Identifier.lJSxyFTe.jpeg",
"/ran/assets/src_ranuts_file_watchFile.md.BNkbksn0.lean.js",
"/ran/assets/src_ranui_select_index.md.BRzQjwh-.js",
"/ran/assets/select.B8GwndZy.gif",
"/ran/assets/src_ranui_modal_index.md.DzF9CRg7.js",
"/ran/assets/src_ranuts_mode_subscribe.md.BuokCZ-n.js",
"/ran/assets/cn_src_ranui_button_index.md.BfpbLj45.lean.js",
"/ran/assets/cn_index.md.DzB0mQ3G.js",
"/ran/assets/cn_src_ranui_image_index.md.By2PoKqM.lean.js",
"/ran/assets/cn_src_ranuts_file_appendFile.md.XmxqQXRi.lean.js",
"/ran/assets/cn_src_types_TS类型.md.BwhF-10f.lean.js",
"/ran/assets/cn_src_ranuts_file_readFile.md.Dp-4Viwj.lean.js",
"/ran/assets/继承.Dta6_xdc.png",
"/ran/assets/cn_src_article_typescript_pattern.md.NFp3SHqL.js",
"/ran/assets/inter-italic-vietnamese.DHNAd7Wr.woff2",
"/ran/assets/src_ranui_checkbox_index.md.KfcFTjVr.lean.js",
"/ran/assets/src_ranuts_file_readDir.md.BNKAYM4M.lean.js",
"/ran/assets/src_ranui_index.md.BjXvhiOT.lean.js",
"/ran/assets/src_ranuts_binaryTree_index.md.C7o0r6hs.lean.js",
"/ran/assets/cn_src_article_sort_bucket_index.md.DtsxlQwh.js",
"/ran/assets/src_ranuts_utils_filterObj.md.BsAQhe11.js",
"/ran/assets/src_ranui_radar_index.md.JzC72lKL.lean.js",
"/ran/assets/访问者.aEI4m-5a.png",
"/ran/assets/shell.CZ-z1IVg.gif",
"/ran/assets/src_article_imagemin.md.DmMkEcc6.js",
"/ran/assets/src_ranuts_utils_task.md.f2ek6IHN.lean.js",
"/ran/assets/cn_src_ranuts_utils_convertImageToBase64.md.B3lllCyE.lean.js",
"/ran/assets/import.BTsVI5Tc.jpeg",
"/ran/assets/cn_src_ranui_button_index.md.BfpbLj45.js",
"/ran/assets/src_ranui_message_index.md.C772Od4e.js",
"/ran/assets/cn_src_article_sort_bucket_index.md.DtsxlQwh.lean.js",
"/ran/assets/src_ranui_button_index.md.aXzoSfYd.js",
"/ran/assets/cn_src_ranuts_mimeType_mimeType.md._x5PkE4X.js",
"/ran/assets/cn_src_types_类型运算.md.ZB6pmHNr.lean.js",
"/ran/assets/src_article_sort_select_index.md.COKa7lE7.js",
"/ran/assets/src_ranuts_file_readDir.md.BNKAYM4M.js",
"/ran/assets/src_ranui_image_index.md.D2PQtevX.js",
"/ran/assets/装饰.CuuWN9YK.jpg",
"/ran/assets/customElements.DbqgaaNb.png",
"/ran/assets/cn_src_ranui_select_index.md.AnPyeYWw.lean.js",
"/ran/assets/cn_src_ranuts_index.md.BIAHyknB.lean.js",
"/ran/assets/src_article_typescript_index.md.BgBN2xsh.js",
"/ran/assets/src_article_functionalProgramming.md.g2AJyg-M.js",
"/ran/assets/Declaration.CplvpFd-.jpeg",
"/ran/assets/src_ranui_preview_index.md.C0WVcHyr.js",
"/ran/assets/src_ranui_icon_index.md.BCPHaDPr.js",
"/ran/assets/cn_src_article_sort_merge_index.md.dg4OFmck.js",
"/ran/assets/src_article_sort_bucket_index.md.CJmXaQVz.js",
"/ran/assets/cn_src_article_typescript_recursion.md.dI9HcV1P.lean.js",
"/ran/assets/src_ranuts_utils_str2xml.md.BPuzsaPr.lean.js",
"/ran/assets/radix.Bwrylu8F.gif",
"/ran/assets/src_article_babel.md.Bt5SQLGu.lean.js",
"/ran/assets/cn_src_ranuts_bundler_index.md.BXywAVY7.lean.js",
"/ran/assets/cn_src_article_babel.md.B_kU4idG.js",
"/ran/assets/cn_src_article_typescript_calculate.md.BVbWp3J7.lean.js",
"/ran/assets/src_article_astParse_tokenizer.md.BDMCWvF5.lean.js",
"/ran/assets/insert.gf3GhDvq.gif",
"/ran/assets/inter-roman-greek-ext.D0mI3NpI.woff2",
"/ran/assets/app.CtZG3lYV.js",
"/ran/assets/cn_src_ranui_image_index.md.By2PoKqM.js",
"/ran/assets/单例.B4dKFqxx.jpg",
"/ran/assets/cn_src_article_imagemin.md.C5Uw5WUc.js",
"/ran/assets/cn_src_article_typescript_index.md.CAhQBWXw.lean.js",
"/ran/assets/cn_src_types_模式匹配.md.DlCHAXXV.lean.js",
"/ran/assets/src_ranuts_file_appendFile.md.sSU2yGhk.js",
"/ran/assets/src_article_sort_bucket_index.md.CJmXaQVz.lean.js",
"/ran/assets/src_ranuts_file_watchFile.md.BNkbksn0.js",
"/ran/assets/Expression.DczLaznn.jpeg",
"/ran/assets/src_ranui_input_index.md.BowELL0n.js",
"/ran/assets/cn_src_ranui_preview_index.md.DpK0lOwX.js",
"/ran/assets/src_ranui_tab_index.md.DPT_lCTL.js",
"/ran/assets/cn_src_article_javascript_domLoad.md.BA6uiTQH.lean.js",
"/ran/assets/cn_src_ranui_message_index.md.DuX046TJ.js",
"/ran/assets/src_article_sort_shell_index.md.CFrBOy3c.lean.js",
"/ran/assets/src_article_sort_heap_index.md.BYv_AVdl.js",
"/ran/assets/cn_src_ranui_modal_index.md.Defgnagq.js",
"/ran/assets/bundle.bky0NmdF.png",
"/ran/assets/cn_src_article_designMode.md.GAxEH3v3.js",
"/ran/assets/cn_src_ranuts_utils_formatJson.md.BZzGgZfA.js",
"/ran/assets/cn_src_article_typescript_reconstruction.md.DJrweAMO.lean.js",
"/ran/assets/src_article_sort_select_index.md.COKa7lE7.lean.js",
"/ran/assets/cn_src_ranui_popover_index.md.Cx_yK-M7.lean.js",
"/ran/assets/chunks/lock-Cr7BnmWN.0WfYXC2j.js",
"/ran/assets/chunks/preview-CJbz9GjO.C8N16-9H.js",
"/ran/assets/chunks/docx-ajDUtnbM.p4g6Uing.js",
"/ran/assets/chunks/message-D36_Zo2l.CR8K3LhI.js",
"/ran/assets/chunks/home-BUQ4USMk.BqTharGj.js",
"/ran/assets/chunks/power-off-lQRbiBak.r13EH4bb.js",
"/ran/assets/chunks/colz-CRDozfZA.DvkPXySn.js",
"/ran/assets/chunks/eye-D_mEt17f.DJFa_ttF.js",
"/ran/assets/chunks/check-circle-szyAJiap.CM_vbBX5.js",
"/ran/assets/chunks/merge.D_M4N_iU.js",
"/ran/assets/chunks/warning-circle-DDUgEDIv.1BX6MOiy.js",
"/ran/assets/chunks/commonjs-dynamic-modules-DLbDWi6a.CRNIONdy.js",
"/ran/assets/chunks/close-circle-CwmuN2C6.D612j4KD.js",
"/ran/assets/chunks/quick.WcLzRUPH.js",
"/ran/assets/chunks/theme.D2mlXx_T.js",
"/ran/assets/chunks/jszip.min-Ca6PjkYs.DD0071KX.js",
"/ran/assets/chunks/input-input.MnARRJC6.js",
"/ran/assets/chunks/info-circle-COnL5bTJ.B9YJorcw.js",
"/ran/assets/chunks/eye-close-BVr3NJtg.DsdsDDgX.js",
"/ran/assets/chunks/radix.CHOmrmB0.js",
"/ran/assets/chunks/unlock-CeU74z9n.58atcEuH.js",
"/ran/assets/chunks/close-circle-fill-jSqPPw9i.BsLXh5-a.js",
"/ran/assets/chunks/shell.CGEkKxrp.js",
"/ran/assets/chunks/complexity.CSkvDr7k.js",
"/ran/assets/chunks/framework.A_XI1Ui1.js",
"/ran/assets/chunks/bundle.BxrzsuA1.js",
"/ran/assets/chunks/sprite-CH2zLtZy.Djo3sTkk.js",
"/ran/assets/chunks/check-circle-fill-B_pd8ZSs.Dxgzakn4.js",
"/ran/assets/chunks/pdf-B2a6ll8f.Bo4LdAXC.js",
"/ran/assets/chunks/team-tl4NJXPC.D7881a1v.js",
"/ran/assets/chunks/close-CFnkhudp.IMqD2L1-.js",
"/ran/assets/chunks/select.BGReufCV.js",
"/ran/assets/chunks/heap.xduQWyUN.js",
"/ran/assets/chunks/user-B-eVXwuk.DyoYYAjs.js",
"/ran/assets/chunks/warning-circle-fill-lODUKz0i.7RyGfSeR.js",
"/ran/assets/chunks/balanceTree.CCEoBiag.js",
"/ran/assets/chunks/insert.Bde3uDH4.js",
"/ran/assets/chunks/loading-Dcc5RApI.D3l74EUI.js",
"/ran/assets/chunks/index.Bvl17X1f.js",
"/ran/assets/chunks/bubble.Dg5jgvyl.js",
"/ran/assets/chunks/count.CcfK-WL7.js",
"/ran/assets/chunks/extra.Cu56q3CZ.js",
"/ran/assets/chunks/add-user-BN1JlY7e.D6YNNzf8.js",
"/ran/assets/chunks/访问者._0swtoJg.js",
"/ran/assets/chunks/index-ByJ7zZdQ.CMmFglM8.js",
"/ran/assets/chunks/book-nTEFXU2x.DPEdiL1I.js",
"/ran/assets/chunks/info-circle-fill-CFeVMdci.CUxFtRNn.js",
"/ran/assets/chunks/customElements.qitHOM3M.js",
"/ran/assets/chunks/setting-DemlgzVC.DkD4YPwp.js",
"/ran/assets/chunks/index-CZlEoE62.DjYDx5Id.js",
"/ran/assets/balanceTree.DP_9yIkO.png",
"/ran/assets/src_types_模式匹配.md.9wz-0dcf.js",
"/ran/assets/cn_src_ranui_skeleton_index.md.CCVP4zCH.js",
"/ran/assets/cn_src_ranuts_file_appendFile.md.XmxqQXRi.js",
"/ran/assets/cn_src_article_typescript_unionType.md.AfQtKLju.js",
"/ran/assets/src_article_typescript_recursion.md.DEveDbCu.lean.js",
"/ran/assets/cn_src_article_functionalProgramming.md.CPIx0c_V.js",
"/ran/assets/axtexplorerSave.a5hTrvd2.jpeg",
"/ran/assets/cn_src_ranui_index.md.RPTVkaIp.lean.js",
"/ran/assets/src_types_类型运算.md.C3if_b8a.js",
"/ran/assets/input-input.1X1aE5oH.jpg",
"/ran/assets/cn_src_ranui_input_index.md.BsgdZ0JN.lean.js",
"/ran/assets/inter-roman-cyrillic.CMhn1ESj.woff2",
"/ran/assets/src_ranuts_index.md.hrRQQLai.js",
"/ran/assets/cn_src_ranuts_file_writeFile.md.DelkJ-mI.js",
"/ran/assets/cn_src_ranui_tabs_index.md.fjcLg3dc.js",
"/ran/assets/src_ranui_checkbox_index.md.KfcFTjVr.js",
"/ran/assets/cn_src_types_类型运算.md.ZB6pmHNr.js",
"/ran/assets/src_article_typescript_pattern.md.DumFodLG.lean.js",
"/ran/assets/享元.EIifVVTy.png",
"/ran/assets/src_ranuts_binaryTree_index.md.C7o0r6hs.js",
"/ran/assets/bubble.Csp5B4TH.gif",
"/ran/assets/cn_src_ranui_select_index.md.AnPyeYWw.js",
"/ran/assets/cn_src_article_sort_shell_index.md.Bobabm1F.lean.js",
"/ran/assets/src_article_sort_merge_index.md.BwOsaf0P.js",
"/ran/assets/状态.Bt_a2OKX.png",
"/ran/assets/cn_src_article_sort_select_index.md.Bi-qLbG1.lean.js",
"/ran/assets/备忘录.meL0YZxn.jpg",
"/ran/assets/src_ranuts_file_fileInfo.md.jZnZnH8G.lean.js",
"/ran/assets/cn_src_ranui_checkbox_index.md.BvI-BJIX.lean.js",
"/ran/assets/cn_src_ranuts_utils_str2xml.md.hUO_woY-.lean.js",
"/ran/assets/src_ranuts_utils_formatJson.md.BqQG6ygw.js",
"/ran/assets/src_article_sort_bubble_index.md.Cjb089od.lean.js",
"/ran/assets/src_ranuts_utils_getCookie.md.DxgXdlgI.js",
"/ran/assets/src_ranuts_mode_subscribe.md.BuokCZ-n.lean.js",
"/ran/assets/cn_src_ranui_tab_index.md.BNz9xPdK.lean.js",
"/ran/assets/complexity.DSLVsjHt.png",
"/ran/assets/src_article_sort_count_index.md.DeYjf54V.js",
"/ran/assets/src_ranuts_file_appendFile.md.sSU2yGhk.lean.js",
"/ran/assets/axtexplorer.D7PG-3cx.jpeg",
"/ran/assets/src_article_sort_insert_index.md.DUolhM5t.lean.js",
"/ran/assets/cn_src_article_sort_heap_index.md.95tBqFzT.lean.js",
"/ran/assets/src_ranuts_file_writeFile.md.Az-ztGNa.lean.js",
"/ran/assets/cn_src_types_TS类型.md.BwhF-10f.js",
"/ran/assets/组合.StqZ1pDc.png",
"/ran/assets/src_article_typescript_unionType.md.DvMXY5Pu.js",
"/ran/assets/策略.BAijEgGz.png",
"/ran/assets/cn_src_article_typescript_reconstruction.md.DJrweAMO.js",
"/ran/assets/src_types_TS类型.md.CGxIIMBE.js",
"/ran/assets/src_article_bundle.md.DeW8CjuV.lean.js",
"/ran/assets/cn_src_ranuts_mode_subscribe.md.aGhzWQXn.js",
"/ran/assets/src_ranui_progress_index.md.ZB6VejXM.js",
"/ran/assets/style.CtNi5NRP.css",
"/ran/assets/inter-roman-latin-ext.ZlYT4o7i.woff2",
"/ran/assets/src_article_sort_count_index.md.DeYjf54V.lean.js",
"/ran/assets/inter-roman-greek.JvnBZ4YD.woff2",
"/ran/assets/cn_src_article_sort_insert_index.md.DLcsgnIK.lean.js",
"/ran/assets/src_article_sort_bubble_index.md.Cjb089od.js",
"/ran/assets/cn_src_ranuts_file_watchFile.md.REC4w5YH.lean.js",
"/ran/assets/src_article_sort_quick_index.md.CgmSxGlt.lean.js",
"/ran/assets/外观.Cm0-J0eF.png",
"/ran/assets/cn_src_article_typescript_index.md.CAhQBWXw.js",
"/ran/assets/cn_src_ranuts_utils_formatJson.md.BZzGgZfA.lean.js",
"/ran/assets/抽象工厂.DlwNEriZ.png",
"/ran/assets/src_ranuts_utils_formatJson.md.BqQG6ygw.lean.js",
"/ran/assets/cn_src_ranui_icon_index.md.D_LjIXSl.lean.js",
"/ran/assets/cn_src_article_designMode.md.GAxEH3v3.lean.js",
"/ran/assets/src_ranui_image_index.md.D2PQtevX.lean.js",
"/ran/assets/Comment.BYtNY-L1.jpeg",
"/ran/assets/sort.CSVZS1AV.png",
"/ran/assets/src_ranuts_utils_filterObj.md.BsAQhe11.lean.js",
"/ran/assets/cn_src_article_functionalProgramming.md.CPIx0c_V.lean.js",
"/ran/assets/src_article_typescript_pattern.md.DumFodLG.js",
"/ran/assets/cn_src_article_sort_quick_index.md.BWWd8ay2.lean.js",
"/ran/assets/cn_src_article_sort_count_index.md.BMRgxcSw.js",
"/ran/assets/cn_src_ranuts_utils_filterObj.md.CSJftAUL.lean.js",
"/ran/assets/解释器.DymUKGTa.jpg",
"/ran/assets/cn_src_ranuts_utils_task.md.Dvop1Zi0.js",
"/ran/assets/src_ranui_skeleton_index.md.G8HiQn4o.js",
"/ran/assets/cn_src_article_sort_radix_index.md._Nij2pnS.lean.js",
"/ran/assets/src_ranuts_utils_getCookie.md.DxgXdlgI.lean.js",
"/ran/assets/src_ranuts_index.md.hrRQQLai.lean.js",
"/ran/assets/cn_src_ranuts_file_fileInfo.md.CKg8s5gg.js",
"/ran/assets/src_article_javascript_domLoad.md.D16-jBwo.js",
"/ran/assets/cn_src_ranui_message_index.md.DuX046TJ.lean.js",
"/ran/assets/src_ranui_progress_index.md.ZB6VejXM.lean.js",
"/ran/assets/cn_src_ranuts_binaryTree_index.md.DVZyM1SN.lean.js",
"/ran/assets/cn_src_ranui_tab_index.md.BNz9xPdK.js",
"/ran/assets/inter-italic-latin.DbsTr1gm.woff2",
"/ran/assets/Class.Cx5QD1OX.jpeg",
"/ran/assets/cn_src_ranuts_mimeType_mimeType.md._x5PkE4X.lean.js",
"/ran/assets/cn_src_ranui_tabs_index.md.fjcLg3dc.lean.js",
"/ran/assets/cn_src_ranuts_mode_subscribe.md.aGhzWQXn.lean.js",
"/ran/assets/src_article_typescript_unionType.md.DvMXY5Pu.lean.js",
"/ran/assets/src_article_imagemin.md.DmMkEcc6.lean.js",
"/ran/assets/src_ranuts_utils_ocr.md.RtKbcYWN.js",
"/ran/assets/cn_src_ranuts_file_writeFile.md.DelkJ-mI.lean.js",
"/ran/assets/cn_src_ranuts_binaryTree_index.md.DVZyM1SN.js",
"/ran/assets/ExpressionStatement.zaIHlhIF.jpeg",
"/ran/assets/src_ranui_button_index.md.aXzoSfYd.lean.js",
"/ran/assets/inter-roman-cyrillic-ext.DxP3Awbn.woff2",
"/ran/assets/cn_src_ranui_icon_index.md.D_LjIXSl.js",
"/ran/assets/cn_src_article_bundle.md.BxqDDMOX.js",
"/ran/assets/原型.DYbH0CSA.jpg",
"/ran/assets/cn_src_article_sort_heap_index.md.95tBqFzT.js",
"/ran/assets/桥接.DX0mO5JC.png",
"/ran/assets/cn_src_ranui_radar_index.md.BicV7u2F.lean.js",
"/ran/assets/inter-italic-greek-ext.CHOfFY1k.woff2",
"/ran/assets/count.CWSWBe_h.gif",
"/ran/assets/inter-roman-vietnamese.ClpjcLMQ.woff2",
"/ran/assets/src_ranui_popover_index.md.BZOcRJuF.lean.js",
"/ran/assets/src_article_astParse_tokenizer.md.BDMCWvF5.js",
"/ran/assets/src_article_sort_index.md.D5bXfny8.js",
"/ran/assets/src_types_模式匹配.md.9wz-0dcf.lean.js",
"/ran/assets/inter-italic-cyrillic-ext.5XJwZIOp.woff2",
"/ran/assets/cn_src_ranuts_utils_str2xml.md.hUO_woY-.js",
"/ran/assets/src_article_babel.md.Bt5SQLGu.js",
"/ran/assets/cn_src_article_imagemin.md.C5Uw5WUc.lean.js",
"/ran/assets/cn_src_ranui_preview_index.md.DpK0lOwX.lean.js",
"/ran/assets/建造者.B6neb_7R.jpeg",
"/ran/assets/src_ranuts_utils_convertImageToBase64.md.oC6dQz3N.js",
"/ran/assets/src_types_TS类型.md.CGxIIMBE.lean.js",
"/ran/assets/src_ranui_index.md.BjXvhiOT.js",
"/ran/screenshots_748x1340.jpg",
"/ran/home.svg",
"/ran/icon_144.png",
"/ran/screenshots_2560x1440.jpg",
"/ran/favicon.ico",
"/ran/manifest.json",
"/ran/cn/index.html",
"/ran/cn/src/types/TS类型.html",
"/ran/cn/src/types/高级类型.html",
"/ran/cn/src/types/类型运算.html",
"/ran/cn/src/types/模式匹配.html",
"/ran/cn/src/ranui/image/index.html",
"/ran/cn/src/ranui/index.html",
"/ran/cn/src/ranui/progress/index.html",
"/ran/cn/src/ranui/checkbox/index.html",
"/ran/cn/src/ranui/preview/index.html",
"/ran/cn/src/ranui/input/index.html",
"/ran/cn/src/ranui/radar/index.html",
"/ran/cn/src/ranui/modal/index.html",
"/ran/cn/src/ranui/icon/index.html",
"/ran/cn/src/ranui/popover/index.html",
"/ran/cn/src/ranui/message/index.html",
"/ran/cn/src/ranui/select/index.html",
"/ran/cn/src/ranui/tab/index.html",
"/ran/cn/src/ranui/skeleton/index.html",
"/ran/cn/src/ranui/player/index.html",
"/ran/cn/src/ranui/tabs/index.html",
"/ran/cn/src/ranui/button/index.html",
"/ran/cn/src/article/sort/index.html",
"/ran/cn/src/article/sort/merge/index.html",
"/ran/cn/src/article/sort/count/index.html",
"/ran/cn/src/article/sort/radix/index.html",
"/ran/cn/src/article/sort/bubble/index.html",
"/ran/cn/src/article/sort/insert/index.html",
"/ran/cn/src/article/sort/quick/index.html",
"/ran/cn/src/article/sort/select/index.html",
"/ran/cn/src/article/sort/shell/index.html",
"/ran/cn/src/article/sort/heap/index.html",
"/ran/cn/src/article/sort/bucket/index.html",
"/ran/cn/src/article/astParse/tokenizer.html",
"/ran/cn/src/article/designMode.html",
"/ran/cn/src/article/functionalProgramming.html",
"/ran/cn/src/article/babel.html",
"/ran/cn/src/article/typescript/index.html",
"/ran/cn/src/article/typescript/reconstruction.html",
"/ran/cn/src/article/typescript/calculate.html",
"/ran/cn/src/article/typescript/recursion.html",
"/ran/cn/src/article/typescript/pattern.html",
"/ran/cn/src/article/typescript/unionType.html",
"/ran/cn/src/article/imagemin.html",
"/ran/cn/src/article/javascript/domLoad.html",
"/ran/cn/src/article/bundle.html",
"/ran/cn/src/ranuts/index.html",
"/ran/cn/src/ranuts/mimeType/mimeType.html",
"/ran/cn/src/ranuts/mode/subscribe.html",
"/ran/cn/src/ranuts/binaryTree/index.html",
"/ran/cn/src/ranuts/file/watchFile.html",
"/ran/cn/src/ranuts/file/fileInfo.html",
"/ran/cn/src/ranuts/file/readDir.html",
"/ran/cn/src/ranuts/file/appendFile.html",
"/ran/cn/src/ranuts/file/readFile.html",
"/ran/cn/src/ranuts/file/writeFile.html",
"/ran/cn/src/ranuts/utils/str2xml.html",
"/ran/cn/src/ranuts/utils/filterObj.html",
"/ran/cn/src/ranuts/utils/task.html",
"/ran/cn/src/ranuts/utils/convertImageToBase64.html",
"/ran/cn/src/ranuts/utils/formatJson.html",
"/ran/cn/src/ranuts/utils/ocr.html",
"/ran/cn/src/ranuts/utils/getCookie.html",
"/ran/cn/src/ranuts/bundler/index.html",
"/ran/icon.png",
"/ran/icon_72.png",
"/ran/sw.js",
"/ran/icon_168.png",
"/ran/hashmap.json",
];
const VERSION = "1711706815";
const CACHE_NAME = 'chaxus_ran_' + VERSION

/**
 * @description: 更新缓存
 * @param {*} fetchedResponse
 * @param {*} request
 * @return {*}
 */
const updateCache = (fetchedResponse, request) => {
    const { url, method } = request
    const ignoreRequest = [
        // google 上报不需要缓存
        'google',
        // 插件请求不用缓存
        'chrome-extension',
        // 百度的请求不用缓存
        'baidu.com'
    ]
    // 只缓存 get 请求
    if (!ignoreRequest.some(item => url.includes(item)) && method === 'GET') {
        caches.open(CACHE_NAME).then(cache => {
            // 将请求到的资源添加到缓存中
            // 判断下只有 fetch 的请求才有 clone 方法，才可以被缓存，从 cache 中获取的响应没有 clone
            if (fetchedResponse?.clone) {
                cache.put(url, fetchedResponse.clone());
            }
        }).catch(error => {
            console.log('service work update cache error:', error, request)
        })
    }
}

/** 
 * 缓存优先
 * @param {*} request 
 * @returns 
 */
const cacheFirst = async (request) => {
    // 从缓存中读取 respondWith 表示拦截请求并返回自定义的响应
    try {
        const responseFromCache = await caches.match(request);
        // 如果缓存中有，依然去请求，异步更新缓存资源，同步返回已经缓存的资源
        if (responseFromCache) {
            fetch(request).then(fetchedResponse => {
                updateCache(fetchedResponse, request)
            }).catch(error => {
                console.log('cache first fetch error:', error);
            })
            return responseFromCache
        }
        // 如果缓存中没有，就从网络中请求
        const responseFromServer = await fetch(request);
        updateCache(responseFromServer, request)
        return responseFromServer
    } catch (error) {
        console.log('cacheFirst', error)
    }
}


const deleteCache = async (key) => {
    try {
        await caches.delete(key);
    } catch (error) {
        console.log('deleteCache', error)
    }
};

const deleteOldCaches = async () => {
    const cacheKeepList = [CACHE_NAME];
    try {
        const keyList = await caches.keys();
        const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
        await Promise.all(cachesToDelete.map(deleteCache));
    } catch (error) {
        console.log('deleteOldCaches', deleteOldCaches)
    }

};

this.addEventListener('install', function (event) {
    // 确保 Service Worker 不会在 waitUntil() 里面的代码执行完毕之前安装完成
    event.waitUntil(
        // 创建了叫做 chaxus_ran 的新缓存
        caches.open(CACHE_NAME).then(function (cache) {
            // SERVICE_WORK_CACHE_FILE_PATHS 从 bin/build.sh 中生成注入，会去缓存所有的资源
            // 不用 cache.addAll 避免一个请求失败，全部缓存失败
            // 可以使用 cache.add 
            return SERVICE_WORK_CACHE_FILE_PATHS.map(url =>
                fetch(url).then(response => {
                    // 检查响应是否成功  
                    if (!response.ok) {
                        console.log('service work fetch response error:', url)
                    }
                    // 将响应添加到缓存  
                    return cache.put(url, response);
                }).catch(error => {
                    console.log('service work fetch error:', url, error);
                })
            )
        })
    );
});

this.addEventListener("fetch", (event) => {
    // 拦截请求
    try {
        const responseFromServer = cacheFirst(event.request)
        if (responseFromServer?.clone) {
            event.respondWith(responseFromServer);
        }
    } catch (error) {
        console.log('service work self fetch error:', error, event)
    }
});

this.addEventListener("activate", (event) => {
    event.waitUntil(deleteOldCaches());
});



