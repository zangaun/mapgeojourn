var wms_layers = [];

var format_FOCOSINPEROJANOUT2024inmap_0 = new ol.format.GeoJSON();
var features_FOCOSINPEROJANOUT2024inmap_0 = format_FOCOSINPEROJANOUT2024inmap_0.readFeatures(json_FOCOSINPEROJANOUT2024inmap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOCOSINPEROJANOUT2024inmap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOCOSINPEROJANOUT2024inmap_0.addFeatures(features_FOCOSINPEROJANOUT2024inmap_0);
var lyr_FOCOSINPEROJANOUT2024inmap_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOCOSINPEROJANOUT2024inmap_0, 
                style: style_FOCOSINPEROJANOUT2024inmap_0,
                popuplayertitle: "FOCOS INPE RO JAN OUT 2024 inmap",
                interactive: true,
    title: 'FOCOS INPE RO JAN OUT 2024 inmap<br />\
    <img src="styles/legend/FOCOSINPEROJANOUT2024inmap_0_0.png" /> 0 - 772838<br />\
    <img src="styles/legend/FOCOSINPEROJANOUT2024inmap_0_1.png" /> 772838 - 2729316<br />\
    <img src="styles/legend/FOCOSINPEROJANOUT2024inmap_0_2.png" /> 2729316 - 5922389<br />\
    <img src="styles/legend/FOCOSINPEROJANOUT2024inmap_0_3.png" /> 5922389 - 10587213<br />\
    <img src="styles/legend/FOCOSINPEROJANOUT2024inmap_0_4.png" /> 10587213 - 22580380<br />\
    <img src="styles/legend/FOCOSINPEROJANOUT2024inmap_0_5.png" /> 22580380 - 54283784<br />'
        });
var format_focos_qmd_inpe_20240101_20241031_07_1 = new ol.format.GeoJSON();
var features_focos_qmd_inpe_20240101_20241031_07_1 = format_focos_qmd_inpe_20240101_20241031_07_1.readFeatures(json_focos_qmd_inpe_20240101_20241031_07_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_focos_qmd_inpe_20240101_20241031_07_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_focos_qmd_inpe_20240101_20241031_07_1.addFeatures(features_focos_qmd_inpe_20240101_20241031_07_1);
var lyr_focos_qmd_inpe_20240101_20241031_07_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_focos_qmd_inpe_20240101_20241031_07_1, 
                style: style_focos_qmd_inpe_20240101_20241031_07_1,
                popuplayertitle: "focos_qmd_inpe_2024-01-01_2024-10-31_07",
                interactive: true,
                title: '<img src="styles/legend/focos_qmd_inpe_20240101_20241031_07_1.png" /> focos_qmd_inpe_2024-01-01_2024-10-31_07'
            });

lyr_FOCOSINPEROJANOUT2024inmap_0.setVisible(true);lyr_focos_qmd_inpe_20240101_20241031_07_1.setVisible(true);
var layersList = [lyr_FOCOSINPEROJANOUT2024inmap_0,lyr_focos_qmd_inpe_20240101_20241031_07_1];
lyr_FOCOSINPEROJANOUT2024inmap_0.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', 'Municipio': 'Municipio', 'FRP': 'FRP', 'F_RP': 'F_RP', });
lyr_focos_qmd_inpe_20240101_20241031_07_1.set('fieldAliases', {'DataHora': 'DataHora', 'Satelite': 'Satelite', 'Pais': 'Pais', 'Estado': 'Estado', 'Municipio': 'Municipio', 'Bioma': 'Bioma', 'DiaSemChuv': 'DiaSemChuv', 'Precipitac': 'Precipitac', 'RiscoFogo': 'RiscoFogo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'FRP': 'FRP', });
lyr_FOCOSINPEROJANOUT2024inmap_0.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', 'Municipio': 'TextEdit', 'FRP': 'TextEdit', 'F_RP': 'TextEdit', });
lyr_focos_qmd_inpe_20240101_20241031_07_1.set('fieldImages', {'DataHora': '', 'Satelite': '', 'Pais': '', 'Estado': '', 'Municipio': '', 'Bioma': '', 'DiaSemChuv': '', 'Precipitac': '', 'RiscoFogo': '', 'Latitude': '', 'Longitude': '', 'FRP': '', });
lyr_FOCOSINPEROJANOUT2024inmap_0.set('fieldLabels', {'CD_MUN': 'hidden field', 'NM_MUN': 'hidden field', 'SIGLA_UF': 'hidden field', 'AREA_KM2': 'hidden field', 'Municipio': 'header label - always visible', 'FRP': 'inline label - visible with data', 'F_RP': 'hidden field', });
lyr_focos_qmd_inpe_20240101_20241031_07_1.set('fieldLabels', {'DataHora': 'no label', 'Satelite': 'no label', 'Pais': 'no label', 'Estado': 'hidden field', 'Municipio': 'hidden field', 'Bioma': 'hidden field', 'DiaSemChuv': 'hidden field', 'Precipitac': 'hidden field', 'RiscoFogo': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'FRP': 'hidden field', });
lyr_focos_qmd_inpe_20240101_20241031_07_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});