// ../packages/print-studio/dist/cost-sheet-JXq3Qtzw.js
var e = [
	{
		description: "成本核算单的核算单位名称",
		key: "company",
		label: "核算单位",
		sampleData: { name: "苏州普印精密制造有限公司" },
		schema: [{
			label: "单位名称",
			name: "name",
			type: "string"
		}],
		type: "object"
	},
	{
		description: "成本核算单的编制与审批信息",
		key: "cost",
		label: "核算信息",
		sampleData: {
			approver: "张伟明",
			department: "财务部",
			notes: "本月成本数据截至当月月末，材料价格按当月加权平均价核算。",
			period: "2026年10月",
			preparer: "李慧",
			reviewer: "王建国",
			sheetNo: "CB202610-018"
		},
		schema: [
			{
				label: "核算期间",
				name: "period",
				type: "string"
			},
			{
				label: "单据编号",
				name: "sheetNo",
				type: "string"
			},
			{
				label: "编制部门",
				name: "department",
				type: "string"
			},
			{
				label: "编制说明",
				name: "notes",
				type: "string"
			},
			{
				label: "制表人",
				name: "preparer",
				type: "string"
			},
			{
				label: "审核人",
				name: "reviewer",
				type: "string"
			},
			{
				label: "审批人",
				name: "approver",
				type: "string"
			}
		],
		type: "object"
	},
	{
		description: "成本核算单的分类汇总行",
		key: "costSummary",
		label: "成本汇总",
		sampleData: [
			{
				amount: 93847,
				category: "直接材料",
				note: "以领料单汇总",
				ratio: "41.7%"
			},
			{
				amount: 57572,
				category: "直接人工",
				note: "以工资单汇总",
				ratio: "25.6%"
			},
			{
				amount: 44932,
				category: "制造费用",
				note: "制造费用与其他费用合并列示",
				ratio: "20.0%"
			},
			{
				amount: 28634,
				category: "其他费用",
				note: "",
				ratio: ""
			}
		],
		schema: [
			{
				label: "成本项目",
				name: "category",
				type: "string"
			},
			{
				label: "金额（元）",
				name: "amount",
				type: "number"
			},
			{
				label: "占比",
				name: "ratio",
				type: "string"
			},
			{
				label: "备注",
				name: "note",
				type: "string"
			}
		],
		type: "array"
	},
	{
		description: "成本核算单的费用明细行",
		key: "costItems",
		label: "成本明细",
		sampleData: [
			{
				amount: 53010,
				category: "直接材料",
				detail: "铝合金板材2mm",
				price: 28.5,
				quantity: 1860,
				ratio: "23.6%",
				unit: "kg"
			},
			{
				amount: 15456,
				category: "直接材料",
				detail: "ABS工程塑料",
				price: 16.8,
				quantity: 920,
				ratio: "6.9%",
				unit: "kg"
			},
			{
				amount: 8320,
				category: "直接材料",
				detail: "包装纸箱5号",
				price: 3.2,
				quantity: 2600,
				ratio: "3.7%",
				unit: "只"
			},
			{
				amount: 513,
				category: "直接材料",
				detail: "冲压工序",
				price: 9,
				quantity: 57,
				ratio: "0.2%",
				unit: "批"
			},
			{
				amount: 752.5,
				category: "直接材料",
				detail: "装配工序",
				price: 10.75,
				quantity: 70,
				ratio: "0.3%",
				unit: "kg"
			},
			{
				amount: 1037.5,
				category: "直接材料",
				detail: "车间水电费",
				price: 12.5,
				quantity: 83,
				ratio: "0.5%",
				unit: "只"
			},
			{
				amount: 1368,
				category: "直接材料",
				detail: "设备折旧",
				price: 14.25,
				quantity: 96,
				ratio: "0.6%",
				unit: "工时"
			},
			{
				amount: 1744,
				category: "直接材料",
				detail: "模具摊销",
				price: 16,
				quantity: 109,
				ratio: "0.8%",
				unit: "台"
			},
			{
				amount: 2165.5,
				category: "直接材料",
				detail: "质检费用",
				price: 17.75,
				quantity: 122,
				ratio: "1.0%",
				unit: "批"
			},
			{
				amount: 2632.5,
				category: "直接材料",
				detail: "铝合金板材2mm",
				price: 19.5,
				quantity: 135,
				ratio: "1.2%",
				unit: "kg"
			},
			{
				amount: 3145,
				category: "直接材料",
				detail: "ABS工程塑料",
				price: 21.25,
				quantity: 148,
				ratio: "1.4%",
				unit: "只"
			},
			{
				amount: 3703,
				category: "直接材料",
				detail: "包装纸箱5号",
				price: 23,
				quantity: 161,
				ratio: "1.6%",
				unit: "工时"
			},
			{
				amount: 28800,
				category: "直接人工",
				detail: "冲压工序",
				price: 45,
				quantity: 640,
				ratio: "12.8%",
				unit: "工时"
			},
			{
				amount: 18240,
				category: "直接人工",
				detail: "装配工序",
				price: 38,
				quantity: 480,
				ratio: "8.1%",
				unit: "工时"
			},
			{
				amount: 319,
				category: "直接人工",
				detail: "包装纸箱5号",
				price: 7.25,
				quantity: 44,
				ratio: "0.1%",
				unit: "台"
			},
			{
				amount: 513,
				category: "直接人工",
				detail: "冲压工序",
				price: 9,
				quantity: 57,
				ratio: "0.2%",
				unit: "批"
			},
			{
				amount: 752.5,
				category: "直接人工",
				detail: "装配工序",
				price: 10.75,
				quantity: 70,
				ratio: "0.3%",
				unit: "kg"
			},
			{
				amount: 1037.5,
				category: "直接人工",
				detail: "车间水电费",
				price: 12.5,
				quantity: 83,
				ratio: "0.5%",
				unit: "只"
			},
			{
				amount: 1368,
				category: "直接人工",
				detail: "设备折旧",
				price: 14.25,
				quantity: 96,
				ratio: "0.6%",
				unit: "工时"
			},
			{
				amount: 1744,
				category: "直接人工",
				detail: "模具摊销",
				price: 16,
				quantity: 109,
				ratio: "0.8%",
				unit: "台"
			},
			{
				amount: 2165.5,
				category: "直接人工",
				detail: "质检费用",
				price: 17.75,
				quantity: 122,
				ratio: "1.0%",
				unit: "批"
			},
			{
				amount: 2632.5,
				category: "直接人工",
				detail: "铝合金板材2mm",
				price: 19.5,
				quantity: 135,
				ratio: "1.2%",
				unit: "kg"
			},
			{
				amount: 21600,
				category: "制造费用",
				detail: "车间水电费",
				price: 21600,
				quantity: 1,
				ratio: "9.6%",
				unit: "月"
			},
			{
				amount: 12800,
				category: "制造费用",
				detail: "设备折旧",
				price: 12800,
				quantity: 1,
				ratio: "5.7%",
				unit: "月"
			},
			{
				amount: 319,
				category: "制造费用",
				detail: "包装纸箱5号",
				price: 7.25,
				quantity: 44,
				ratio: "0.1%",
				unit: "台"
			},
			{
				amount: 513,
				category: "制造费用",
				detail: "冲压工序",
				price: 9,
				quantity: 57,
				ratio: "0.2%",
				unit: "批"
			},
			{
				amount: 752.5,
				category: "制造费用",
				detail: "装配工序",
				price: 10.75,
				quantity: 70,
				ratio: "0.3%",
				unit: "kg"
			},
			{
				amount: 1037.5,
				category: "制造费用",
				detail: "车间水电费",
				price: 12.5,
				quantity: 83,
				ratio: "0.5%",
				unit: "只"
			},
			{
				amount: 1368,
				category: "制造费用",
				detail: "设备折旧",
				price: 14.25,
				quantity: 96,
				ratio: "0.6%",
				unit: "工时"
			},
			{
				amount: 1744,
				category: "制造费用",
				detail: "模具摊销",
				price: 16,
				quantity: 109,
				ratio: "0.8%",
				unit: "台"
			},
			{
				amount: 2165.5,
				category: "制造费用",
				detail: "质检费用",
				price: 17.75,
				quantity: 122,
				ratio: "1.0%",
				unit: "批"
			},
			{
				amount: 2632.5,
				category: "制造费用",
				detail: "铝合金板材2mm",
				price: 19.5,
				quantity: 135,
				ratio: "1.2%",
				unit: "kg"
			},
			{
				amount: 14400,
				category: "其他费用",
				detail: "模具摊销",
				price: 3600,
				quantity: 4,
				ratio: "6.4%",
				unit: "台"
			},
			{
				amount: 8500,
				category: "其他费用",
				detail: "质检费用",
				price: 4250,
				quantity: 2,
				ratio: "3.8%",
				unit: "批"
			},
			{
				amount: 319,
				category: "其他费用",
				detail: "包装纸箱5号",
				price: 7.25,
				quantity: 44,
				ratio: "0.1%",
				unit: "台"
			},
			{
				amount: 513,
				category: "其他费用",
				detail: "冲压工序",
				price: 9,
				quantity: 57,
				ratio: "0.2%",
				unit: "批"
			},
			{
				amount: 752.5,
				category: "其他费用",
				detail: "装配工序",
				price: 10.75,
				quantity: 70,
				ratio: "0.3%",
				unit: "kg"
			},
			{
				amount: 1037.5,
				category: "其他费用",
				detail: "车间水电费",
				price: 12.5,
				quantity: 83,
				ratio: "0.5%",
				unit: "只"
			},
			{
				amount: 1368,
				category: "其他费用",
				detail: "设备折旧",
				price: 14.25,
				quantity: 96,
				ratio: "0.6%",
				unit: "工时"
			},
			{
				amount: 1744,
				category: "其他费用",
				detail: "模具摊销",
				price: 16,
				quantity: 109,
				ratio: "0.8%",
				unit: "台"
			}
		],
		schema: [
			{
				label: "成本项目",
				name: "category",
				type: "string"
			},
			{
				label: "明细说明",
				name: "detail",
				type: "string"
			},
			{
				label: "计量单位",
				name: "unit",
				type: "string"
			},
			{
				label: "数量",
				name: "quantity",
				type: "number"
			},
			{
				label: "单价（元）",
				name: "price",
				type: "number"
			},
			{
				label: "金额（元）",
				name: "amount",
				type: "number"
			},
			{
				label: "占比",
				name: "ratio",
				type: "string"
			}
		],
		type: "array"
	}
], t = [], n = [{
	elementIds: [
		"el-01a1c8de-0942-73db-90f2-e888a7a025a9",
		"el-01a1c8de-0947-7292-bc57-16d043af6fcd",
		"el-01a1c8de-0948-733d-be96-66264a5167be",
		"el-01a1c8de-0948-733d-be96-6afe0a08ef07"
	],
	gap: 10,
	id: "block-01a1c8de-0951-7296-9606-e8137de020f6",
	name: "成本汇总区",
	pageId: "page-01a1c8de-093c-73eb-a230-ae233a8d58f2",
	target: {
		id: "el-01a1c8de-0941-7750-9606-139c559a1427",
		kind: "element"
	}
}], r = "成本核算单", i = [{
	background: "#ffffff",
	elements: [
		{
			height: 5,
			id: "el-01a1c8de-0948-733d-be96-6f752d63b10a",
			locked: !1,
			name: "核算单位信息",
			opacity: 1,
			props: {
				autoHeight: !1,
				background: "transparent",
				color: "#111111",
				fontFamily: "Microsoft YaHei",
				fontSize: 9,
				fontStyle: "normal",
				fontWeight: "400",
				letterSpacing: 0,
				lineHeight: 1.5,
				padding: 0,
				text: "核算单位：{{ company.name }}",
				textAlign: "left",
				textDecoration: "none",
				verticalAlign: "middle"
			},
			rotation: 0,
			type: "text",
			visible: !0,
			width: 100,
			x: 12,
			y: 20
		},
		{
			height: 5,
			id: "el-01a1c8de-0949-7051-b36b-a0dc9609fd0b",
			locked: !1,
			name: "核算期间信息",
			opacity: 1,
			props: {
				autoHeight: !1,
				background: "transparent",
				color: "#111111",
				fontFamily: "Microsoft YaHei",
				fontSize: 9,
				fontStyle: "normal",
				fontWeight: "400",
				letterSpacing: 0,
				lineHeight: 1.5,
				padding: 0,
				text: "核算期间：{{ cost.period }}　　单位：元",
				textAlign: "right",
				textDecoration: "none",
				verticalAlign: "middle"
			},
			rotation: 0,
			type: "text",
			visible: !0,
			width: 86,
			x: 112,
			y: 20
		},
		{
			height: 5,
			id: "el-01a1c8de-0949-7051-b36b-a6a5f2785c3b",
			locked: !1,
			name: "编制部门信息",
			opacity: 1,
			props: {
				autoHeight: !1,
				background: "transparent",
				color: "#111111",
				fontFamily: "Microsoft YaHei",
				fontSize: 9,
				fontStyle: "normal",
				fontWeight: "400",
				letterSpacing: 0,
				lineHeight: 1.5,
				padding: 0,
				text: "编制部门：{{ cost.department }}",
				textAlign: "left",
				textDecoration: "none",
				verticalAlign: "middle"
			},
			rotation: 0,
			type: "text",
			visible: !0,
			width: 56,
			x: 12,
			y: 26
		},
		{
			height: 5,
			id: "el-01a1c8de-0949-7051-b36b-a909c8b0127e",
			locked: !1,
			name: "单据编号信息",
			opacity: 1,
			props: {
				autoHeight: !1,
				background: "transparent",
				color: "#111111",
				fontFamily: "Microsoft YaHei",
				fontSize: 7,
				fontStyle: "normal",
				fontWeight: "400",
				letterSpacing: 0,
				lineHeight: 1.2,
				padding: 0,
				text: "单据编号：{{ cost.sheetNo }}　　编制日期：{{ $document.now | date:yyyy年MM月dd日 }}",
				textAlign: "right",
				textDecoration: "none",
				verticalAlign: "middle"
			},
			rotation: 0,
			type: "text",
			visible: !0,
			width: 130,
			x: 68,
			y: 26
		},
		{
			bindings: { rows: "costItems" },
			height: 249,
			id: "el-01a1c8de-0941-7750-9606-139c559a1427",
			locked: !1,
			name: "成本明细表",
			opacity: 1,
			props: {
				background: "#ffffff",
				color: "#222222",
				columns: [
					{
						align: "center",
						bind: "category",
						title: "成本项目",
						width: 1.2
					},
					{
						align: "left",
						bind: "detail",
						title: "明细说明",
						width: 2.4
					},
					{
						align: "center",
						bind: "unit",
						title: "计量单位",
						width: .9
					},
					{
						align: "right",
						bind: "quantity",
						title: "数量",
						width: .9
					},
					{
						align: "right",
						bind: "price",
						format: {
							digits: 2,
							type: "thousand"
						},
						title: "单价（元）",
						width: 1
					},
					{
						align: "right",
						bind: "amount",
						format: {
							digits: 2,
							type: "thousand"
						},
						title: "金额（元）",
						width: 1.3
					},
					{
						align: "right",
						bind: "ratio",
						title: "占比",
						width: .9
					}
				],
				fontFamily: "Microsoft YaHei",
				fontSize: 9,
				headerAlign: "center",
				headerBackground: "#eaf3ef",
				headerColor: "#36675e",
				headerVisible: !0,
				heightMode: "auto",
				minRowHeightMm: 6.5,
				nullText: "",
				padding: 1.2,
				rows: [
					[
						"直接材料",
						"铝合金板材2mm",
						"kg",
						"1860",
						"28.50",
						"53010.00",
						"23.6%"
					],
					[
						"直接材料",
						"ABS工程塑料",
						"kg",
						"920",
						"16.80",
						"15456.00",
						"6.9%"
					],
					[
						"直接材料",
						"包装纸箱5号",
						"只",
						"2600",
						"3.20",
						"8320.00",
						"3.7%"
					],
					[
						"直接材料",
						"冲压工序",
						"批",
						"57",
						"9.00",
						"513.00",
						"0.2%"
					],
					[
						"直接材料",
						"装配工序",
						"kg",
						"70",
						"10.75",
						"752.50",
						"0.3%"
					],
					[
						"直接材料",
						"车间水电费",
						"只",
						"83",
						"12.50",
						"1037.50",
						"0.5%"
					],
					[
						"直接材料",
						"设备折旧",
						"工时",
						"96",
						"14.25",
						"1368.00",
						"0.6%"
					],
					[
						"直接材料",
						"模具摊销",
						"台",
						"109",
						"16.00",
						"1744.00",
						"0.8%"
					],
					[
						"直接材料",
						"质检费用",
						"批",
						"122",
						"17.75",
						"2165.50",
						"1.0%"
					],
					[
						"直接材料",
						"铝合金板材2mm",
						"kg",
						"135",
						"19.50",
						"2632.50",
						"1.2%"
					],
					[
						"直接材料",
						"ABS工程塑料",
						"只",
						"148",
						"21.25",
						"3145.00",
						"1.4%"
					],
					[
						"直接材料",
						"包装纸箱5号",
						"工时",
						"161",
						"23.00",
						"3703.00",
						"1.6%"
					],
					[
						"直接人工",
						"冲压工序",
						"工时",
						"640",
						"45.00",
						"28800.00",
						"12.8%"
					],
					[
						"直接人工",
						"装配工序",
						"工时",
						"480",
						"38.00",
						"18240.00",
						"8.1%"
					],
					[
						"直接人工",
						"包装纸箱5号",
						"台",
						"44",
						"7.25",
						"319.00",
						"0.1%"
					],
					[
						"直接人工",
						"冲压工序",
						"批",
						"57",
						"9.00",
						"513.00",
						"0.2%"
					],
					[
						"直接人工",
						"装配工序",
						"kg",
						"70",
						"10.75",
						"752.50",
						"0.3%"
					],
					[
						"直接人工",
						"车间水电费",
						"只",
						"83",
						"12.50",
						"1037.50",
						"0.5%"
					],
					[
						"直接人工",
						"设备折旧",
						"工时",
						"96",
						"14.25",
						"1368.00",
						"0.6%"
					],
					[
						"直接人工",
						"模具摊销",
						"台",
						"109",
						"16.00",
						"1744.00",
						"0.8%"
					],
					[
						"直接人工",
						"质检费用",
						"批",
						"122",
						"17.75",
						"2165.50",
						"1.0%"
					],
					[
						"直接人工",
						"铝合金板材2mm",
						"kg",
						"135",
						"19.50",
						"2632.50",
						"1.2%"
					],
					[
						"制造费用",
						"车间水电费",
						"月",
						"1",
						"21600.00",
						"21600.00",
						"9.6%"
					],
					[
						"制造费用",
						"设备折旧",
						"月",
						"1",
						"12800.00",
						"12800.00",
						"5.7%"
					],
					[
						"制造费用",
						"包装纸箱5号",
						"台",
						"44",
						"7.25",
						"319.00",
						"0.1%"
					],
					[
						"制造费用",
						"冲压工序",
						"批",
						"57",
						"9.00",
						"513.00",
						"0.2%"
					],
					[
						"制造费用",
						"装配工序",
						"kg",
						"70",
						"10.75",
						"752.50",
						"0.3%"
					],
					[
						"制造费用",
						"车间水电费",
						"只",
						"83",
						"12.50",
						"1037.50",
						"0.5%"
					],
					[
						"制造费用",
						"设备折旧",
						"工时",
						"96",
						"14.25",
						"1368.00",
						"0.6%"
					],
					[
						"制造费用",
						"模具摊销",
						"台",
						"109",
						"16.00",
						"1744.00",
						"0.8%"
					],
					[
						"制造费用",
						"质检费用",
						"批",
						"122",
						"17.75",
						"2165.50",
						"1.0%"
					],
					[
						"制造费用",
						"铝合金板材2mm",
						"kg",
						"135",
						"19.50",
						"2632.50",
						"1.2%"
					],
					[
						"其他费用",
						"模具摊销",
						"台",
						"4",
						"3600.00",
						"14400.00",
						"6.4%"
					],
					[
						"其他费用",
						"质检费用",
						"批",
						"2",
						"4250.00",
						"8500.00",
						"3.8%"
					],
					[
						"其他费用",
						"包装纸箱5号",
						"台",
						"44",
						"7.25",
						"319.00",
						"0.1%"
					],
					[
						"其他费用",
						"冲压工序",
						"批",
						"57",
						"9.00",
						"513.00",
						"0.2%"
					],
					[
						"其他费用",
						"装配工序",
						"kg",
						"70",
						"10.75",
						"752.50",
						"0.3%"
					],
					[
						"其他费用",
						"车间水电费",
						"只",
						"83",
						"12.50",
						"1037.50",
						"0.5%"
					],
					[
						"其他费用",
						"设备折旧",
						"工时",
						"96",
						"14.25",
						"1368.00",
						"0.6%"
					],
					[
						"其他费用",
						"模具摊销",
						"台",
						"109",
						"16.00",
						"1744.00",
						"0.8%"
					]
				],
				stripe: !0,
				stripeColor: "#f6faf9",
				borders: {
					inner: {
						color: "#aabfc0",
						style: "solid",
						width: .2
					},
					mode: "all",
					outer: {
						color: "#36675e",
						style: "solid",
						width: .3
					}
				},
				summary: {
					borders: {
						inner: {
							color: "#999999",
							style: "solid",
							width: .2
						},
						mode: "all",
						outer: {
							color: "#999999",
							style: "solid",
							width: .2
						}
					},
					columns: {
						0: {
							text: "合计",
							type: "text"
						},
						5: { type: "sum" }
					},
					enabled: !0,
					position: "bottom",
					scope: "lastPage",
					style: { bold: !0 }
				},
				overflow: {
					elementId: "",
					enabled: !1,
					message: "以明细为准",
					messageAlign: "",
					messageVAlign: "",
					scope: "all",
					templateId: "",
					threshold: 8
				},
				pagination: {
					crossPage: !0,
					fillEmptyRows: !1,
					fixedRows: !1,
					positionMode: "flow",
					repeatHeader: !0,
					rowsPerPage: 0
				},
				merges: [],
				mergeRules: [{
					columns: [0],
					fields: ["category"],
					type: "fields"
				}],
				headerMerges: [
					{
						col: 0,
						colspan: 3,
						row: 0,
						rowspan: 1
					},
					{
						col: 3,
						colspan: 1,
						row: 0,
						rowspan: 2
					},
					{
						col: 4,
						colspan: 3,
						row: 0,
						rowspan: 1
					}
				],
				headerRows: [[
					"成本构成",
					"",
					"",
					"耗用情况",
					"金额信息（元）",
					"",
					""
				], [
					"成本项目",
					"明细说明",
					"计量单位",
					"数量",
					"单价（元）",
					"金额（元）",
					"占比"
				]],
				headerVAlign: "middle",
				headerWrap: !0
			},
			rotation: 0,
			type: "table",
			visible: !0,
			width: 186,
			x: 12,
			y: 32
		},
		{
			height: 5,
			id: "el-01a1c8de-0942-73db-90f2-e888a7a025a9",
			locked: !1,
			name: "成本汇总标签",
			opacity: 1,
			props: {
				autoHeight: !1,
				background: "transparent",
				color: "#36675e",
				fontFamily: "Microsoft YaHei",
				fontSize: 9.5,
				fontStyle: "normal",
				fontWeight: "700",
				letterSpacing: 0,
				lineHeight: 1.5,
				padding: 0,
				text: "成本汇总",
				textAlign: "left",
				textDecoration: "none",
				verticalAlign: "middle"
			},
			rotation: 0,
			type: "text",
			visible: !0,
			width: 60,
			x: 12,
			y: 291
		},
		{
			bindings: { rows: "costSummary" },
			height: 38,
			id: "el-01a1c8de-0947-7292-bc57-16d043af6fcd",
			locked: !1,
			name: "成本汇总表",
			opacity: 1,
			props: {
				background: "#ffffff",
				color: "#222222",
				columns: [
					{
						align: "center",
						bind: "category",
						title: "成本项目",
						width: 1.4
					},
					{
						align: "right",
						bind: "amount",
						format: {
							digits: 2,
							type: "thousand"
						},
						title: "金额（元）",
						width: 1.2
					},
					{
						align: "center",
						bind: "ratio",
						title: "占比",
						width: 1
					},
					{
						align: "left",
						bind: "note",
						title: "备注",
						width: 2.4
					}
				],
				fontFamily: "Microsoft YaHei",
				fontSize: 9,
				headerAlign: "",
				headerBackground: "#eaf3ef",
				headerColor: "#36675e",
				headerVisible: !0,
				heightMode: "fixed",
				minRowHeightMm: 0,
				nullText: "",
				padding: 1.2,
				rows: [
					[
						"直接材料",
						"93847.00",
						"41.7%",
						"以领料单汇总"
					],
					[
						"直接人工",
						"57572.00",
						"25.6%",
						"以工资单汇总"
					],
					[
						"制造费用",
						"44932.00",
						"20.0%",
						"制造费用与其他费用合并列示"
					],
					[
						"其他费用",
						"28634.00",
						"",
						""
					]
				],
				stripe: !1,
				stripeColor: "#f6faf9",
				borders: {
					inner: {
						color: "#aabfc0",
						style: "solid",
						width: .2
					},
					mode: "all",
					outer: {
						color: "#36675e",
						style: "solid",
						width: .3
					}
				},
				summary: {
					columns: {},
					enabled: !1,
					position: "bottom",
					scope: "lastPage"
				},
				overflow: {
					elementId: "",
					enabled: !1,
					message: "以明细为准",
					messageAlign: "",
					messageVAlign: "",
					scope: "all",
					templateId: "",
					threshold: 8
				},
				pagination: {
					crossPage: !1,
					fillEmptyRows: !1,
					fixedRows: !1,
					positionMode: "fixed",
					repeatHeader: !1,
					rowsPerPage: 0
				},
				merges: [{
					col: 2,
					colspan: 1,
					row: 2,
					rowspan: 2
				}, {
					col: 3,
					colspan: 1,
					row: 2,
					rowspan: 2
				}],
				mergeRules: []
			},
			rotation: 0,
			type: "table",
			visible: !0,
			width: 186,
			x: 12,
			y: 300
		},
		{
			height: 14,
			id: "el-01a1c8de-0948-733d-be96-66264a5167be",
			locked: !1,
			name: "编制说明",
			opacity: 1,
			props: {
				autoHeight: !1,
				background: "transparent",
				color: "#555555",
				fontFamily: "Microsoft YaHei",
				fontSize: 8.5,
				fontStyle: "normal",
				fontWeight: "400",
				letterSpacing: 0,
				lineHeight: 1.7,
				padding: 0,
				text: "说明：{{ cost.notes }}",
				textAlign: "left",
				textDecoration: "none",
				verticalAlign: "top"
			},
			rotation: 0,
			type: "text",
			visible: !0,
			width: 186,
			x: 12,
			y: 342
		},
		{
			height: 5,
			id: "el-01a1c8de-0948-733d-be96-6afe0a08ef07",
			locked: !1,
			name: "签署行",
			opacity: 1,
			props: {
				autoHeight: !1,
				background: "transparent",
				color: "#111111",
				fontFamily: "Microsoft YaHei",
				fontSize: 9,
				fontStyle: "normal",
				fontWeight: "400",
				letterSpacing: 0,
				lineHeight: 1.5,
				padding: 0,
				text: "制表人：{{ cost.preparer }}　　审核人：{{ cost.reviewer }}　　审批人：{{ cost.approver }}",
				textAlign: "left",
				textDecoration: "none",
				verticalAlign: "middle"
			},
			rotation: 0,
			type: "text",
			visible: !0,
			width: 186,
			x: 12,
			y: 360
		}
	],
	guides: [],
	height: 297,
	id: "page-01a1c8de-093c-73eb-a230-ae233a8d58f2",
	margins: {
		bottom: 16,
		left: 12,
		right: 12,
		top: 16
	},
	name: "成本核算单页",
	templateId: "template-01a1c8de-093a-7223-a122-036bb4c9cc91",
	width: 210
}], a = [], o = [{
	builtin: !0,
	evenPages: !0,
	facingPages: !1,
	id: "template-blank",
	name: "空白模板",
	oddPages: !0,
	page: {
		background: "#ffffff",
		elements: [],
		guides: [],
		height: 297,
		id: "template-blank",
		name: "空白模板",
		width: 210
	}
}, {
	builtin: !1,
	evenPages: !0,
	facingPages: !1,
	id: "template-01a1c8de-093a-7223-a122-036bb4c9cc91",
	name: "核算单页",
	oddPages: !0,
	page: {
		background: "#ffffff",
		elements: [
			{
				height: 11,
				id: "el-01a1c8de-093a-7223-a122-0bd3abf9fd96",
				locked: !1,
				name: "核算单标题",
				opacity: 1,
				props: {
					autoHeight: !1,
					background: "transparent",
					color: "#36675e",
					fontFamily: "Microsoft YaHei",
					fontSize: 16,
					fontStyle: "normal",
					fontWeight: "700",
					letterSpacing: 0,
					lineHeight: 1.3,
					padding: 0,
					text: "成本核算单",
					textAlign: "left",
					textDecoration: "none",
					verticalAlign: "middle"
				},
				rotation: 0,
				type: "text",
				visible: !0,
				width: 146,
				x: 12,
				y: 5
			},
			{
				height: 11,
				id: "el-01a1c8de-093b-74f1-9d88-d4a4fd8c2c9d",
				locked: !1,
				name: "单号条码",
				opacity: 1,
				props: {
					background: "transparent",
					color: "#111111",
					displayValue: !1,
					fontSize: 9,
					format: "CODE128",
					margin: 0,
					value: "{{ cost.sheetNo }}"
				},
				rotation: 0,
				type: "barcode",
				visible: !0,
				width: 40,
				x: 158,
				y: 5
			},
			{
				height: 4.5,
				id: "el-01a1c8de-093b-74f1-9d88-dad46532847e",
				locked: !1,
				name: "打印时间",
				opacity: 1,
				props: {
					autoHeight: !1,
					background: "transparent",
					color: "#666666",
					fontFamily: "Microsoft YaHei",
					fontSize: 7.5,
					fontStyle: "normal",
					fontWeight: "400",
					letterSpacing: 0,
					lineHeight: 1.5,
					padding: 0,
					text: "打印时间：{{ $document.now | date:yyyy-MM-dd HH:mm }}",
					textAlign: "left",
					textDecoration: "none",
					verticalAlign: "middle"
				},
				rotation: 0,
				type: "text",
				visible: !0,
				width: 100,
				x: 12,
				y: 287
			},
			{
				height: 4.5,
				id: "el-01a1c8de-093b-74f1-9d88-ddfec8593755",
				locked: !1,
				name: "页码",
				opacity: 1,
				props: {
					autoHeight: !1,
					background: "transparent",
					color: "#666666",
					fontFamily: "Microsoft YaHei",
					fontSize: 6,
					fontStyle: "normal",
					fontWeight: "400",
					letterSpacing: 0,
					lineHeight: 1.2,
					padding: 0,
					text: "第 {{ $document.pageNumber }} 页 / 共 {{ $document.pageCount }} 页",
					textAlign: "right",
					textDecoration: "none",
					verticalAlign: "middle"
				},
				rotation: 0,
				type: "text",
				visible: !0,
				width: 86,
				x: 112,
				y: 287
			}
		],
		guides: [],
		height: 297,
		id: "template-01a1c8de-093a-7223-a122-036bb4c9cc91",
		margins: {
			bottom: 16,
			left: 12,
			right: 12,
			top: 16
		},
		name: "核算单页",
		width: 210
	}
}], s = "1.0", c = {
	dataSources: e,
	elementGroups: t,
	followBlocks: n,
	name: r,
	pages: i,
	repeatGroups: a,
	templates: o,
	version: "1.0"
};
export { e as dataSources, c as default, t as elementGroups, n as followBlocks, r as name, i as pages, a as repeatGroups, o as templates, s as version };
