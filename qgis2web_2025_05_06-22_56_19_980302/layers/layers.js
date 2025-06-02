ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([5580087.335736, 4464049.412594, 5588534.148223, 4468191.531521]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_bimarestan_1 = new ol.format.GeoJSON();
var features_bimarestan_1 = format_bimarestan_1.readFeatures(json_bimarestan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bimarestan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bimarestan_1.addFeatures(features_bimarestan_1);
var lyr_bimarestan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bimarestan_1, 
                style: style_bimarestan_1,
                popuplayertitle: 'bimarestan',
                interactive: true,
                title: '<img src="styles/legend/bimarestan_1.png" /> bimarestan'
            });
var format_mokhaberat_2 = new ol.format.GeoJSON();
var features_mokhaberat_2 = format_mokhaberat_2.readFeatures(json_mokhaberat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mokhaberat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mokhaberat_2.addFeatures(features_mokhaberat_2);
var lyr_mokhaberat_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mokhaberat_2, 
                style: style_mokhaberat_2,
                popuplayertitle: 'mokhaberat',
                interactive: true,
                title: '<img src="styles/legend/mokhaberat_2.png" /> mokhaberat'
            });
var format_adarehpost_3 = new ol.format.GeoJSON();
var features_adarehpost_3 = format_adarehpost_3.readFeatures(json_adarehpost_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adarehpost_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adarehpost_3.addFeatures(features_adarehpost_3);
var lyr_adarehpost_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adarehpost_3, 
                style: style_adarehpost_3,
                popuplayertitle: 'adarehpost',
                interactive: true,
                title: '<img src="styles/legend/adarehpost_3.png" /> adarehpost'
            });
var format_park_4 = new ol.format.GeoJSON();
var features_park_4 = format_park_4.readFeatures(json_park_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_park_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_4.addFeatures(features_park_4);
var lyr_park_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_park_4, 
                style: style_park_4,
                popuplayertitle: 'park',
                interactive: true,
                title: '<img src="styles/legend/park_4.png" /> park'
            });
var format_shorayshahr_5 = new ol.format.GeoJSON();
var features_shorayshahr_5 = format_shorayshahr_5.readFeatures(json_shorayshahr_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shorayshahr_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shorayshahr_5.addFeatures(features_shorayshahr_5);
var lyr_shorayshahr_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shorayshahr_5, 
                style: style_shorayshahr_5,
                popuplayertitle: 'shoray shahr',
                interactive: true,
                title: '<img src="styles/legend/shorayshahr_5.png" /> shoray shahr'
            });
var format_zendan_6 = new ol.format.GeoJSON();
var features_zendan_6 = format_zendan_6.readFeatures(json_zendan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zendan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zendan_6.addFeatures(features_zendan_6);
var lyr_zendan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zendan_6, 
                style: style_zendan_6,
                popuplayertitle: 'zendan',
                interactive: true,
                title: '<img src="styles/legend/zendan_6.png" /> zendan'
            });
var format_bashgah_7 = new ol.format.GeoJSON();
var features_bashgah_7 = format_bashgah_7.readFeatures(json_bashgah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bashgah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bashgah_7.addFeatures(features_bashgah_7);
var lyr_bashgah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bashgah_7, 
                style: style_bashgah_7,
                popuplayertitle: 'bashgah',
                interactive: true,
                title: '<img src="styles/legend/bashgah_7.png" /> bashgah'
            });
var format_atashneshani_8 = new ol.format.GeoJSON();
var features_atashneshani_8 = format_atashneshani_8.readFeatures(json_atashneshani_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_atashneshani_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_atashneshani_8.addFeatures(features_atashneshani_8);
var lyr_atashneshani_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_atashneshani_8, 
                style: style_atashneshani_8,
                popuplayertitle: 'atash neshani',
                interactive: true,
                title: '<img src="styles/legend/atashneshani_8.png" /> atash neshani'
            });
var format_daneshgah_9 = new ol.format.GeoJSON();
var features_daneshgah_9 = format_daneshgah_9.readFeatures(json_daneshgah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_daneshgah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_daneshgah_9.addFeatures(features_daneshgah_9);
var lyr_daneshgah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_daneshgah_9, 
                style: style_daneshgah_9,
                popuplayertitle: 'daneshgah',
                interactive: true,
                title: '<img src="styles/legend/daneshgah_9.png" /> daneshgah'
            });
var format_polis_10 = new ol.format.GeoJSON();
var features_polis_10 = format_polis_10.readFeatures(json_polis_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polis_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polis_10.addFeatures(features_polis_10);
var lyr_polis_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polis_10, 
                style: style_polis_10,
                popuplayertitle: 'polis',
                interactive: true,
                title: '<img src="styles/legend/polis_10.png" /> polis'
            });
var format_dadgah_11 = new ol.format.GeoJSON();
var features_dadgah_11 = format_dadgah_11.readFeatures(json_dadgah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dadgah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dadgah_11.addFeatures(features_dadgah_11);
var lyr_dadgah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dadgah_11, 
                style: style_dadgah_11,
                popuplayertitle: 'dadgah',
                interactive: true,
                title: '<img src="styles/legend/dadgah_11.png" /> dadgah'
            });
var format_masged_12 = new ol.format.GeoJSON();
var features_masged_12 = format_masged_12.readFeatures(json_masged_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masged_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masged_12.addFeatures(features_masged_12);
var lyr_masged_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masged_12, 
                style: style_masged_12,
                popuplayertitle: 'masged',
                interactive: true,
                title: '<img src="styles/legend/masged_12.png" /> masged'
            });
var format_sepah_13 = new ol.format.GeoJSON();
var features_sepah_13 = format_sepah_13.readFeatures(json_sepah_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sepah_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sepah_13.addFeatures(features_sepah_13);
var lyr_sepah_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sepah_13, 
                style: style_sepah_13,
                popuplayertitle: 'sepah',
                interactive: true,
                title: '<img src="styles/legend/sepah_13.png" /> sepah'
            });
var format_BAZAR_14 = new ol.format.GeoJSON();
var features_BAZAR_14 = format_BAZAR_14.readFeatures(json_BAZAR_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAZAR_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAZAR_14.addFeatures(features_BAZAR_14);
var lyr_BAZAR_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAZAR_14, 
                style: style_BAZAR_14,
                popuplayertitle: 'BAZAR',
                interactive: true,
                title: '<img src="styles/legend/BAZAR_14.png" /> BAZAR'
            });
var format_FROSHGAH_15 = new ol.format.GeoJSON();
var features_FROSHGAH_15 = format_FROSHGAH_15.readFeatures(json_FROSHGAH_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FROSHGAH_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FROSHGAH_15.addFeatures(features_FROSHGAH_15);
var lyr_FROSHGAH_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FROSHGAH_15, 
                style: style_FROSHGAH_15,
                popuplayertitle: 'FROSHGAH',
                interactive: true,
                title: '<img src="styles/legend/FROSHGAH_15.png" /> FROSHGAH'
            });
var format_midan_16 = new ol.format.GeoJSON();
var features_midan_16 = format_midan_16.readFeatures(json_midan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_midan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_midan_16.addFeatures(features_midan_16);
var lyr_midan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_midan_16, 
                style: style_midan_16,
                popuplayertitle: 'midan',
                interactive: true,
                title: '<img src="styles/legend/midan_16.png" /> midan'
            });
var format_bank_17 = new ol.format.GeoJSON();
var features_bank_17 = format_bank_17.readFeatures(json_bank_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bank_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bank_17.addFeatures(features_bank_17);
var lyr_bank_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bank_17, 
                style: style_bank_17,
                popuplayertitle: 'bank',
                interactive: true,
                title: '<img src="styles/legend/bank_17.png" /> bank'
            });
var format_farmandari_18 = new ol.format.GeoJSON();
var features_farmandari_18 = format_farmandari_18.readFeatures(json_farmandari_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_farmandari_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_farmandari_18.addFeatures(features_farmandari_18);
cluster_farmandari_18 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_farmandari_18
});
var lyr_farmandari_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_farmandari_18, 
                style: style_farmandari_18,
                popuplayertitle: 'farmandari',
                interactive: true,
                title: '<img src="styles/legend/farmandari_18.png" /> farmandari'
            });
var format_pasag_19 = new ol.format.GeoJSON();
var features_pasag_19 = format_pasag_19.readFeatures(json_pasag_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasag_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasag_19.addFeatures(features_pasag_19);
var lyr_pasag_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasag_19, 
                style: style_pasag_19,
                popuplayertitle: 'pasag',
                interactive: true,
                title: '<img src="styles/legend/pasag_19.png" /> pasag'
            });
var format_asnaf_20 = new ol.format.GeoJSON();
var features_asnaf_20 = format_asnaf_20.readFeatures(json_asnaf_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_asnaf_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_asnaf_20.addFeatures(features_asnaf_20);
var lyr_asnaf_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_asnaf_20, 
                style: style_asnaf_20,
                popuplayertitle: 'asnaf',
                interactive: true,
                title: '<img src="styles/legend/asnaf_20.png" /> asnaf'
            });
var format_nezampezeshki_21 = new ol.format.GeoJSON();
var features_nezampezeshki_21 = format_nezampezeshki_21.readFeatures(json_nezampezeshki_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nezampezeshki_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nezampezeshki_21.addFeatures(features_nezampezeshki_21);
var lyr_nezampezeshki_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nezampezeshki_21, 
                style: style_nezampezeshki_21,
                popuplayertitle: 'nezampezeshki',
                interactive: true,
                title: '<img src="styles/legend/nezampezeshki_21.png" /> nezampezeshki'
            });
var format_darokhaneh_22 = new ol.format.GeoJSON();
var features_darokhaneh_22 = format_darokhaneh_22.readFeatures(json_darokhaneh_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_darokhaneh_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_darokhaneh_22.addFeatures(features_darokhaneh_22);
var lyr_darokhaneh_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_darokhaneh_22, 
                style: style_darokhaneh_22,
                popuplayertitle: 'darokhaneh',
                interactive: true,
                title: '<img src="styles/legend/darokhaneh_22.png" /> darokhaneh'
            });
var format_Sinama_23 = new ol.format.GeoJSON();
var features_Sinama_23 = format_Sinama_23.readFeatures(json_Sinama_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sinama_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sinama_23.addFeatures(features_Sinama_23);
var lyr_Sinama_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sinama_23, 
                style: style_Sinama_23,
                popuplayertitle: 'Sinama',
                interactive: true,
                title: '<img src="styles/legend/Sinama_23.png" /> Sinama'
            });
var format_khadamatdarmani_24 = new ol.format.GeoJSON();
var features_khadamatdarmani_24 = format_khadamatdarmani_24.readFeatures(json_khadamatdarmani_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_khadamatdarmani_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_khadamatdarmani_24.addFeatures(features_khadamatdarmani_24);
var lyr_khadamatdarmani_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_khadamatdarmani_24, 
                style: style_khadamatdarmani_24,
                popuplayertitle: 'khadamatdarmani',
                interactive: true,
                title: '<img src="styles/legend/khadamatdarmani_24.png" /> khadamatdarmani'
            });
var format_pompbenzin_25 = new ol.format.GeoJSON();
var features_pompbenzin_25 = format_pompbenzin_25.readFeatures(json_pompbenzin_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pompbenzin_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pompbenzin_25.addFeatures(features_pompbenzin_25);
var lyr_pompbenzin_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pompbenzin_25, 
                style: style_pompbenzin_25,
                popuplayertitle: 'pompbenzin',
                interactive: true,
                title: '<img src="styles/legend/pompbenzin_25.png" /> pompbenzin'
            });
var format_Amozeshparvarash_26 = new ol.format.GeoJSON();
var features_Amozeshparvarash_26 = format_Amozeshparvarash_26.readFeatures(json_Amozeshparvarash_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amozeshparvarash_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amozeshparvarash_26.addFeatures(features_Amozeshparvarash_26);
var lyr_Amozeshparvarash_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Amozeshparvarash_26, 
                style: style_Amozeshparvarash_26,
                popuplayertitle: 'Amozesh parvarash',
                interactive: true,
                title: '<img src="styles/legend/Amozeshparvarash_26.png" /> Amozesh parvarash'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_bimarestan_1.setVisible(true);lyr_mokhaberat_2.setVisible(true);lyr_adarehpost_3.setVisible(true);lyr_park_4.setVisible(true);lyr_shorayshahr_5.setVisible(true);lyr_zendan_6.setVisible(true);lyr_bashgah_7.setVisible(true);lyr_atashneshani_8.setVisible(true);lyr_daneshgah_9.setVisible(true);lyr_polis_10.setVisible(true);lyr_dadgah_11.setVisible(true);lyr_masged_12.setVisible(true);lyr_sepah_13.setVisible(true);lyr_BAZAR_14.setVisible(true);lyr_FROSHGAH_15.setVisible(true);lyr_midan_16.setVisible(true);lyr_bank_17.setVisible(true);lyr_farmandari_18.setVisible(true);lyr_pasag_19.setVisible(true);lyr_asnaf_20.setVisible(true);lyr_nezampezeshki_21.setVisible(true);lyr_darokhaneh_22.setVisible(true);lyr_Sinama_23.setVisible(true);lyr_khadamatdarmani_24.setVisible(true);lyr_pompbenzin_25.setVisible(true);lyr_Amozeshparvarash_26.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_bimarestan_1,lyr_mokhaberat_2,lyr_adarehpost_3,lyr_park_4,lyr_shorayshahr_5,lyr_zendan_6,lyr_bashgah_7,lyr_atashneshani_8,lyr_daneshgah_9,lyr_polis_10,lyr_dadgah_11,lyr_masged_12,lyr_sepah_13,lyr_BAZAR_14,lyr_FROSHGAH_15,lyr_midan_16,lyr_bank_17,lyr_farmandari_18,lyr_pasag_19,lyr_asnaf_20,lyr_nezampezeshki_21,lyr_darokhaneh_22,lyr_Sinama_23,lyr_khadamatdarmani_24,lyr_pompbenzin_25,lyr_Amozeshparvarash_26];
lyr_bimarestan_1.set('fieldAliases', {});
lyr_mokhaberat_2.set('fieldAliases', {'id': 'id', 'mokhaberat': 'mokhaberat', });
lyr_adarehpost_3.set('fieldAliases', {'id': 'id', 'adareh pos': 'adareh pos', });
lyr_park_4.set('fieldAliases', {'id': 'id', 'PARK': 'PARK', });
lyr_shorayshahr_5.set('fieldAliases', {'id': 'id', 'shoray sha': 'shoray sha', });
lyr_zendan_6.set('fieldAliases', {'id': 'id', 'zendan': 'zendan', });
lyr_bashgah_7.set('fieldAliases', {'id': 'id', 'bashgah': 'bashgah', });
lyr_atashneshani_8.set('fieldAliases', {'id': 'id', 'atashnesha': 'atashnesha', });
lyr_daneshgah_9.set('fieldAliases', {'id': 'id', 'daneshgah': 'daneshgah', });
lyr_polis_10.set('fieldAliases', {'id': 'id', 'polis': 'polis', });
lyr_dadgah_11.set('fieldAliases', {'id': 'id', 'dadgah': 'dadgah', });
lyr_masged_12.set('fieldAliases', {'id': 'id', 'masged': 'masged', });
lyr_sepah_13.set('fieldAliases', {'id': 'id', 'swepah': 'swepah', });
lyr_BAZAR_14.set('fieldAliases', {'id': 'id', 'BAZAR': 'BAZAR', });
lyr_FROSHGAH_15.set('fieldAliases', {'id': 'id', 'FROSHGAH': 'FROSHGAH', });
lyr_midan_16.set('fieldAliases', {'id': 'id', 'midan': 'midan', });
lyr_bank_17.set('fieldAliases', {'id': 'id', 'bank': 'bank', });
lyr_farmandari_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'farmandari': 'farmandari', });
lyr_pasag_19.set('fieldAliases', {'id': 'id', 'PASAG': 'PASAG', });
lyr_asnaf_20.set('fieldAliases', {'id': 'id', 'asnaf': 'asnaf', });
lyr_nezampezeshki_21.set('fieldAliases', {'id': 'id', 'nezampezes': 'nezampezes', });
lyr_darokhaneh_22.set('fieldAliases', {'id': 'id', 'darokhaneh': 'darokhaneh', });
lyr_Sinama_23.set('fieldAliases', {'id': 'id', 'sinama': 'sinama', });
lyr_khadamatdarmani_24.set('fieldAliases', {'id': 'id', 'darmani': 'darmani', });
lyr_pompbenzin_25.set('fieldAliases', {'id': 'id', 'benzin': 'benzin', });
lyr_Amozeshparvarash_26.set('fieldAliases', {'id': 'id', 'amozesh': 'amozesh', });
lyr_bimarestan_1.set('fieldImages', {});
lyr_mokhaberat_2.set('fieldImages', {'id': '', 'mokhaberat': '', });
lyr_adarehpost_3.set('fieldImages', {'id': '', 'adareh pos': '', });
lyr_park_4.set('fieldImages', {'id': '', 'PARK': '', });
lyr_shorayshahr_5.set('fieldImages', {'id': '', 'shoray sha': '', });
lyr_zendan_6.set('fieldImages', {'id': '', 'zendan': '', });
lyr_bashgah_7.set('fieldImages', {'id': '', 'bashgah': '', });
lyr_atashneshani_8.set('fieldImages', {'id': '', 'atashnesha': '', });
lyr_daneshgah_9.set('fieldImages', {'id': '', 'daneshgah': '', });
lyr_polis_10.set('fieldImages', {'id': '', 'polis': '', });
lyr_dadgah_11.set('fieldImages', {'id': 'TextEdit', 'dadgah': 'TextEdit', });
lyr_masged_12.set('fieldImages', {'id': '', 'masged': '', });
lyr_sepah_13.set('fieldImages', {'id': '', 'swepah': '', });
lyr_BAZAR_14.set('fieldImages', {'id': 'TextEdit', 'BAZAR': 'TextEdit', });
lyr_FROSHGAH_15.set('fieldImages', {'id': 'TextEdit', 'FROSHGAH': 'TextEdit', });
lyr_midan_16.set('fieldImages', {'id': 'TextEdit', 'midan': 'TextEdit', });
lyr_bank_17.set('fieldImages', {'id': 'Range', 'bank': 'TextEdit', });
lyr_farmandari_18.set('fieldImages', {'fid': '', 'id': '', 'farmandari': '', });
lyr_pasag_19.set('fieldImages', {'id': '', 'PASAG': '', });
lyr_asnaf_20.set('fieldImages', {'id': '', 'asnaf': '', });
lyr_nezampezeshki_21.set('fieldImages', {'id': '', 'nezampezes': '', });
lyr_darokhaneh_22.set('fieldImages', {'id': '', 'darokhaneh': '', });
lyr_Sinama_23.set('fieldImages', {'id': 'Range', 'sinama': 'TextEdit', });
lyr_khadamatdarmani_24.set('fieldImages', {'id': 'Range', 'darmani': 'TextEdit', });
lyr_pompbenzin_25.set('fieldImages', {'id': 'TextEdit', 'benzin': 'TextEdit', });
lyr_Amozeshparvarash_26.set('fieldImages', {'id': '', 'amozesh': '', });
lyr_bimarestan_1.set('fieldLabels', {});
lyr_mokhaberat_2.set('fieldLabels', {'id': 'no label', 'mokhaberat': 'no label', });
lyr_adarehpost_3.set('fieldLabels', {'id': 'no label', 'adareh pos': 'no label', });
lyr_park_4.set('fieldLabels', {'id': 'no label', 'PARK': 'no label', });
lyr_shorayshahr_5.set('fieldLabels', {'id': 'no label', 'shoray sha': 'no label', });
lyr_zendan_6.set('fieldLabels', {'id': 'no label', 'zendan': 'no label', });
lyr_bashgah_7.set('fieldLabels', {'id': 'no label', 'bashgah': 'no label', });
lyr_atashneshani_8.set('fieldLabels', {'id': 'no label', 'atashnesha': 'no label', });
lyr_daneshgah_9.set('fieldLabels', {'id': 'no label', 'daneshgah': 'no label', });
lyr_polis_10.set('fieldLabels', {'id': 'no label', 'polis': 'no label', });
lyr_dadgah_11.set('fieldLabels', {'id': 'no label', 'dadgah': 'no label', });
lyr_masged_12.set('fieldLabels', {'id': 'no label', 'masged': 'no label', });
lyr_sepah_13.set('fieldLabels', {'id': 'no label', 'swepah': 'no label', });
lyr_BAZAR_14.set('fieldLabels', {'id': 'no label', 'BAZAR': 'no label', });
lyr_FROSHGAH_15.set('fieldLabels', {'id': 'no label', 'FROSHGAH': 'no label', });
lyr_midan_16.set('fieldLabels', {'id': 'inline label - always visible', 'midan': 'inline label - always visible', });
lyr_bank_17.set('fieldLabels', {'id': 'inline label - always visible', 'bank': 'inline label - always visible', });
lyr_farmandari_18.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'farmandari': 'inline label - always visible', });
lyr_pasag_19.set('fieldLabels', {'id': 'inline label - always visible', 'PASAG': 'inline label - always visible', });
lyr_asnaf_20.set('fieldLabels', {'id': 'inline label - always visible', 'asnaf': 'inline label - always visible', });
lyr_nezampezeshki_21.set('fieldLabels', {'id': 'no label', 'nezampezes': 'no label', });
lyr_darokhaneh_22.set('fieldLabels', {'id': 'no label', 'darokhaneh': 'no label', });
lyr_Sinama_23.set('fieldLabels', {'id': 'no label', 'sinama': 'no label', });
lyr_khadamatdarmani_24.set('fieldLabels', {'id': 'inline label - always visible', 'darmani': 'inline label - always visible', });
lyr_pompbenzin_25.set('fieldLabels', {'id': 'inline label - always visible', 'benzin': 'inline label - always visible', });
lyr_Amozeshparvarash_26.set('fieldLabels', {'id': 'inline label - always visible', 'amozesh': 'inline label - always visible', });
lyr_Amozeshparvarash_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});