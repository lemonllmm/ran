const SERVICE_WORK_CACHE_FILE_PATHS = [
"/ran/cn/index.html",
"/ran/cn/src/ranuts/mimeType/mimeType.html",
"/ran/cn/src/ranuts/binaryTree/index.html",
"/ran/cn/src/ranuts/mode/subscribe.html",
"/ran/cn/src/ranuts/utils/filterObj.html",
"/ran/cn/src/ranuts/utils/ocr.html",
"/ran/cn/src/ranuts/utils/formatJson.html",
"/ran/cn/src/ranuts/utils/convertImageToBase64.html",
"/ran/cn/src/ranuts/utils/task.html",
"/ran/cn/src/ranuts/utils/getCookie.html",
"/ran/cn/src/ranuts/utils/str2xml.html",
"/ran/cn/src/ranuts/bundler/index.html",
"/ran/cn/src/ranuts/index.html",
"/ran/cn/src/ranuts/file/readFile.html",
"/ran/cn/src/ranuts/file/fileInfo.html",
"/ran/cn/src/ranuts/file/appendFile.html",
"/ran/cn/src/ranuts/file/watchFile.html",
"/ran/cn/src/ranuts/file/writeFile.html",
"/ran/cn/src/ranuts/file/readDir.html",
"/ran/cn/src/types/高级类型.html",
"/ran/cn/src/types/TS类型.html",
"/ran/cn/src/types/类型运算.html",
"/ran/cn/src/types/模式匹配.html",
"/ran/cn/src/ranui/input/index.html",
"/ran/cn/src/ranui/popover/index.html",
"/ran/cn/src/ranui/checkbox/index.html",
"/ran/cn/src/ranui/loading/index.html",
"/ran/cn/src/ranui/tab/index.html",
"/ran/cn/src/ranui/image/index.html",
"/ran/cn/src/ranui/message/index.html",
"/ran/cn/src/ranui/select/index.html",
"/ran/cn/src/ranui/index.html",
"/ran/cn/src/ranui/button/index.html",
"/ran/cn/src/ranui/icon/index.html",
"/ran/cn/src/ranui/skeleton/index.html",
"/ran/cn/src/ranui/tabs/index.html",
"/ran/cn/src/ranui/progress/index.html",
"/ran/cn/src/ranui/modal/index.html",
"/ran/cn/src/ranui/radar/index.html",
"/ran/cn/src/ranui/player/index.html",
"/ran/cn/src/ranui/preview/index.html",
"/ran/cn/src/article/imagemin.html",
"/ran/cn/src/article/designMode.html",
"/ran/cn/src/article/babel.html",
"/ran/cn/src/article/astParse/tokenizer.html",
"/ran/cn/src/article/javascript/domLoad.html",
"/ran/cn/src/article/bundle.html",
"/ran/cn/src/article/typescript/calculate.html",
"/ran/cn/src/article/typescript/recursion.html",
"/ran/cn/src/article/typescript/reconstruction.html",
"/ran/cn/src/article/typescript/index.html",
"/ran/cn/src/article/typescript/unionType.html",
"/ran/cn/src/article/typescript/pattern.html",
"/ran/cn/src/article/sort/count/index.html",
"/ran/cn/src/article/sort/bubble/index.html",
"/ran/cn/src/article/sort/radix/index.html",
"/ran/cn/src/article/sort/bucket/index.html",
"/ran/cn/src/article/sort/select/index.html",
"/ran/cn/src/article/sort/insert/index.html",
"/ran/cn/src/article/sort/index.html",
"/ran/cn/src/article/sort/shell/index.html",
"/ran/cn/src/article/sort/merge/index.html",
"/ran/cn/src/article/sort/quick/index.html",
"/ran/cn/src/article/sort/heap/index.html",
"/ran/cn/src/article/functionalProgramming.html",
"/ran/404.html",
"/ran/hls/5_1701577744714/5.m3u8",
"/ran/hls/5_1701577744714/5_00004.ts",
"/ran/hls/5_1701577744714/5_00003.ts",
"/ran/hls/5_1701577744714/5_00006.ts",
"/ran/hls/5_1701577744714/5_00000.ts",
"/ran/hls/5_1701577744714/5_00005.ts",
"/ran/hls/5_1701577744714/5.key",
"/ran/hls/5_1701577744714/5_00002.ts",
"/ran/hls/5_1701577744714/5_00001.ts",
"/ran/hls/5_1701577771368/5.m3u8",
"/ran/hls/5_1701577771368/5_00004.ts",
"/ran/hls/5_1701577771368/5_00003.ts",
"/ran/hls/5_1701577771368/5_00006.ts",
"/ran/hls/5_1701577771368/5_00000.ts",
"/ran/hls/5_1701577771368/5_00005.ts",
"/ran/hls/5_1701577771368/5.key",
"/ran/hls/5_1701577771368/5_00002.ts",
"/ran/hls/5_1701577771368/5_00001.ts",
"/ran/hls/example.m3u8",
"/ran/icon_96.png",
"/ran/manifest.json",
"/ran/icon_48.png",
"/ran/screenshots_2560x1440.jpg",
"/ran/favicon.ico",
"/ran/icon_72.png",
"/ran/icon_144.png",
"/ran/sw1718524833.js",
"/ran/index.html",
"/ran/screenshots_748x1340.jpg",
"/ran/ocr/chi_sim.png",
"/ran/ocr/eng.png",
"/ran/pagefind/pagefind-ui.js",
"/ran/pagefind/wasm.unknown.pagefind",
"/ran/pagefind/fragment/zh-cn_549f216.pf_fragment",
"/ran/pagefind/fragment/zh-cn_c4277cd.pf_fragment",
"/ran/pagefind/fragment/en_b24f7ef.pf_fragment",
"/ran/pagefind/fragment/zh-cn_d219c18.pf_fragment",
"/ran/pagefind/fragment/zh-cn_daef69b.pf_fragment",
"/ran/pagefind/fragment/en_6623363.pf_fragment",
"/ran/pagefind/fragment/zh-cn_f186863.pf_fragment",
"/ran/pagefind/fragment/en_5c725ae.pf_fragment",
"/ran/pagefind/fragment/zh-cn_4c180fb.pf_fragment",
"/ran/pagefind/fragment/en_7a4eb73.pf_fragment",
"/ran/pagefind/fragment/zh-cn_88e2f5c.pf_fragment",
"/ran/pagefind/fragment/zh-cn_2f08da6.pf_fragment",
"/ran/pagefind/fragment/zh-cn_3775faf.pf_fragment",
"/ran/pagefind/fragment/zh-cn_366c379.pf_fragment",
"/ran/pagefind/fragment/zh-cn_656a0e3.pf_fragment",
"/ran/pagefind/fragment/en_106ee7d.pf_fragment",
"/ran/pagefind/fragment/en_13157a1.pf_fragment",
"/ran/pagefind/fragment/en_b46590e.pf_fragment",
"/ran/pagefind/fragment/zh-cn_48435ad.pf_fragment",
"/ran/pagefind/fragment/en_6a66788.pf_fragment",
"/ran/pagefind/fragment/zh-cn_939c493.pf_fragment",
"/ran/pagefind/fragment/en_ab5b7c1.pf_fragment",
"/ran/pagefind/fragment/zh-cn_5194d6f.pf_fragment",
"/ran/pagefind/fragment/zh-cn_9b4ff84.pf_fragment",
"/ran/pagefind/fragment/en_e8f3a9e.pf_fragment",
"/ran/pagefind/fragment/en_30709d8.pf_fragment",
"/ran/pagefind/fragment/zh-cn_f983bac.pf_fragment",
"/ran/pagefind/fragment/zh-cn_9c8fd1c.pf_fragment",
"/ran/pagefind/fragment/en_12451bd.pf_fragment",
"/ran/pagefind/fragment/en_786dd1d.pf_fragment",
"/ran/pagefind/fragment/en_3df5c5f.pf_fragment",
"/ran/pagefind/fragment/en_a116508.pf_fragment",
"/ran/pagefind/fragment/en_75d1df3.pf_fragment",
"/ran/pagefind/fragment/zh-cn_b3f5111.pf_fragment",
"/ran/pagefind/fragment/en_bc653ea.pf_fragment",
"/ran/pagefind/fragment/en_b2b1326.pf_fragment",
"/ran/pagefind/fragment/en_45694f5.pf_fragment",
"/ran/pagefind/fragment/en_1fd6515.pf_fragment",
"/ran/pagefind/fragment/en_df9b444.pf_fragment",
"/ran/pagefind/fragment/zh-cn_43904cb.pf_fragment",
"/ran/pagefind/fragment/en_27a0b4a.pf_fragment",
"/ran/pagefind/fragment/zh-cn_7c1b50b.pf_fragment",
"/ran/pagefind/fragment/en_b5741b3.pf_fragment",
"/ran/pagefind/fragment/zh-cn_734282c.pf_fragment",
"/ran/pagefind/fragment/en_39ca4e7.pf_fragment",
"/ran/pagefind/fragment/zh-cn_c551e89.pf_fragment",
"/ran/pagefind/fragment/en_7118fbe.pf_fragment",
"/ran/pagefind/fragment/zh-cn_e1f4a79.pf_fragment",
"/ran/pagefind/fragment/en_738928a.pf_fragment",
"/ran/pagefind/fragment/zh-cn_b2546fd.pf_fragment",
"/ran/pagefind/fragment/zh-cn_976d864.pf_fragment",
"/ran/pagefind/fragment/zh-cn_eaf0e54.pf_fragment",
"/ran/pagefind/fragment/en_5094588.pf_fragment",
"/ran/pagefind/fragment/en_f5a1553.pf_fragment",
"/ran/pagefind/fragment/zh-cn_bad2bb4.pf_fragment",
"/ran/pagefind/fragment/zh-cn_5888cbb.pf_fragment",
"/ran/pagefind/fragment/zh-cn_18e65ec.pf_fragment",
"/ran/pagefind/fragment/zh-cn_eb8b47c.pf_fragment",
"/ran/pagefind/fragment/zh-cn_b528423.pf_fragment",
"/ran/pagefind/fragment/zh-cn_20acdfe.pf_fragment",
"/ran/pagefind/fragment/zh-cn_beea2f2.pf_fragment",
"/ran/pagefind/fragment/zh-cn_b6ea2e8.pf_fragment",
"/ran/pagefind/fragment/en_2d1fbc2.pf_fragment",
"/ran/pagefind/fragment/en_263135b.pf_fragment",
"/ran/pagefind/fragment/en_c2412d4.pf_fragment",
"/ran/pagefind/fragment/en_a3a3739.pf_fragment",
"/ran/pagefind/fragment/en_7755d1b.pf_fragment",
"/ran/pagefind/fragment/zh-cn_42963a4.pf_fragment",
"/ran/pagefind/fragment/en_63cffab.pf_fragment",
"/ran/pagefind/fragment/zh-cn_5f1dffb.pf_fragment",
"/ran/pagefind/fragment/en_5ff5133.pf_fragment",
"/ran/pagefind/fragment/zh-cn_2af2d9c.pf_fragment",
"/ran/pagefind/fragment/zh-cn_ed4e4b0.pf_fragment",
"/ran/pagefind/fragment/zh-cn_2c97ee2.pf_fragment",
"/ran/pagefind/fragment/en_a034a97.pf_fragment",
"/ran/pagefind/fragment/en_1f67d37.pf_fragment",
"/ran/pagefind/fragment/zh-cn_3825a1a.pf_fragment",
"/ran/pagefind/fragment/en_919ab78.pf_fragment",
"/ran/pagefind/fragment/zh-cn_e05d21d.pf_fragment",
"/ran/pagefind/fragment/zh-cn_8cf4d26.pf_fragment",
"/ran/pagefind/fragment/en_3bf4f84.pf_fragment",
"/ran/pagefind/fragment/zh-cn_97a46e6.pf_fragment",
"/ran/pagefind/fragment/en_91e701d.pf_fragment",
"/ran/pagefind/fragment/en_e2846bf.pf_fragment",
"/ran/pagefind/fragment/zh-cn_d86a2d3.pf_fragment",
"/ran/pagefind/fragment/zh-cn_cad67b8.pf_fragment",
"/ran/pagefind/fragment/en_229996f.pf_fragment",
"/ran/pagefind/fragment/en_3f75462.pf_fragment",
"/ran/pagefind/fragment/zh-cn_65d3893.pf_fragment",
"/ran/pagefind/fragment/en_1e31265.pf_fragment",
"/ran/pagefind/fragment/en_815cbc8.pf_fragment",
"/ran/pagefind/fragment/en_2771bf1.pf_fragment",
"/ran/pagefind/fragment/en_6a9915b.pf_fragment",
"/ran/pagefind/fragment/en_c2a5686.pf_fragment",
"/ran/pagefind/fragment/zh-cn_a6f04b7.pf_fragment",
"/ran/pagefind/fragment/en_38d8359.pf_fragment",
"/ran/pagefind/fragment/zh-cn_cbf0f26.pf_fragment",
"/ran/pagefind/fragment/en_7b5a911.pf_fragment",
"/ran/pagefind/fragment/zh-cn_ddfae39.pf_fragment",
"/ran/pagefind/fragment/zh-cn_5056dc5.pf_fragment",
"/ran/pagefind/fragment/en_c8893d7.pf_fragment",
"/ran/pagefind/fragment/en_3bfb6f7.pf_fragment",
"/ran/pagefind/fragment/en_65ccfe9.pf_fragment",
"/ran/pagefind/fragment/en_222d98b.pf_fragment",
"/ran/pagefind/fragment/zh-cn_c9a69c4.pf_fragment",
"/ran/pagefind/fragment/zh-cn_3d94e9d.pf_fragment",
"/ran/pagefind/fragment/en_fba3fcb.pf_fragment",
"/ran/pagefind/fragment/zh-cn_8a5ca0e.pf_fragment",
"/ran/pagefind/fragment/zh-cn_706591e.pf_fragment",
"/ran/pagefind/fragment/en_346b990.pf_fragment",
"/ran/pagefind/fragment/zh-cn_993b46b.pf_fragment",
"/ran/pagefind/fragment/en_dd6246f.pf_fragment",
"/ran/pagefind/fragment/zh-cn_92f9f77.pf_fragment",
"/ran/pagefind/fragment/zh-cn_8e7c3a8.pf_fragment",
"/ran/pagefind/fragment/zh-cn_fd3e42d.pf_fragment",
"/ran/pagefind/fragment/en_b110a5b.pf_fragment",
"/ran/pagefind/fragment/zh-cn_4a2aae7.pf_fragment",
"/ran/pagefind/fragment/en_5861ab4.pf_fragment",
"/ran/pagefind/fragment/en_55a7cf9.pf_fragment",
"/ran/pagefind/fragment/zh-cn_9dae632.pf_fragment",
"/ran/pagefind/fragment/zh-cn_592ddc8.pf_fragment",
"/ran/pagefind/fragment/en_27ced55.pf_fragment",
"/ran/pagefind/fragment/en_e34b39a.pf_fragment",
"/ran/pagefind/fragment/zh-cn_11911b3.pf_fragment",
"/ran/pagefind/fragment/en_5eef384.pf_fragment",
"/ran/pagefind/fragment/zh-cn_4e4f462.pf_fragment",
"/ran/pagefind/fragment/zh-cn_4560a64.pf_fragment",
"/ran/pagefind/fragment/en_ac97cd9.pf_fragment",
"/ran/pagefind/pagefind.js",
"/ran/pagefind/index/en_a5f290c.pf_index",
"/ran/pagefind/index/zh-cn_bbd3785.pf_index",
"/ran/pagefind/index/zh-cn_56e8f9b.pf_index",
"/ran/pagefind/index/en_8cf7197.pf_index",
"/ran/pagefind/index/zh-cn_ea4f908.pf_index",
"/ran/pagefind/index/en_ef88261.pf_index",
"/ran/pagefind/index/zh-cn_bff3193.pf_index",
"/ran/pagefind/pagefind-entry.json",
"/ran/pagefind/pagefind-modular-ui.js",
"/ran/pagefind/pagefind.zh-cn_555e162d89736.pf_meta",
"/ran/pagefind/pagefind-ui.css",
"/ran/pagefind/wasm.en.pagefind",
"/ran/pagefind/pagefind.en_fd31a4370d.pf_meta",
"/ran/pagefind/pagefind-modular-ui.css",
"/ran/pagefind/pagefind-highlight.js",
"/ran/assets/src_article_typescript_reconstruction.md.BoUsg-S_.js",
"/ran/assets/cn_src_article_bundle.md.Cgo-nRcf.lean.js",
"/ran/assets/src_article_babel.md.BNEZ1KlM.js",
"/ran/assets/cn_src_ranuts_bundler_index.md.DLj0qjdv.js",
"/ran/assets/cn_src_ranuts_mode_subscribe.md.BRf67vd0.js",
"/ran/assets/状态.Bt_a2OKX.png",
"/ran/assets/src_article_astParse_tokenizer.md.ByA2epWQ.lean.js",
"/ran/assets/cn_src_ranuts_utils_str2xml.md.DWZpPLV7.js",
"/ran/assets/src_types_类型运算.md.zQbVua6g.js",
"/ran/assets/备忘录.meL0YZxn.jpg",
"/ran/assets/src_ranuts_file_watchFile.md.CjDYYjae.js",
"/ran/assets/src_article_designMode.md.DiP6808x.lean.js",
"/ran/assets/radix.Bwrylu8F.gif",
"/ran/assets/src_article_typescript_pattern.md.BcZBI5Uz.lean.js",
"/ran/assets/cn_src_ranui_tab_index.md.cU2AiRdJ.js",
"/ran/assets/cn_src_ranuts_file_appendFile.md.Dk9r4qmK.js",
"/ran/assets/index.md.DYYUdeJ7.lean.js",
"/ran/assets/cn_src_article_typescript_index.md.Ct4H1OZ1.js",
"/ran/assets/src_article_designMode.md.DiP6808x.js",
"/ran/assets/axtexplorer.D7PG-3cx.jpeg",
"/ran/assets/cn_src_article_sort_bucket_index.md.By9mBD34.js",
"/ran/assets/src_ranui_index.md.CuR2omWw.lean.js",
"/ran/assets/cn_src_article_functionalProgramming.md.XzXplk1P.lean.js",
"/ran/assets/src_ranuts_utils_convertImageToBase64.md.B365qAhD.js",
"/ran/assets/src_ranuts_index.md.CLe4WJxC.lean.js",
"/ran/assets/src_ranuts_index.md.CLe4WJxC.js",
"/ran/assets/cn_src_article_sort_merge_index.md.DjsJ0h8I.js",
"/ran/assets/cn_src_ranui_checkbox_index.md.4g1_GkYr.js",
"/ran/assets/src_ranuts_utils_filterObj.md.BxU8jSG3.js",
"/ran/assets/src_ranuts_mimeType_mimeType.md.BzWb3D1A.js",
"/ran/assets/cn_src_ranuts_utils_str2xml.md.DWZpPLV7.lean.js",
"/ran/assets/cn_src_ranui_image_index.md.D118uGpB.js",
"/ran/assets/input-input.1X1aE5oH.jpg",
"/ran/assets/src_ranui_tab_index.md.BvqNkHAk.lean.js",
"/ran/assets/src_ranuts_file_watchFile.md.CjDYYjae.lean.js",
"/ran/assets/cn_src_ranuts_mode_subscribe.md.BRf67vd0.lean.js",
"/ran/assets/src_ranui_button_index.md.BHBAT7kT.js",
"/ran/assets/cn_src_article_sort_select_index.md.CUdi4KRM.js",
"/ran/assets/cn_src_article_babel.md.Cm2pJZjK.lean.js",
"/ran/assets/src_ranui_radar_index.md.DWwsYsWR.lean.js",
"/ran/assets/cn_src_article_sort_index.md.BCaiuldc.js",
"/ran/assets/src_article_sort_count_index.md.DBTBGlD_.js",
"/ran/assets/src_ranui_loading_index.md.DuWe9pPZ.js",
"/ran/assets/src_ranui_checkbox_index.md.DhjSLI52.lean.js",
"/ran/assets/src_ranui_message_index.md.qlquXaqY.lean.js",
"/ran/assets/cn_src_article_sort_shell_index.md.UQTQyjvw.js",
"/ran/assets/src_ranui_image_index.md.bV33Qtr3.lean.js",
"/ran/assets/cn_src_article_sort_bubble_index.md.dRkcLFS0.lean.js",
"/ran/assets/cn_src_ranuts_utils_convertImageToBase64.md.DLVwe0wX.lean.js",
"/ran/assets/quick.DD28bswc.gif",
"/ran/assets/cn_src_article_sort_radix_index.md.N_n8T2u1.lean.js",
"/ran/assets/src_article_sort_index.md.Bv7XQXfE.lean.js",
"/ran/assets/src_article_typescript_reconstruction.md.BoUsg-S_.lean.js",
"/ran/assets/inter-italic-latin-ext.CN1xVJS-.woff2",
"/ran/assets/cn_src_article_bundle.md.Cgo-nRcf.js",
"/ran/assets/cn_src_ranui_popover_index.md.Ceb7Kmta.js",
"/ran/assets/src_article_imagemin.md.2Es45sym.js",
"/ran/assets/src_article_javascript_domLoad.md.Bq9-o4Pa.lean.js",
"/ran/assets/src_ranui_index.md.CuR2omWw.js",
"/ran/assets/单例.B4dKFqxx.jpg",
"/ran/assets/select.B8GwndZy.gif",
"/ran/assets/src_article_sort_shell_index.md.DtXW09Sc.js",
"/ran/assets/外观.Cm0-J0eF.png",
"/ran/assets/src_ranui_button_index.md.BHBAT7kT.lean.js",
"/ran/assets/src_ranui_tab_index.md.BvqNkHAk.js",
"/ran/assets/src_ranuts_utils_task.md.C0inQlGz.js",
"/ran/assets/cn_src_ranuts_file_fileInfo.md.CYvDZ1xm.lean.js",
"/ran/assets/装饰.CuuWN9YK.jpg",
"/ran/assets/cn_src_article_designMode.md.BFso_ZOy.js",
"/ran/assets/src_types_高级类型.md.GBes8MUf.js",
"/ran/assets/src_ranuts_mode_subscribe.md.CRfisd4j.lean.js",
"/ran/assets/cn_src_ranui_loading_index.md.DXF4_64V.js",
"/ran/assets/src_ranuts_binaryTree_index.md.B78Vsrj2.js",
"/ran/assets/cn_src_article_sort_heap_index.md.BP-dsUfk.lean.js",
"/ran/assets/complexity.DSLVsjHt.png",
"/ran/assets/cn_src_article_typescript_reconstruction.md.DZz2LOSR.js",
"/ran/assets/inter-roman-greek-ext.CqjqNYQ-.woff2",
"/ran/assets/src_ranuts_utils_filterObj.md.BxU8jSG3.lean.js",
"/ran/assets/cn_src_ranuts_file_readDir.md.DGgvJ5EK.js",
"/ran/assets/src_ranuts_file_fileInfo.md.BuSkF2nl.lean.js",
"/ran/assets/src_ranuts_file_readDir.md.BAuHw05g.lean.js",
"/ran/assets/src_article_sort_select_index.md.DxUDBL_3.js",
"/ran/assets/src_article_astParse_tokenizer.md.ByA2epWQ.js",
"/ran/assets/cn_src_ranuts_utils_ocr.md.Cd3crU8f.js",
"/ran/assets/src_article_typescript_calculate.md.DZkWkZTU.js",
"/ran/assets/cn_src_types_模式匹配.md.DbtDSIfO.js",
"/ran/assets/src_ranuts_binaryTree_index.md.B78Vsrj2.lean.js",
"/ran/assets/src_ranuts_mode_subscribe.md.CRfisd4j.js",
"/ran/assets/cn_src_ranuts_file_readFile.md.Dm3Lv6Rt.js",
"/ran/assets/cn_index.md.BCudzzdJ.lean.js",
"/ran/assets/src_ranui_icon_index.md.Fjs8_eUB.js",
"/ran/assets/src_article_sort_index.md.Bv7XQXfE.js",
"/ran/assets/bundle.bky0NmdF.png",
"/ran/assets/src_article_typescript_unionType.md.BJVbSHBf.js",
"/ran/assets/shell.CZ-z1IVg.gif",
"/ran/assets/src_article_typescript_index.md.zB42Suw4.lean.js",
"/ran/assets/cn_src_ranui_radar_index.md.CL2TIjme.js",
"/ran/assets/cn_src_ranuts_file_writeFile.md.jzNZVuaZ.js",
"/ran/assets/ExpressionStatement.zaIHlhIF.jpeg",
"/ran/assets/cn_src_ranuts_utils_getCookie.md.psawQWkh.js",
"/ran/assets/src_ranui_tabs_index.md.CAYjMFOu.js",
"/ran/assets/src_article_sort_quick_index.md.CbiQfo0M.js",
"/ran/assets/cn_src_ranui_popover_index.md.Ceb7Kmta.lean.js",
"/ran/assets/src_ranuts_file_writeFile.md.ySSI11YK.lean.js",
"/ran/assets/策略.BAijEgGz.png",
"/ran/assets/Comment.BYtNY-L1.jpeg",
"/ran/assets/export.ne8l5ppO.jpeg",
"/ran/assets/cn_src_article_typescript_calculate.md.BWEIhjWf.js",
"/ran/assets/src_article_sort_heap_index.md.Dmx4r9QJ.js",
"/ran/assets/src_ranuts_file_appendFile.md.CDRJ_V7c.lean.js",
"/ran/assets/cn_src_types_高级类型.md.fFQZ6zDq.lean.js",
"/ran/assets/src_ranuts_utils_formatJson.md.6k3MmDrC.lean.js",
"/ran/assets/cn_src_ranui_input_index.md.CsGMUTqA.lean.js",
"/ran/assets/cn_src_types_类型运算.md.BPr6Ipu5.js",
"/ran/assets/cn_src_ranui_message_index.md.B1dC-qLo.lean.js",
"/ran/assets/src_article_sort_shell_index.md.DtXW09Sc.lean.js",
"/ran/assets/享元.EIifVVTy.png",
"/ran/assets/src_article_typescript_recursion.md.DN-nLI_P.js",
"/ran/assets/cn_src_ranui_skeleton_index.md.C4ALE-gT.lean.js",
"/ran/assets/cn_src_article_typescript_pattern.md.DMQPcRy-.js",
"/ran/assets/index.md.DYYUdeJ7.js",
"/ran/assets/cn_src_ranuts_utils_filterObj.md.1dfnS__b.lean.js",
"/ran/assets/src_ranui_message_index.md.qlquXaqY.js",
"/ran/assets/cn_src_ranuts_file_readDir.md.DGgvJ5EK.lean.js",
"/ran/assets/cn_src_article_javascript_domLoad.md.CFZG2VIl.lean.js",
"/ran/assets/桥接.DX0mO5JC.png",
"/ran/assets/cn_src_ranuts_utils_formatJson.md.Po_lpbay.js",
"/ran/assets/cn_src_article_sort_insert_index.md.BekigXTR.lean.js",
"/ran/assets/cn_src_ranuts_file_watchFile.md.uHaDMnAe.lean.js",
"/ran/assets/src_article_typescript_pattern.md.BcZBI5Uz.js",
"/ran/assets/cn_src_ranuts_utils_convertImageToBase64.md.DLVwe0wX.js",
"/ran/assets/src_article_sort_bucket_index.md.DwP08hdb.js",
"/ran/assets/src_article_typescript_calculate.md.DZkWkZTU.lean.js",
"/ran/assets/继承.Dta6_xdc.png",
"/ran/assets/Statement.9lGuRes5.jpeg",
"/ran/assets/insert.gf3GhDvq.gif",
"/ran/assets/src_ranuts_bundler_index.md.Cz2Y-MmW.js",
"/ran/assets/原型.DYbH0CSA.jpg",
"/ran/assets/src_article_javascript_domLoad.md.Bq9-o4Pa.js",
"/ran/assets/src_article_bundle.md.Dnfd_9QT.js",
"/ran/assets/Expression.DczLaznn.jpeg",
"/ran/assets/src_article_sort_heap_index.md.Dmx4r9QJ.lean.js",
"/ran/assets/src_ranuts_file_appendFile.md.CDRJ_V7c.js",
"/ran/assets/inter-roman-cyrillic-ext.BBPuwvHQ.woff2",
"/ran/assets/cn_src_ranui_button_index.md.D1n7Cyd6.lean.js",
"/ran/assets/src_ranui_popover_index.md.AeEvPbVs.js",
"/ran/assets/cn_src_ranui_tab_index.md.cU2AiRdJ.lean.js",
"/ran/assets/cn_src_ranuts_file_writeFile.md.jzNZVuaZ.lean.js",
"/ran/assets/cn_src_types_TS类型.md.DIFGQ9X5.lean.js",
"/ran/assets/cn_src_article_sort_count_index.md.BZzaoNri.lean.js",
"/ran/assets/inter-roman-vietnamese.BjW4sHH5.woff2",
"/ran/assets/cn_src_article_typescript_unionType.md.BfviUpnI.lean.js",
"/ran/assets/cn_src_article_sort_quick_index.md.DiAr948S.js",
"/ran/assets/src_ranui_popover_index.md.AeEvPbVs.lean.js",
"/ran/assets/src_ranui_player_index.md.DHOdukap.js",
"/ran/assets/src_ranui_select_index.md.SdKx4Y35.js",
"/ran/assets/extra.Da45cF33.jpeg",
"/ran/assets/cn_src_ranuts_utils_formatJson.md.Po_lpbay.lean.js",
"/ran/assets/组合.StqZ1pDc.png",
"/ran/assets/cn_src_article_typescript_unionType.md.BfviUpnI.js",
"/ran/assets/src_ranuts_mimeType_mimeType.md.BzWb3D1A.lean.js",
"/ran/assets/cn_src_article_astParse_tokenizer.md.CiZ-7nrk.lean.js",
"/ran/assets/cn_src_types_TS类型.md.DIFGQ9X5.js",
"/ran/assets/cn_src_ranui_loading_index.md.DXF4_64V.lean.js",
"/ran/assets/src_ranuts_utils_ocr.md.BQbkqWrJ.lean.js",
"/ran/assets/src_article_sort_bubble_index.md.B9LyoFxX.js",
"/ran/assets/src_ranuts_bundler_index.md.Cz2Y-MmW.lean.js",
"/ran/assets/src_ranui_image_index.md.bV33Qtr3.js",
"/ran/assets/cn_src_ranuts_file_fileInfo.md.CYvDZ1xm.js",
"/ran/assets/src_article_imagemin.md.2Es45sym.lean.js",
"/ran/assets/cn_src_article_sort_shell_index.md.UQTQyjvw.lean.js",
"/ran/assets/cn_src_ranui_skeleton_index.md.C4ALE-gT.js",
"/ran/assets/sort.CSVZS1AV.png",
"/ran/assets/src_ranuts_utils_getCookie.md.BUvLYmaq.lean.js",
"/ran/assets/Identifier.lJSxyFTe.jpeg",
"/ran/assets/src_article_typescript_index.md.zB42Suw4.js",
"/ran/assets/Program.BBf_t-me.jpeg",
"/ran/assets/src_types_类型运算.md.zQbVua6g.lean.js",
"/ran/assets/cn_src_article_sort_bucket_index.md.By9mBD34.lean.js",
"/ran/assets/inter-italic-vietnamese.BSbpV94h.woff2",
"/ran/assets/File.BiH2GpuW.jpeg",
"/ran/assets/cn_src_ranuts_index.md.f0TMu5Di.lean.js",
"/ran/assets/src_ranui_input_index.md.Ds--h__m.js",
"/ran/assets/src_ranui_preview_index.md.Cu2LZFhr.lean.js",
"/ran/assets/cn_src_article_typescript_calculate.md.BWEIhjWf.lean.js",
"/ran/assets/cn_src_article_javascript_domLoad.md.CFZG2VIl.js",
"/ran/assets/src_article_sort_select_index.md.DxUDBL_3.lean.js",
"/ran/assets/cn_src_ranui_input_index.md.CsGMUTqA.js",
"/ran/assets/balanceTree.DP_9yIkO.png",
"/ran/assets/cn_src_ranui_tabs_index.md.BR1PLDp6.lean.js",
"/ran/assets/src_ranui_skeleton_index.md.CXFwHT3I.js",
"/ran/assets/cn_src_ranui_message_index.md.B1dC-qLo.js",
"/ran/assets/src_article_sort_bucket_index.md.DwP08hdb.lean.js",
"/ran/assets/cn_src_ranui_select_index.md.Dk7765J3.lean.js",
"/ran/assets/count.CWSWBe_h.gif",
"/ran/assets/src_ranui_player_index.md.DHOdukap.lean.js",
"/ran/assets/src_ranui_icon_index.md.Fjs8_eUB.lean.js",
"/ran/assets/cn_src_article_typescript_index.md.Ct4H1OZ1.lean.js",
"/ran/assets/cn_src_ranui_player_index.md.CLbiKX4B.lean.js",
"/ran/assets/cn_src_types_类型运算.md.BPr6Ipu5.lean.js",
"/ran/assets/cn_src_article_sort_insert_index.md.BekigXTR.js",
"/ran/assets/cn_src_ranui_checkbox_index.md.4g1_GkYr.lean.js",
"/ran/assets/cn_src_article_astParse_tokenizer.md.CiZ-7nrk.js",
"/ran/assets/src_article_sort_radix_index.md.D6lJiCI8.lean.js",
"/ran/assets/inter-italic-greek.DJ8dCoTZ.woff2",
"/ran/assets/src_ranui_checkbox_index.md.DhjSLI52.js",
"/ran/assets/cn_src_ranui_icon_index.md.BrQGtixu.lean.js",
"/ran/assets/cn_src_ranui_radar_index.md.CL2TIjme.lean.js",
"/ran/assets/src_ranui_tabs_index.md.CAYjMFOu.lean.js",
"/ran/assets/cn_src_article_sort_quick_index.md.DiAr948S.lean.js",
"/ran/assets/cn_src_ranuts_mimeType_mimeType.md.t7mfSgOP.lean.js",
"/ran/assets/cn_src_ranuts_mimeType_mimeType.md.t7mfSgOP.js",
"/ran/assets/cn_src_ranui_preview_index.md.D6w8o4NG.js",
"/ran/assets/cn_src_types_模式匹配.md.DbtDSIfO.lean.js",
"/ran/assets/src_ranui_progress_index.md.DolRxkiI.lean.js",
"/ran/assets/src_article_sort_merge_index.md.DYhlun0P.js",
"/ran/assets/inter-italic-greek-ext.1u6EdAuj.woff2",
"/ran/assets/cn_index.md.BCudzzdJ.js",
"/ran/assets/src_ranui_input_index.md.Ds--h__m.lean.js",
"/ran/assets/src_article_typescript_recursion.md.DN-nLI_P.lean.js",
"/ran/assets/src_ranui_loading_index.md.DuWe9pPZ.lean.js",
"/ran/assets/axtexplorerSave.a5hTrvd2.jpeg",
"/ran/assets/src_ranui_preview_index.md.Cu2LZFhr.js",
"/ran/assets/src_types_模式匹配.md.BlGMN1Fh.js",
"/ran/assets/cn_src_ranui_modal_index.md.ChIMiArw.lean.js",
"/ran/assets/cn_src_article_typescript_recursion.md.huFjwXpc.lean.js",
"/ran/assets/cn_src_ranui_index.md.B9NV7yju.lean.js",
"/ran/assets/cn_src_ranuts_utils_getCookie.md.psawQWkh.lean.js",
"/ran/assets/src_ranui_select_index.md.SdKx4Y35.lean.js",
"/ran/assets/Literal.Dl-JxujV.jpeg",
"/ran/assets/cn_src_ranui_modal_index.md.ChIMiArw.js",
"/ran/assets/src_ranuts_utils_getCookie.md.BUvLYmaq.js",
"/ran/assets/cn_src_ranuts_utils_filterObj.md.1dfnS__b.js",
"/ran/assets/cn_src_article_sort_count_index.md.BZzaoNri.js",
"/ran/assets/src_article_bundle.md.Dnfd_9QT.lean.js",
"/ran/assets/src_ranui_progress_index.md.DolRxkiI.js",
"/ran/assets/src_ranuts_file_readFile.md.C-Qh4-7Q.js",
"/ran/assets/cn_src_article_sort_radix_index.md.N_n8T2u1.js",
"/ran/assets/src_ranuts_file_readFile.md.C-Qh4-7Q.lean.js",
"/ran/assets/src_types_TS类型.md.D3u7hmi7.js",
"/ran/assets/Declaration.CplvpFd-.jpeg",
"/ran/assets/src_article_typescript_unionType.md.BJVbSHBf.lean.js",
"/ran/assets/src_ranui_modal_index.md.CvqjjyTP.lean.js",
"/ran/assets/src_ranuts_utils_ocr.md.BQbkqWrJ.js",
"/ran/assets/cn_src_article_imagemin.md.WnhiX1hS.lean.js",
"/ran/assets/src_article_sort_radix_index.md.D6lJiCI8.js",
"/ran/assets/cn_src_article_designMode.md.BFso_ZOy.lean.js",
"/ran/assets/inter-roman-greek.BBVDIX6e.woff2",
"/ran/assets/inter-roman-cyrillic.C5lxZ8CY.woff2",
"/ran/assets/src_ranuts_utils_str2xml.md.D0wcjyqy.lean.js",
"/ran/assets/cn_src_ranui_select_index.md.Dk7765J3.js",
"/ran/assets/src_ranuts_utils_formatJson.md.6k3MmDrC.js",
"/ran/assets/src_article_sort_quick_index.md.CbiQfo0M.lean.js",
"/ran/assets/cn_src_ranui_player_index.md.CLbiKX4B.js",
"/ran/assets/inter-italic-cyrillic-ext.r48I6akx.woff2",
"/ran/assets/cn_src_article_sort_bubble_index.md.dRkcLFS0.js",
"/ran/assets/cn_src_article_sort_select_index.md.CUdi4KRM.lean.js",
"/ran/assets/inter-italic-cyrillic.By2_1cv3.woff2",
"/ran/assets/inter-roman-latin-ext.4ZJIpNVo.woff2",
"/ran/assets/src_article_babel.md.BNEZ1KlM.lean.js",
"/ran/assets/cn_src_ranuts_bundler_index.md.DLj0qjdv.lean.js",
"/ran/assets/建造者.B6neb_7R.jpeg",
"/ran/assets/src_article_functionalProgramming.md.DVm2cwFp.lean.js",
"/ran/assets/src_article_sort_bubble_index.md.B9LyoFxX.lean.js",
"/ran/assets/cn_src_ranui_progress_index.md.Cd9qZYY3.js",
"/ran/assets/cn_src_ranuts_index.md.f0TMu5Di.js",
"/ran/assets/inter-italic-latin.C2AdPX0b.woff2",
"/ran/assets/cn_src_ranui_button_index.md.D1n7Cyd6.js",
"/ran/assets/heap.D4myjC6C.gif",
"/ran/assets/customElements.DbqgaaNb.png",
"/ran/assets/cn_src_article_functionalProgramming.md.XzXplk1P.js",
"/ran/assets/cn_src_ranuts_binaryTree_index.md.BvicmotB.js",
"/ran/assets/src_ranuts_utils_str2xml.md.D0wcjyqy.js",
"/ran/assets/src_article_sort_insert_index.md.C9GjFQiC.lean.js",
"/ran/assets/cn_src_ranuts_file_appendFile.md.Dk9r4qmK.lean.js",
"/ran/assets/Class.Cx5QD1OX.jpeg",
"/ran/assets/cn_src_ranui_icon_index.md.BrQGtixu.js",
"/ran/assets/style.DxMSLhj5.css",
"/ran/assets/src_article_sort_insert_index.md.C9GjFQiC.js",
"/ran/assets/cn_src_article_imagemin.md.WnhiX1hS.js",
"/ran/assets/src_ranuts_file_fileInfo.md.BuSkF2nl.js",
"/ran/assets/src_ranui_skeleton_index.md.CXFwHT3I.lean.js",
"/ran/assets/解释器.DymUKGTa.jpg",
"/ran/assets/cn_src_article_typescript_reconstruction.md.DZz2LOSR.lean.js",
"/ran/assets/chunks/jszip.min-Dhs3nUkD.BsDI-Ugu.js",
"/ran/assets/chunks/info-circle-COnL5bTJ.B9YJorcw.js",
"/ran/assets/chunks/extra.Cu56q3CZ.js",
"/ran/assets/chunks/framework.BZEwi-oL.js",
"/ran/assets/chunks/heap.xduQWyUN.js",
"/ran/assets/chunks/colz-DJZvo_8B.DBiU5Tau.js",
"/ran/assets/chunks/count.CcfK-WL7.js",
"/ran/assets/chunks/index.mdtRk-B9.js",
"/ran/assets/chunks/docx-CHkPTdGU.BUghc3NZ.js",
"/ran/assets/chunks/unlock-CeU74z9n.58atcEuH.js",
"/ran/assets/chunks/pwa-install.es.Boqgbkxy.js",
"/ran/assets/chunks/en.Bkn4-Vvy.js",
"/ran/assets/chunks/check-circle-szyAJiap.CM_vbBX5.js",
"/ran/assets/chunks/close-circle-CwmuN2C6.D612j4KD.js",
"/ran/assets/chunks/info-circle-fill-CFeVMdci.CUxFtRNn.js",
"/ran/assets/chunks/bubble.Dg5jgvyl.js",
"/ran/assets/chunks/lock-Cr7BnmWN.0WfYXC2j.js",
"/ran/assets/chunks/eye-close-BVr3NJtg.DsdsDDgX.js",
"/ran/assets/chunks/preview-CJbz9GjO.C8N16-9H.js",
"/ran/assets/chunks/sprite-CH2zLtZy.Djo3sTkk.js",
"/ran/assets/chunks/team-tl4NJXPC.D7881a1v.js",
"/ran/assets/chunks/loading-Dcc5RApI.D3l74EUI.js",
"/ran/assets/chunks/input-input.MnARRJC6.js",
"/ran/assets/chunks/complexity.CSkvDr7k.js",
"/ran/assets/chunks/commonjs-dynamic-modules-DLbDWi6a.CRNIONdy.js",
"/ran/assets/chunks/index-CGEx9VOA.kxSojsaB.js",
"/ran/assets/chunks/quick.WcLzRUPH.js",
"/ran/assets/chunks/merge.D_M4N_iU.js",
"/ran/assets/chunks/warning-circle-fill-lODUKz0i.7RyGfSeR.js",
"/ran/assets/chunks/customElements.qitHOM3M.js",
"/ran/assets/chunks/bundle.BxrzsuA1.js",
"/ran/assets/chunks/message-D36_Zo2l.CR8K3LhI.js",
"/ran/assets/chunks/radix.CHOmrmB0.js",
"/ran/assets/chunks/setting-DemlgzVC.DkD4YPwp.js",
"/ran/assets/chunks/user-B-eVXwuk.DyoYYAjs.js",
"/ran/assets/chunks/power-off-lQRbiBak.r13EH4bb.js",
"/ran/assets/chunks/close-CFnkhudp.IMqD2L1-.js",
"/ran/assets/chunks/book-nTEFXU2x.DPEdiL1I.js",
"/ran/assets/chunks/访问者._0swtoJg.js",
"/ran/assets/chunks/loading-scene-BMc2wqKm.Di19NrRU.js",
"/ran/assets/chunks/close-circle-fill-jSqPPw9i.BsLXh5-a.js",
"/ran/assets/chunks/index-DtOAyqJt.D6h6GHgv.js",
"/ran/assets/chunks/check-circle-fill-B_pd8ZSs.Dxgzakn4.js",
"/ran/assets/chunks/eye-D_mEt17f.DJFa_ttF.js",
"/ran/assets/chunks/warning-circle-DDUgEDIv.1BX6MOiy.js",
"/ran/assets/chunks/zh-CN.PUkQxDBJ.js",
"/ran/assets/chunks/balanceTree.CCEoBiag.js",
"/ran/assets/chunks/add-user-BN1JlY7e.D6YNNzf8.js",
"/ran/assets/chunks/shell.CGEkKxrp.js",
"/ran/assets/chunks/theme.DI6_crPr.js",
"/ran/assets/chunks/select.BGReufCV.js",
"/ran/assets/chunks/insert.Bde3uDH4.js",
"/ran/assets/chunks/home-BUQ4USMk.BqTharGj.js",
"/ran/assets/chunks/pdf-Cx0VWKFo.LQ4vZ6MR.js",
"/ran/assets/cn_src_article_sort_heap_index.md.BP-dsUfk.js",
"/ran/assets/适配器.C2VH4lXy.png",
"/ran/assets/src_article_sort_count_index.md.DBTBGlD_.lean.js",
"/ran/assets/src_types_高级类型.md.GBes8MUf.lean.js",
"/ran/assets/cn_src_ranuts_binaryTree_index.md.BvicmotB.lean.js",
"/ran/assets/inter-roman-latin.Di8DUHzh.woff2",
"/ran/assets/cn_src_types_高级类型.md.fFQZ6zDq.js",
"/ran/assets/抽象工厂.DlwNEriZ.png",
"/ran/assets/cn_src_article_babel.md.Cm2pJZjK.js",
"/ran/assets/src_ranui_radar_index.md.DWwsYsWR.js",
"/ran/assets/src_article_sort_merge_index.md.DYhlun0P.lean.js",
"/ran/assets/src_types_TS类型.md.D3u7hmi7.lean.js",
"/ran/assets/bubble.Csp5B4TH.gif",
"/ran/assets/src_ranuts_utils_convertImageToBase64.md.B365qAhD.lean.js",
"/ran/assets/cn_src_ranuts_utils_task.md.CSDJ4IUU.lean.js",
"/ran/assets/cn_src_ranui_preview_index.md.D6w8o4NG.lean.js",
"/ran/assets/import.BTsVI5Tc.jpeg",
"/ran/assets/src_types_模式匹配.md.BlGMN1Fh.lean.js",
"/ran/assets/src_ranuts_file_writeFile.md.ySSI11YK.js",
"/ran/assets/cn_src_ranui_tabs_index.md.BR1PLDp6.js",
"/ran/assets/cn_src_article_typescript_pattern.md.DMQPcRy-.lean.js",
"/ran/assets/src_ranuts_file_readDir.md.BAuHw05g.js",
"/ran/assets/src_article_functionalProgramming.md.DVm2cwFp.js",
"/ran/assets/cn_src_ranuts_file_watchFile.md.uHaDMnAe.js",
"/ran/assets/cn_src_ranuts_utils_ocr.md.Cd3crU8f.lean.js",
"/ran/assets/cn_src_article_sort_merge_index.md.DjsJ0h8I.lean.js",
"/ran/assets/cn_src_ranui_image_index.md.D118uGpB.lean.js",
"/ran/assets/cn_src_ranui_progress_index.md.Cd9qZYY3.lean.js",
"/ran/assets/merge.Bguw-KQu.gif",
"/ran/assets/src_ranui_modal_index.md.CvqjjyTP.js",
"/ran/assets/cn_src_ranui_index.md.B9NV7yju.js",
"/ran/assets/src_ranuts_utils_task.md.C0inQlGz.lean.js",
"/ran/assets/cn_src_ranuts_utils_task.md.CSDJ4IUU.js",
"/ran/assets/cn_src_ranuts_file_readFile.md.Dm3Lv6Rt.lean.js",
"/ran/assets/cn_src_article_typescript_recursion.md.huFjwXpc.js",
"/ran/assets/app.B6UweoBT.js",
"/ran/assets/cn_src_article_sort_index.md.BCaiuldc.lean.js",
"/ran/assets/访问者.aEI4m-5a.png",
"/ran/icon_192.png",
"/ran/home.svg",
"/ran/icon_168.png",
"/ran/hashmap.json",
"/ran/src/ranuts/mimeType/mimeType.html",
"/ran/src/ranuts/binaryTree/index.html",
"/ran/src/ranuts/mode/subscribe.html",
"/ran/src/ranuts/utils/filterObj.html",
"/ran/src/ranuts/utils/ocr.html",
"/ran/src/ranuts/utils/formatJson.html",
"/ran/src/ranuts/utils/convertImageToBase64.html",
"/ran/src/ranuts/utils/task.html",
"/ran/src/ranuts/utils/getCookie.html",
"/ran/src/ranuts/utils/str2xml.html",
"/ran/src/ranuts/bundler/index.html",
"/ran/src/ranuts/index.html",
"/ran/src/ranuts/file/readFile.html",
"/ran/src/ranuts/file/fileInfo.html",
"/ran/src/ranuts/file/appendFile.html",
"/ran/src/ranuts/file/watchFile.html",
"/ran/src/ranuts/file/writeFile.html",
"/ran/src/ranuts/file/readDir.html",
"/ran/src/types/高级类型.html",
"/ran/src/types/TS类型.html",
"/ran/src/types/类型运算.html",
"/ran/src/types/模式匹配.html",
"/ran/src/ranui/input/index.html",
"/ran/src/ranui/popover/index.html",
"/ran/src/ranui/checkbox/index.html",
"/ran/src/ranui/loading/index.html",
"/ran/src/ranui/tab/index.html",
"/ran/src/ranui/image/index.html",
"/ran/src/ranui/message/index.html",
"/ran/src/ranui/select/index.html",
"/ran/src/ranui/index.html",
"/ran/src/ranui/button/index.html",
"/ran/src/ranui/icon/index.html",
"/ran/src/ranui/skeleton/index.html",
"/ran/src/ranui/tabs/index.html",
"/ran/src/ranui/progress/index.html",
"/ran/src/ranui/modal/index.html",
"/ran/src/ranui/radar/index.html",
"/ran/src/ranui/player/index.html",
"/ran/src/ranui/preview/index.html",
"/ran/src/article/imagemin.html",
"/ran/src/article/designMode.html",
"/ran/src/article/babel.html",
"/ran/src/article/astParse/tokenizer.html",
"/ran/src/article/javascript/domLoad.html",
"/ran/src/article/bundle.html",
"/ran/src/article/typescript/calculate.html",
"/ran/src/article/typescript/recursion.html",
"/ran/src/article/typescript/reconstruction.html",
"/ran/src/article/typescript/index.html",
"/ran/src/article/typescript/unionType.html",
"/ran/src/article/typescript/pattern.html",
"/ran/src/article/sort/count/index.html",
"/ran/src/article/sort/bubble/index.html",
"/ran/src/article/sort/radix/index.html",
"/ran/src/article/sort/bucket/index.html",
"/ran/src/article/sort/select/index.html",
"/ran/src/article/sort/insert/index.html",
"/ran/src/article/sort/index.html",
"/ran/src/article/sort/shell/index.html",
"/ran/src/article/sort/merge/index.html",
"/ran/src/article/sort/quick/index.html",
"/ran/src/article/sort/heap/index.html",
"/ran/src/article/functionalProgramming.html",
"/ran/icon.png",
];
const VERSION = "1718524833";
const CACHE_NAME = 'chaxus_ran_' + VERSION

const IGNORE_REQUEST_LIST = [
  // google 上报不需要缓存
  'google',
  // 插件请求不用缓存
  'chrome-extension',
  // 百度的请求不用缓存
  'baidu.com',
  'blob:',
  'www.google-analytics.com'
]

// 请求方法
const REQUEST_METHOD = {
  GET: 'GET'
}
// 响应状态码
const RESPONSE_STATUS = {
  SUCCESS: 200
}
// service worker 可监听的事件
const SERVICE_WORK = {
  INSTALL: 'install',
  FETCH: 'fetch',
  ACTIVATE: 'activate',
  MESSAGE: 'message',
  SYNC: 'sync',
  PUSH: 'push'
}
/**
 * @description: 更新缓存
 * @param {*} fetchedResponse
 * @param {*} request
 * @return {*}
 */
const updateCache = (fetchedResponse, request) => {
  const { url } = request
  const { status } = fetchedResponse
  // 只缓存状态码为 200 的请求
  if (status !== RESPONSE_STATUS.SUCCESS) return
  if (filterRequest(request)) {
    caches.open(CACHE_NAME).then(cache => {
      // 将请求到的资源添加到缓存中
      // 判断下只有 fetch 的请求才有 clone 方法，才可以被缓存，从 cache 中获取的响应没有 clone
      if (fetchedResponse?.clone) {
        cache.put(url, fetchedResponse.clone());
      }
    }).catch(error => {
      console.log('service worker update cache error:', error, request)
    })
  }
}
/**
 * @description: 忽略 IGNORE_REQUEST_LIST 列表中的请求和非GET方法的请求
 * @param {*} request
 * @return {*}
 */
const filterRequest = (request) => {
  const { url, method } = request
  return !IGNORE_REQUEST_LIST.some(item => url.includes(item)) && method === REQUEST_METHOD.GET
}

/**
 * 缓存优先
 * @param {*} request
 * @returns
 */
const cacheFirst = async (request) => {
  // 从缓存中读取 respondWith 表示拦截请求并返回自定义的响应
  try {
    const { url } = request
    const responseFromCache = await caches.match(url);
    // 如果缓存中有，返回已经缓存的资源
    if (responseFromCache) return responseFromCache
    // 如果缓存中没有，就从网络中请求，并更新到缓存中
    const responseFromServer = await fetch(request);
    updateCache(responseFromServer, request)
    return responseFromServer
  } catch (error) {
    // 当缓存中也没有，请求也不可用的时候
    // 始终需要一个一个响应
    // 甚至可以设置回落的请求，在catch中继续发起请求
    console.log('service worker cacheFirst error:', error, request)
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
}


const deleteCache = async (key) => {
  try {
    await caches.delete(key);
  } catch (error) {
    console.log('service worker deleteCache error:', error, key)
  }
};

const deleteOldCaches = async () => {
  const cacheKeepList = [CACHE_NAME];
  try {
    const keyList = await caches.keys();
    const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
    await Promise.all(cachesToDelete.map(deleteCache));
  } catch (error) {
    console.log('service worker deleteOldCaches error:', deleteOldCaches, cacheKeepList)
  }

};

this.addEventListener(SERVICE_WORK.INSTALL, function (event) {
  // 确保 Service Worker 不会在 waitUntil() 里面的代码执行完毕之前安装完成
  event.waitUntil(
    // 创建了叫做 chaxus_ran 的新缓存
    caches.open(CACHE_NAME).then(function (cache) {
      // SERVICE_WORK_CACHE_FILE_PATHS 从 bin/build.sh 中生成注入，会去缓存所有的资源
      // 不用 cache.addAll 避免一个请求失败，全部缓存失败，类似Promise.all
      // 可以使用 cache.add 但 Cache.add/Cache.addAll 不会缓存 Response.status 值不在 200 范围内的响应，
      // 而 cache.put 允许你存储任何请求/响应对。因此，Cache.add/Cache.addAll 不能用于不透明的响应，而 Cache.put 可以。
      return SERVICE_WORK_CACHE_FILE_PATHS.map(url =>
        fetch(url).then(response => {
          // 检查响应是否成功
          if (!response.ok) {
            console.log('service worker fetch response error:', url)
          }
          // 将响应添加到缓存
          return cache.put(url, response);
        }).catch(error => {
          console.log('service worker self installed error:', url, error);
        })
      )
    })
  );
});

this.addEventListener(SERVICE_WORK.FETCH, async (event) => {
  // 拦截请求
  try {
    cacheFirst(event.request)
  } catch (error) {
    console.log('service worker self fetch error:', error, event)
  }
});

this.addEventListener(SERVICE_WORK.ACTIVATE, (event) => {
  event.waitUntil(deleteOldCaches());
});


