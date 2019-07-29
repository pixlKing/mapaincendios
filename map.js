mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGNhbXBhIiwiYSI6ImNqeWlzZWx3dTBkcm8zZHA1czJ4bnNuamQifQ.XZwmyx7JwQ0RLIgQlpJb1g';
var map = new mapboxgl.Map({
	container: 'container-mapaincendio---Main--mapContainer',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-60.90173,-33.30103],
	zoom: 6
});

map.on('load', function () {

	map.addLayer(
	{
		"id": "heatmapPoints",
		"type": "symbol",
		"source": {
			"type": "geojson",
			"data": {
				"type": "FeatureCollection",
				"features": [
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.08845434,
							-32.68850576
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.79811434,
							-34.22450004
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.445054,
							-31.96204284
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.41561334,
							-33.34379237
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.8889704,
							-33.30602979
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.34039221,
							-34.99712065
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.25803246,
							-34.79209571
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.59741899,
							-34.14521355
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.1783205,
							-33.03690852
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.20466302,
							-31.9494136
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.74531949,
							-32.20734868
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.1428254,
							-33.28306692
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.09774638,
							-35.10770139
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.98516044,
							-34.74154466
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.69831371,
							-34.87448986
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.57353151,
							-35.01472249
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.18089442,
							-35.0431173
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.18283386,
							-32.96488678
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.60380181,
							-34.1923487
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.520301,
							-34.85048877
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.94457918,
							-35.20225777
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.24014024,
							-32.82275413
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.69863327,
							-31.8983299
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.62327022,
							-31.92118063
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.08911073,
							-31.85364896
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.28436933,
							-32.60249077
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.16122711,
							-31.89122185
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.34349784,
							-32.02069973
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.86307286,
							-32.82429689
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.53765072,
							-32.16864198
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.3511576,
							-33.43136377
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.52258797,
							-32.06770041
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.30741281,
							-32.70513304
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.50713718,
							-34.08512811
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.64279309,
							-33.76130466
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.76541082,
							-32.09646818
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.59483329,
							-34.09513203
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.76544486,
							-32.60238266
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.77238637,
							-32.94523746
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.20293769,
							-33.34638876
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.9270041,
							-32.55641369
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.0361985,
							-35.03665461
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.48994953,
							-32.9344059
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.33216111,
							-33.58311682
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.63676479,
							-32.35344253
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.12278952,
							-33.61382148
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.51986602,
							-32.14244417
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.29071784,
							-32.08934757
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.44509431,
							-33.06519459
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.86623324,
							-32.51185102
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.81479673,
							-34.52301869
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.48677398,
							-34.67370443
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.93435292,
							-33.47003088
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.03071192,
							-32.16652542
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.7877759,
							-32.49902415
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.84601097,
							-32.15511852
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.92154252,
							-32.75086356
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.90901278,
							-32.52487729
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.95061524,
							-34.74572366
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.20023632,
							-33.21064182
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.73130534,
							-33.19868637
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.15054379,
							-32.63717954
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.92257857,
							-33.19746443
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.60900337,
							-32.01732408
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.88067746,
							-31.98788979
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.55527081,
							-34.4729801
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.86971282,
							-34.17171509
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.25976412,
							-32.37857604
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.5424073,
							-33.64177496
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.35511903,
							-34.15067223
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.9917068,
							-32.97965391
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.97356845,
							-34.79838169
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.34748802,
							-32.23966809
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.05354061,
							-33.07439419
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.35087476,
							-35.02606258
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.01946615,
							-34.37140451
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.61613244,
							-35.23931461
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.52779528,
							-31.96103794
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.71111054,
							-35.1283832
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.9780886,
							-32.96174894
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.90710214,
							-32.85904498
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.3867582,
							-33.52378368
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.33218356,
							-33.09809017
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.23306046,
							-34.05940707
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.02128052,
							-34.20683327
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.76598435,
							-32.22546951
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.41486135,
							-32.32846708
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.55692351,
							-32.09795919
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.84993112,
							-33.27953027
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.9438686,
							-33.38599359
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.95092588,
							-34.8029634
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.03252482,
							-33.82587564
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.25785243,
							-32.31536873
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.60990341,
							-33.34171595
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.95337055,
							-34.21752132
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.26867528,
							-32.10778451
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.98193134,
							-33.79431453
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.86611123,
							-32.3576829
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.94575107,
							-33.06012007
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.95752674,
							-35.17943361
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.81050214,
							-34.30066377
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.26519879,
							-34.46258588
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.65637447,
							-32.06359524
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.07615357,
							-34.99397733
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.61121376,
							-33.95584542
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.50500134,
							-32.1187976
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.04445964,
							-34.09684798
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.32832994,
							-33.72842875
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.17018259,
							-32.11622151
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.59290378,
							-33.37151029
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.53376719,
							-33.17013348
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.39643872,
							-33.94172934
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.19007894,
							-34.90634553
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.41821418,
							-33.23301327
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.06952074,
							-33.78042019
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.65957655,
							-32.46893273
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.7607787,
							-33.04002448
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.98430765,
							-35.02814269
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.75266821,
							-33.35644315
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.0805851,
							-33.77115486
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.83919474,
							-34.26680968
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.44318503,
							-33.99630138
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.28401384,
							-35.2097935
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.43115265,
							-32.93710209
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.08281942,
							-34.94215754
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.86798295,
							-34.59931394
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.82159634,
							-33.84602923
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.94399872,
							-34.42589373
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.329861,
							-34.12594423
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.27962667,
							-33.28988092
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.44723746,
							-33.8651792
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.79654373,
							-34.89283998
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.37887601,
							-33.10517088
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.81843251,
							-34.31250992
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.85952856,
							-32.99210812
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.22363963,
							-33.29223284
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.26712245,
							-31.85856258
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.74389429,
							-34.12208806
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.36110365,
							-33.27595195
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.08259954,
							-32.86388113
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.59501699,
							-34.09607194
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.79288011,
							-33.93557334
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.84179099,
							-34.93385842
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.19374957,
							-32.73385271
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.80864607,
							-32.40347588
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.42243558,
							-32.85343995
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.83000177,
							-34.7918483
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.14839733,
							-32.50376907
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.22862409,
							-33.75678655
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.37395805,
							-34.11380662
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.55912282,
							-32.32486514
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.38237228,
							-35.18086656
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.48489835,
							-33.20494863
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.6350194,
							-34.86537726
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.21891476,
							-32.66422977
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.76760853,
							-35.09694357
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.20444782,
							-34.28504263
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.02031279,
							-33.80620628
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.89214642,
							-31.96073567
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.81493968,
							-34.82835404
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.36178265,
							-33.80634181
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.77805587,
							-34.93198763
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.23228629,
							-34.09971073
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.36891384,
							-33.82861862
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.02839946,
							-34.32388181
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.08375248,
							-33.48800766
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.51231202,
							-34.18010593
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.87693623,
							-32.82479916
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.82556485,
							-33.32683872
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.36679385,
							-32.99915459
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.41344952,
							-32.6180955
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.86499561,
							-32.94867804
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.23679286,
							-32.86529242
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.82368847,
							-33.51814919
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.82705458,
							-32.43519915
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.66558801,
							-33.34218512
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.65907381,
							-33.74821273
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.80038944,
							-31.87447323
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.30686075,
							-34.77104731
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.85840635,
							-32.16806688
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.72349272,
							-33.75688412
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.94256881,
							-35.2475272
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.33781996,
							-34.37611227
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.96380796,
							-32.54050803
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.17269969,
							-33.39342381
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.87969397,
							-32.30051382
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.22948428,
							-34.44352903
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.49535371,
							-34.95894288
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.5975011,
							-34.84495194
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.5719048,
							-33.30147472
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.81218497,
							-32.61672952
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.960566,
							-34.95547899
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.85243755,
							-32.69690281
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.73592592,
							-32.57945463
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.06327246,
							-34.26307057
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.55598976,
							-33.23661147
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.78222158,
							-33.33968123
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.73372474,
							-33.61306321
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.92189982,
							-33.07871311
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.3105917,
							-32.99628334
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.95060618,
							-34.19191947
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.88604581,
							-34.76894008
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.86888542,
							-33.14960738
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.3247696,
							-34.94839033
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.16382019,
							-33.8094614
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.35375698,
							-33.01147386
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.90928612,
							-34.520533
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.73523331,
							-34.75749543
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.41892825,
							-32.79349978
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.23179241,
							-31.9182529
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.35466421,
							-33.20621683
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.2658917,
							-32.34671796
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.28336461,
							-35.03527373
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.30084462,
							-32.01108067
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.18048064,
							-33.23597481
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.98333798,
							-32.71256776
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.30578701,
							-32.91738253
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.18086049,
							-33.26610491
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.49399348,
							-34.46041886
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.78563203,
							-33.81384088
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.1214856,
							-34.27864191
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.61165865,
							-34.00292866
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.26054771,
							-34.19534868
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.9281267,
							-32.24200349
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.32949777,
							-34.59695794
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.05584474,
							-33.83144603
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.18319769,
							-32.50564489
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.26854779,
							-32.92814162
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.49818204,
							-32.26275402
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.13361022,
							-34.36359975
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.1427254,
							-33.57293104
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.60643496,
							-33.21747327
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.99790303,
							-32.88022114
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.54365874,
							-33.86861188
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.21824321,
							-32.57987431
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.38291683,
							-33.874006
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.93108724,
							-32.80024125
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.42342647,
							-33.6343478
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.14717389,
							-32.87717617
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.19272128,
							-34.59820249
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.85695875,
							-32.02050373
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.79495506,
							-32.84852922
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.96299239,
							-34.75402499
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.74066933,
							-32.87745561
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.43906923,
							-33.15426701
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.08388048,
							-34.33898978
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.48501652,
							-31.87885708
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.59413717,
							-34.23880199
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.01593984,
							-32.72652634
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.31337955,
							-32.68745889
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.67894778,
							-34.52830605
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.72399308,
							-32.79876922
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.96196477,
							-32.09706371
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.49464535,
							-32.48280204
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.20708771,
							-31.99947597
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.82303509,
							-35.15201129
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.99862617,
							-33.1304735
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.21945203,
							-33.48258156
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.71803671,
							-33.54588114
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.42641587,
							-32.11195513
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.95854205,
							-32.84527954
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.36929846,
							-34.23599485
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.36320823,
							-34.62006169
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.94173137,
							-34.15073107
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.0838086,
							-34.88008924
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.58038395,
							-32.90374702
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.47337933,
							-34.1255776
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.76859643,
							-34.93552802
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.05529361,
							-34.33362985
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.51687126,
							-33.36418985
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.67750419,
							-34.55772156
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.54465768,
							-34.45105983
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.87577514,
							-32.45341269
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.05200248,
							-33.58776153
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.45871939,
							-34.01952742
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.70991762,
							-34.14830243
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.87421545,
							-33.03557856
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.36006855,
							-33.9310521
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.50576548,
							-35.07579549
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.99745171,
							-32.10674858
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.86615426,
							-33.14840813
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.79927468,
							-34.77216382
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.0115031,
							-33.10767466
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.99483883,
							-32.58885078
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.15859654,
							-35.19871051
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.72756582,
							-33.7905882
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.90156265,
							-33.30127578
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.56541801,
							-33.89749848
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.34841652,
							-34.59571859
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.79577007,
							-31.8522434
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.13980564,
							-32.10042092
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.28921522,
							-33.69299892
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.447341,
							-34.37103522
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.5817742,
							-34.28924203
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.51749321,
							-32.9811647
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.29885596,
							-33.30496614
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.16787289,
							-34.46016836
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.81928297,
							-34.72825192
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.88284641,
							-33.72105465
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.84524254,
							-31.93731196
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.11561511,
							-35.16991135
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.71272163,
							-32.11034047
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.72679859,
							-34.34247593
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.72273632,
							-33.04843999
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.01771453,
							-32.04548148
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.35560703,
							-34.50656415
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.21192191,
							-32.85898571
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.26070503,
							-32.12741851
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.88970942,
							-32.99888206
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.48191343,
							-33.17423963
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.59874734,
							-32.62770083
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.49779572,
							-32.94855799
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.97411769,
							-33.25654059
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.114414,
							-32.98669022
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.55186939,
							-32.12755662
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.62453796,
							-33.83564161
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.08778714,
							-32.36302626
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.29268933,
							-32.1701885
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.46374586,
							-31.84852468
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.28197984,
							-34.07747404
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.3833576,
							-32.66801909
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.82066421,
							-34.13455785
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.3707606,
							-32.35368042
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.56976098,
							-34.03827047
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.7340343,
							-34.75412092
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.99680366,
							-34.45579066
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.01522115,
							-34.71750848
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.54128472,
							-32.63636652
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.14425846,
							-32.3122794
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.69872124,
							-33.74590566
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.48029899,
							-32.16563058
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.28454023,
							-32.00755687
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.80928279,
							-32.26719947
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.4906363,
							-33.77783739
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.49370059,
							-31.91980411
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.62089787,
							-33.16808922
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.96496471,
							-33.91988893
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.79315797,
							-33.91258672
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.27996257,
							-32.94892822
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.56052084,
							-32.73780421
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.29874415,
							-33.42247325
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.83635749,
							-33.61889044
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.77182947,
							-32.74450413
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.31916738,
							-32.51077305
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.30935472,
							-33.2027843
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.99945616,
							-34.40840996
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.76943796,
							-34.95951084
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.4580458,
							-32.82597329
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.32354183,
							-33.93453958
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.82213317,
							-32.81495431
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.75103613,
							-34.33070266
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.00221368,
							-35.08875054
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.75759001,
							-33.15205
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.28841775,
							-32.27124033
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.3766658,
							-31.8492527
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.17551915,
							-34.872207
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.03333722,
							-34.06875825
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.3000068,
							-35.0014101
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.74724024,
							-34.1209194
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.97176754,
							-34.76744203
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.16614969,
							-32.2701191
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.67652076,
							-32.73142444
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.59498484,
							-32.73802642
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.33902173,
							-34.68626968
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.64459596,
							-32.48343532
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.68913793,
							-33.76840701
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.54545004,
							-34.89668828
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.55525118,
							-33.57240542
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.42370833,
							-34.95453306
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.68942964,
							-33.16643186
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.86715154,
							-33.63861115
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.85807273,
							-33.66495846
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.85674242,
							-35.1473771
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.32556756,
							-32.73182238
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.49376237,
							-32.90444092
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.26298203,
							-34.17059188
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.35416294,
							-32.79272854
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.59053567,
							-34.67135538
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.86936643,
							-34.98241667
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.53871858,
							-33.48607574
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.86923394,
							-35.22503618
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.29535296,
							-32.27240134
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.51176353,
							-34.40071348
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.12010581,
							-31.91867695
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.98017125,
							-31.99721819
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.96284973,
							-34.46286073
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.10717197,
							-35.1846673
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.96703534,
							-34.20377664
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.95412011,
							-35.12530585
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.43166412,
							-32.87253298
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.04516823,
							-34.72445135
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.8543067,
							-32.35155923
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.2645092,
							-33.05557085
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.19298686,
							-34.30072896
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.00828043,
							-34.76211746
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.62445402,
							-34.86316197
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.17411912,
							-34.96832431
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.99068154,
							-32.45202491
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.69564174,
							-31.84482289
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.62580268,
							-34.1231676
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.13813062,
							-35.13686643
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.34218081,
							-34.20575715
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.63538167,
							-31.93744239
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.74726771,
							-33.76698809
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.76519617,
							-34.17609979
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.27802299,
							-35.07572084
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.60713107,
							-34.91420733
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.73901697,
							-33.20258698
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.7516145,
							-33.14029849
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.84822353,
							-34.8374077
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.91513264,
							-32.2800709
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.3776436,
							-34.79889632
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.47605781,
							-34.49192427
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.0551039,
							-32.53207242
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.73016539,
							-33.15502681
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.35041781,
							-32.22171307
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.07013736,
							-32.78875731
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.34533151,
							-32.40749474
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.17344992,
							-33.76584795
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.83723283,
							-34.81465987
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.91908644,
							-34.74987886
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.32409891,
							-33.56336436
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.50314129,
							-34.44695623
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.80036874,
							-32.34830471
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.4076309,
							-31.86216653
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.77062398,
							-32.86510003
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.71405625,
							-33.28709397
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.09963746,
							-33.07960892
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.80924307,
							-32.13730341
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.26603669,
							-32.02058152
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.50270681,
							-33.72052417
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.90991333,
							-33.86750742
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.5730405,
							-35.05183195
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.38811281,
							-34.45935742
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.12707504,
							-33.80844307
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.11961379,
							-33.56229429
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.18040897,
							-32.53976285
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.50831324,
							-34.26804756
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.49555434,
							-34.89657673
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.45983156,
							-33.81998348
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.37801852,
							-34.18586348
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.70696569,
							-32.0868709
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.91683111,
							-32.57215199
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.39876963,
							-32.47930363
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.47105514,
							-34.56160161
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.07031539,
							-32.75391982
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.74935255,
							-35.05167358
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.74108488,
							-33.82951802
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.94167912,
							-33.82462037
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.89642396,
							-34.42817272
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.84659905,
							-34.08583842
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.89904506,
							-33.45973695
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.01002557,
							-32.71281308
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.16264701,
							-33.32186225
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.90348527,
							-33.83673156
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.81783298,
							-34.38489659
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.84681274,
							-35.22256483
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.42058966,
							-32.87806456
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.8426243,
							-33.15260663
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.43696804,
							-35.23461656
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.1197761,
							-34.18996882
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.58191013,
							-32.03949533
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.03391871,
							-34.22574596
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.89666463,
							-34.02895318
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.86928652,
							-32.78673188
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.31964778,
							-32.87471617
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.55113295,
							-34.37924217
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.16759777,
							-33.1671693
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.11440108,
							-31.88247655
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.152146,
							-34.28551143
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.56474378,
							-34.31877998
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.68818841,
							-32.453209
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.04032612,
							-32.23170548
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.86616149,
							-34.76440444
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.47665617,
							-33.61924965
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.8324843,
							-32.14728826
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.25740015,
							-32.344178
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.55807953,
							-34.8417958
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.49623159,
							-33.35350056
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.27086102,
							-32.73155395
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.97831596,
							-34.51956653
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.82884677,
							-32.78507464
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.18834628,
							-35.22808632
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.59122138,
							-35.24034025
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.45936644,
							-32.10103435
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.09164972,
							-34.30818759
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.69510019,
							-34.07918027
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.1105063,
							-33.63574364
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.81496526,
							-32.30368553
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.70545242,
							-35.11572465
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.74244761,
							-32.11851934
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.98499218,
							-32.58402735
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.81757765,
							-32.83584275
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.42232588,
							-34.47362199
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.75251359,
							-34.31347098
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.76718331,
							-33.64850945
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.14736663,
							-32.01346183
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.74515429,
							-32.80889859
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.5354181,
							-33.59210338
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.32769473,
							-33.70460056
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.66818076,
							-33.20814698
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.23297883,
							-32.89425258
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.04754084,
							-33.59303501
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.62842736,
							-33.09279231
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.13110722,
							-31.8815544
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.85616931,
							-34.39168318
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.28216843,
							-33.9557414
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.28857852,
							-34.38888696
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.09249411,
							-35.19211579
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.18491884,
							-33.04133333
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.44992458,
							-34.94279738
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.28562935,
							-32.15317272
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.89964083,
							-35.24682719
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.17676646,
							-31.89561405
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.7674449,
							-32.92345308
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.6308819,
							-33.03212148
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.024837,
							-31.84464815
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.47511204,
							-32.01315688
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.61451727,
							-34.75881773
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.65346248,
							-34.54454159
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.03891195,
							-33.00762958
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.12673531,
							-35.20490259
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.59334602,
							-32.2874464
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.01365034,
							-32.14560277
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.57321845,
							-33.91571537
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.57732915,
							-34.98932557
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.87409415,
							-32.16504659
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.1518362,
							-34.40984389
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.69421796,
							-32.3663621
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.83684788,
							-35.00834688
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.61303928,
							-34.62937547
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.56640302,
							-32.3985207
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.9030525,
							-32.96705335
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.72240248,
							-33.35688865
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.63126048,
							-32.93136589
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.69022225,
							-32.7270463
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.38386423,
							-32.09410034
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.21576737,
							-35.23277187
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.25522477,
							-32.32883455
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.7365397,
							-34.35549374
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.88865939,
							-32.60992709
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.45941444,
							-32.86624829
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.12452879,
							-34.77814796
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.9426595,
							-34.77175531
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.50176178,
							-31.93143464
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.16655537,
							-32.83474716
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.11535524,
							-32.81550817
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.09311645,
							-32.524333
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.89771021,
							-32.51885793
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.74500891,
							-33.77857383
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.51750589,
							-32.31683686
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.03452107,
							-33.40748095
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.50340028,
							-34.56121409
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.34864172,
							-34.04577355
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.76212243,
							-34.13292701
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.97939125,
							-34.35448782
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.8502595,
							-33.43933686
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.66647373,
							-33.98000341
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.12560031,
							-34.75591844
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.27082922,
							-33.84194676
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.5218988,
							-34.15744116
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.87820888,
							-34.6885165
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.26902452,
							-32.18510037
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.58642787,
							-33.30680495
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.83590932,
							-31.95586449
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.94257356,
							-32.11762509
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.092196,
							-33.35400356
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.27017114,
							-32.07613834
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.2112145,
							-34.16331056
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.0461154,
							-32.26814256
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.41509053,
							-33.32664644
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.3988249,
							-34.65154215
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.17265943,
							-32.84633883
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.3635673,
							-34.33207798
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.42541755,
							-34.41385527
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.78185114,
							-34.67385351
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.87379464,
							-34.73522097
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.88125915,
							-34.15688335
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.00152386,
							-35.1530661
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.44833645,
							-32.84600902
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.07669018,
							-32.05190713
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.72075867,
							-35.08552973
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.98018211,
							-33.29053637
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.00609352,
							-33.84147172
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.98661554,
							-33.0810778
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.55619548,
							-34.46800501
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.55878331,
							-32.85150571
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.0984256,
							-34.40979805
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.58433792,
							-33.88451203
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.5069706,
							-32.48068493
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.8972548,
							-32.76952921
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.01138377,
							-34.64104257
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.10339556,
							-33.59360644
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.87970415,
							-33.59916035
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.84009433,
							-34.09101105
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.5362908,
							-34.95315879
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.88692897,
							-32.54579701
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.06964108,
							-32.94195591
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.83892338,
							-32.74544618
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.76557933,
							-31.92480755
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.43813679,
							-32.36869381
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.41415217,
							-34.86791857
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.26391717,
							-34.93559411
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.67482724,
							-34.48815848
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.13507591,
							-32.38891837
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.16947952,
							-34.50860669
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.64218068,
							-33.69492747
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.46615802,
							-32.21323441
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.98448718,
							-33.55319447
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.81255716,
							-32.8399647
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.75481289,
							-35.04549922
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.53116211,
							-32.63757867
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.28330189,
							-34.79834131
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.04730874,
							-33.79694557
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.79631516,
							-31.86384016
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.78076407,
							-34.15737588
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.70208695,
							-33.03287065
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.92439144,
							-32.91562811
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.58097278,
							-32.38332612
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.64819603,
							-34.85639749
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.98660419,
							-34.40490282
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.86726546,
							-32.70873288
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.57691407,
							-34.73228072
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.94331914,
							-33.66174901
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.77506338,
							-32.70687232
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.21696816,
							-32.54683792
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.99041107,
							-33.10587483
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.61607636,
							-34.62739628
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.19022128,
							-34.14391488
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.63461262,
							-32.40059764
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.76211341,
							-32.83708929
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.77188898,
							-33.6700491
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.5370137,
							-32.65029596
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.78841206,
							-32.11645315
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.90308816,
							-34.54437541
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.5220086,
							-33.51032645
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.26897546,
							-34.12966101
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.45689772,
							-34.02910614
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.20990582,
							-32.44824084
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.30576984,
							-32.00289158
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.83795104,
							-32.89802119
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.23539402,
							-35.03415662
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.79753319,
							-32.0229892
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.60835937,
							-34.21481851
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.88928371,
							-32.29934777
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.58677617,
							-32.35265637
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.91080979,
							-32.32221289
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.39900386,
							-34.00847514
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.21568157,
							-33.57482567
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.77739797,
							-32.20283034
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.92471296,
							-34.70144697
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.40384288,
							-34.96402977
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.57372404,
							-32.06124923
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.42826298,
							-35.09340721
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.08587696,
							-33.71745933
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.84083558,
							-33.69555035
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.69627678,
							-34.63155228
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.94059873,
							-35.19990895
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.94709187,
							-32.43928128
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.05607601,
							-34.76384795
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.4167017,
							-34.16855397
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.11346771,
							-33.87012858
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.07455416,
							-34.91116777
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.90170899,
							-33.34978434
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.09998994,
							-33.15505758
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.59749306,
							-34.48520775
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.16161011,
							-33.7450481
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.10058795,
							-34.21649533
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.20009918,
							-33.24356058
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.98306861,
							-33.97510087
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.66793455,
							-32.72222476
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.75431764,
							-33.06871791
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.5193724,
							-34.88435998
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.90742792,
							-34.52926985
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.09053969,
							-32.86176481
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.08349076,
							-32.64858001
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.34728728,
							-33.36778265
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.07427227,
							-33.2067335
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.67077385,
							-34.95062882
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.72399537,
							-32.34139027
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.1117719,
							-34.65965752
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.93406649,
							-33.605175
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.57000091,
							-34.7944174
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.91546873,
							-32.58031445
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.34602847,
							-32.48518568
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.3539894,
							-32.54490866
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.84380883,
							-34.38274652
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.43707433,
							-33.03926814
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.87834346,
							-34.9638025
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.12274716,
							-32.00902376
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.9602315,
							-34.86317304
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.08692224,
							-32.79939933
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.71702599,
							-32.89512554
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.21292893,
							-34.90282353
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.0915939,
							-33.76399726
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.18053335,
							-34.42699392
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.6286363,
							-32.68330673
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.45181976,
							-33.669964
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.04739058,
							-32.54629783
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.67701621,
							-33.59760373
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.09365209,
							-34.66777753
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.32406137,
							-34.30093079
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.80680036,
							-35.23711258
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.23090281,
							-35.0302695
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.723443,
							-33.35258739
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.6807993,
							-35.09891843
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.79471041,
							-34.7378852
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.64081509,
							-32.74674226
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.33350463,
							-32.86921646
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.46301984,
							-33.82729365
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.15380111,
							-32.32441937
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.19675064,
							-33.44282247
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.44440424,
							-33.47505212
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.47746871,
							-34.71587387
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.30539655,
							-34.184684
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.78924641,
							-31.84689801
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.54070313,
							-33.88049998
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.62121375,
							-33.51671917
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.26136705,
							-34.57233312
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.72649241,
							-34.90205152
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.5833196,
							-33.34168247
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.88387136,
							-32.70142964
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.02638042,
							-33.85215712
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.07030253,
							-34.13211682
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.26437267,
							-34.73777655
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.82930007,
							-32.25096807
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.32380275,
							-33.03032469
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.64021201,
							-34.45030373
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.20979683,
							-35.02242173
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.07575464,
							-32.43403576
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.28677271,
							-35.17662364
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.72030001,
							-34.04465476
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.68017602,
							-33.12553041
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.21820283,
							-32.27225303
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.7884023,
							-33.78368348
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.1823708,
							-33.65902244
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.83003387,
							-32.02016259
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.53346244,
							-33.41524293
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.69606979,
							-32.07455188
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.89516658,
							-32.21641505
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.62886904,
							-33.37844638
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.68527435,
							-34.64394015
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.03379239,
							-32.44327924
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.93744336,
							-35.06029993
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.77958789,
							-34.41468073
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.78141013,
							-31.90069389
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.34584553,
							-34.28458646
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.95451874,
							-32.9452849
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.66033869,
							-33.55953984
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.53601026,
							-32.79571093
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.94819343,
							-34.55475665
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.88684511,
							-34.96491682
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.03086305,
							-32.32347864
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.32756132,
							-33.42201417
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.70150229,
							-33.47178886
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.92270678,
							-33.02276493
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.98941475,
							-34.73916935
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.83151723,
							-34.91809869
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.92159812,
							-32.25210528
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.73012945,
							-32.01610254
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.88075373,
							-33.56740109
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.43424904,
							-34.99537826
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.74772419,
							-32.17161504
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.44369458,
							-32.48905637
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.89701045,
							-32.41150186
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.84680805,
							-32.44132907
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.9193623,
							-33.04341355
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.40848817,
							-32.34738595
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.00336184,
							-32.70357133
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.48327868,
							-32.50552917
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.78182126,
							-31.90905434
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.70291357,
							-34.08196019
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.78196647,
							-32.46292679
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.01282276,
							-32.36028653
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.00066441,
							-32.02370934
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.61196216,
							-33.12604724
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.70192922,
							-34.73992768
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.33147001,
							-32.72447582
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.47144409,
							-32.25089384
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.63304537,
							-35.0309922
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.48696616,
							-33.35534514
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.55718835,
							-33.26925317
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.96830278,
							-33.81878418
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.30147232,
							-34.25823448
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.02663599,
							-32.09998443
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.53676961,
							-33.06195731
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.36959536,
							-32.10992071
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.44609351,
							-34.27130202
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.52084368,
							-32.46429704
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.21458199,
							-32.96873686
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.52192727,
							-32.37672545
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.48390044,
							-33.90631935
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.22640289,
							-33.60408064
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.15261598,
							-34.46863129
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.10034552,
							-33.5664176
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.36177275,
							-33.81626995
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.40911831,
							-34.01556225
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.73709408,
							-34.36961419
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.18294013,
							-32.11836023
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.93261901,
							-33.35092895
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.15600811,
							-34.79641576
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.7
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.37696542,
							-32.36393045
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.76038941,
							-35.09008108
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.39990317,
							-34.27714621
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.93874012,
							-33.04182365
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.51385499,
							-33.6251639
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.93602733,
							-32.77528035
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.31846563,
							-32.23255082
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-58.9097963,
							-34.30523585
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.2
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.21927062,
							-32.60486438
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.41423538,
							-33.73701286
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.69847983,
							-34.95125887
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.67160077,
							-33.65163572
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.6
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.83233295,
							-33.13089597
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.25118224,
							-33.11968832
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.97663524,
							-33.62571963
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-60.15049285,
							-33.54730768
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.41365981,
							-35.11354114
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-62.86222716,
							-34.95995866
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.89176603,
							-32.28960436
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.5
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-59.14430351,
							-33.0792519
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.72994537,
							-33.35402018
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.3
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.08858679,
							-33.94576917
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.9
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.38814761,
							-31.95409436
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.8
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-63.11526231,
							-34.17496987
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.4
						}
					},
					{
						"geometry": {
							"type": "Point",
							"coordinates": [
							-61.7568393,
							-32.40904415
							]
						},
						"type": "Feature",
						"properties": {
							"foiPredictionScore": 0.1
						}
					}
					]
				}
			},
			"layout": {
				"text-field": "{foiPredictionScore}",
				"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
				"text-offset": [0, 0.6],
				"text-anchor": "top"
			}
		}
	);
});