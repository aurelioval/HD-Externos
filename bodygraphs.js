//	************	charts and mandalas		************
{	//		Colors
							//	red			black
var channel_colors = [["#FF0000", "#000000"],		// set color	#C92711
					  ["#DB9B45", "#4F2435"],
					  ["#DC7221", "#4D6D90"]];

var center_colors = [["#F9CEA0", "#C9A97D", "#9B6D31", "#CEAB7E", "#E33F4A"],		//	root
					 ["#FFCFD9", "#FFA8B6", "#CE2121", "#B5948F", "#FFA52A"],		//	sacral
					 ["#F9CEA0", "#C9A97D", "#9B6D31", "#CEAB7E", "#F9D021"],		//	spleen
					 ["#F9CEA0", "#C9A97D", "#9B6D31", "#CEAB7E", "#F9D021"],		//	solar plexus
					 ["#FFCFD9", "#FFA8B6", "#CE2121", "#B5948F", "#0CC88C"],		//	hearth
					 ["#F9F18A", "#EAF479", "#F4DD0B", "#441F2E", "#0CC88C"],		//	G
					 ["#F9CEA0", "#C9A97D", "#9B6D31", "#CEAB7E", "#3CD7DF"],		//	throat
					 ["#BEFC7C", "#75FA96", "#54931E", "#F7EA9F", "#2655DF"],		//	ajna
					 ["#F9F18A", "#EAF479", "#F4DD0B", "#441F2E", "#8E36DE"]];		//	head
}

function setStyles(styles, root, viewId, template){
	if (styles) {
		var isHeart = styles.centerHeart || styles.center==3;
		var heartClass = isHeart ? ".none_heart" : ".heart";
		root.selectAll(heartClass).attr("opacity", 0);
		
		if(template=="found" && styles.center==1){
			root.selectAll("#gate_1, #gate_8").selectAll("line").attr("transform", "matrix(1 0 0 1 0 -7)")
			root.selectAll("#gate_23, #gate_43").selectAll("line").attr("transform", "matrix(1 0 0 1 0 7)")
		}
		if((template=="sleep" || template=="animal") && (styles.center==2 || styles.center==3)){
			root.selectAll("#gate_1, #gate_8").selectAll("line").attr("transform", "matrix(1 0 0 1 -7 0)")
		}
		
		var clrSet = channel_colors[styles.activationColor[0].id];
		
		root.selectAll(".stBlack").attr("stroke", clrSet[1]);
		root.selectAll(".flBlack").attr("fill", clrSet[1]);
		root.selectAll(".stRed").attr("stroke", clrSet[0]);
		root.selectAll(".flRed").attr("fill", clrSet[0]);
	} else {
		root.selectAll(".heart").attr("opacity", 0);
	}
}

function setBodyAura(styles, type, ver, root, skin){
/*	ver
	-	sleep
	-	animal
	-   build
*/	
	var svgShade = root.select("#ChartBackground");
	if (!svgShade.node()) return;
	var template = styles ? "body_shade_"+styles.shade : "body_shade_0";

	if (ver=="animal") {
		template = "animal/body_shade_" + skin;
	} else if (skin) {
		template = "other/body_shade_" + skin;
	}

	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/body_shades/"+template+".svg?v=0.14").then(data=> {
		svgShade.node().append(data.documentElement)

		if (ver == "sleep") {
			svgShade.attr("transform", "matrix(0,1,-1,0,965,-2)")
		}
		
		if (!styles)
			return;

		if( ver === "build"){	return;
								//	light		medium		dark
			var aura_colors = [["#F7C1AA", "#F09369", "#EA6428"],
								  ["#E799A9", "#D64D68", "#C40026"],
								  ["#B2BAFF", "#7886FF", "#3E51FF"],
								  ["#9ACFB8", "#4EAB81", "#03874B"],
								  ["#C9B6EA", "#9F80D9", "#7549C9"]];
			let auraColorDB = parseInt(localStorage.getItem('auraColorDB')) || 0;
			console.log(auraColorDB);
			let currentAura = auraColorDB;

			if (styles.shadeColor == 0) {
				auraColor = "#CCD2EE";
			} else if (styles.shadeColor == 1) {
				auraColor = newAura.selectAll('.light').attr('fill');
			} else if (styles.shadeColor == 2) {
				auraColor = newAura.selectAll('.medium').attr('fill');
			} else if (styles.shadeColor == 3) {
				auraColor = newAura.selectAll('.dark').attr('fill');
			}

			d3.select('#bodygraph path').attr('fill', auraColor);
			currentAura = currentAura + 1;

			d3.selectAll('[id^="body_shade_"]').on('click', function() {
			    if (currentAura === totalAuras) {
					console.log('a');
			        d3.selectAll('#aura').attr('visibility', 'hidden');
			        svgShade.select("#bodygraph > path").attr("fill", "#CCD2EE"); 
			        currentAura = 0;
			        return;
			    }

				svgShade.select("#aura").select(".light").attr("fill", aura_colors[currentAura][0])
				svgShade.select("#aura").select(".medium").attr("fill", aura_colors[currentAura][1])
				svgShade.select("#aura").select(".dark").attr("fill", aura_colors[currentAura][2])

			    currentAura = currentAura + 1;

			    console.log('new auraColorDB:', auraColorDB);
			});
			console.log(auraColorDB);
		}
		else {
			var auraColor = "#CCD2EE"
			if (type!=null) {
				svgShade.select("#aura").select(".light").attr("fill", type.light)
				svgShade.select("#aura").select(".medium").attr("fill", type.medium)
				svgShade.select("#aura").select(".dark").attr("fill", type.dark)
				if(styles.aura)
					svgShade.select("#aura").attr("visibility", "visible");

				switch(styles.shadeColor) {
				  case -1:
					auraColor = "none"
					break;
				  case 0:
					auraColor = "#CCD2EE"
					break;
				  case 1:
					auraColor = type.light
					break;
				  case 2:
					auraColor = type.light
					break;
				  case 3:
					auraColor = type.light
					break;
				  default:
				}
			}
			svgShade.select("#bodygraph > path").attr("fill", auraColor)
		}
	});
}

function setupTooltips(ver) {
    const tooltipsContent = tooltipsData.reduce((acc, item) => {
        acc[item.tooltip_id] = item[`tooltip_title_${tooltipsLang}`];
        return acc;
    }, {});

    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    const boxUserPage = d3.select('.box-user-page').node();

    const boxHomePage = d3.select('.box-home-page').node();

    let boxRect;

    if(boxHomePage){
    	boxRect = boxHomePage.getBoundingClientRect();
    } else {
    	boxRect = boxUserPage.getBoundingClientRect();
    }    

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const longPressDuration = 500; 

    let longPressTimer;

    if (isMobile) {

    	if (ver === 'build'){
    		// d3.selectAll('svg').on("touchstart", function(event) {
		    //  	clearTimeout(longPressTimer);
		    //      longPressTimer = setTimeout(() => showTooltip(event), longPressDuration);
		    // }).on("touchend touchmove", function() {
		    //      clearTimeout(longPressTimer);
		    // });
		    d3.selectAll('svg').on("touchstart", function(event) {
		    	showTooltip(event);
		    }).on("touchend touchmove", function() {
		        hideTooltip(tooltip);
		    });
    	} else {
    		d3.selectAll('svg').on("touchstart", function(event) {
		    	showTooltip(event);
		    }).on("touchend touchmove", function() {
		        hideTooltip(tooltip);
		    });
    	}  

	} else {
	    d3.selectAll('svg').on("mousemove", function(event) {
	        showTooltip(event);
	    }).on("mouseout", function() {
	        hideTooltip(tooltip);
	    });
	}

function showTooltip(event) {

	hideTooltip(tooltip);

	let targetDom = event.target; 

    if (!(targetDom instanceof Element)) {
        return;
    }

    let gElement = null;
    let isPlanetElement = false;

    let parent = targetDom;

    const conditions = [
        { nodeType: 'g', idPrefix: 'chart', isPlanet: false },
        { nodeType: 'g', idPrefix: 'b_planet', isPlanet: true },
        { nodeType: 'g', idPrefix: 'p_planet', isPlanet: true },
        { nodeType: 'text', idPrefix: 'planets', isPlanet: true },
        { nodeType: 'rect', idPrefix: 'ptRight', isPlanet: true },
        { nodeType: 'rect', idPrefix: 'ptLeft', isPlanet: true },
        { nodeType: 'g', idPrefix: 'Planets', isPlanet: false },
        { nodeType: 'g', idPrefix: 'Arrows', isPlanet: false },
        { nodeType: 'g', idPrefix: 'Circles', isPlanet: false },
        { nodeType: 'g', idPrefix: 'pers_planet_geo', isPlanet: false },
        { nodeType: 'g', idPrefix: 'desi_planet_geo', isPlanet: false },
        
    ];

    while (parent) {
        for (const condition of conditions) {
            if (parent.nodeName.toLowerCase() === condition.nodeType && parent.id.startsWith(condition.idPrefix)) {
                gElement = parent;
                isPlanetElement = condition.isPlanet;
                break;
            }
        }

        if (gElement) {
            break;
        }

        parent = parent.parentNode;
    }

    // let tooltipId = targetDom.getAttribute('tooltipid');

    // while (!tooltipId && targetDom.parentNode) {
    //     targetDom = targetDom.parentNode;
    //     tooltipId = targetDom.getAttribute('tooltipid');
    // }

    let tooltipId = targetDom instanceof Element ? targetDom.getAttribute('tooltipid') : null;
    
    while (!tooltipId && targetDom.parentNode) {
        targetDom = targetDom.parentNode;
        tooltipId = targetDom instanceof Element ? targetDom.getAttribute('tooltipid') : null;
    }

    if (targetDom && targetDom.style) {
        targetDom.style.userSelect = 'none';
    }

    if (targetDom && targetDom.children) {
        Array.from(targetDom.children).forEach(child => {
            if (child.style) {
                child.style.userSelect = 'none';
            }
        });
    }

    if (tooltipId) {
        let tooltipContent = '';
        let additionalClass = "";
        let compositeClass = "";

        if (tooltipId.includes('+')) {
            compositeClass = "composite-tooltip"; 
            const tooltipIds = tooltipId.split('+');
            
        	for (let i = 0; i < tooltipIds.length; i++) {
                let id = tooltipIds[i];
                if (tooltipsContent[id]) {
                    let parts = tooltipsContent[id].split(':');
                    let formattedContent = parts.length > 1 ? `<b>${parts[0]}:</b>${parts.slice(1).join(':')}` : tooltipsContent[id];

		            const startsWithArray = ["<b>More", "<b>Mais", "<b>Meer", "<b>Ulteriori", "<b>Plus", "<b>Más", "<b>Weitere"];

					let addToTooltip = true;
					for (let startString of startsWithArray) {
					    if (formattedContent.startsWith(startString)) {
					        addToTooltip = false;
					        break;
					    }
					}

					if (addToTooltip) {
					    tooltipContent += `<p>${formattedContent}</p>`;
					}
                }
            }

        } else {
            if (tooltipsContent[tooltipId]) {
                tooltipContent = `<h1>${tooltipsContent[tooltipId]}</h1>`;
            }
        }

        switch (ver) {
            case null:
				additionalClass = 'null-tooltip';
				break;
			case 'shadow':
			    additionalClass = "shadow-chart-tooltip";
			    break;
			case 'sleep':
			    additionalClass = "sleep-chart-tooltip";
			    break;
			case 'animal':
			    additionalClass = "animal-chart-tooltip";
			    break;	
			case 'biology':
			    additionalClass = "biology-chart-tooltip";
			    break;	
			case 'angelic':
			    additionalClass = "angelic-chart-tooltip";
			    break;	
			case 'build':
			    additionalClass = "build-chart-tooltip";
			    break;	            
			default:
			    additionalClass = "default-tooltip";
        }

        if (tooltipContent) {

            let tooltipLeft, tooltipTop;

            // tooltip.style("left", null)
	           // .style("top", null)
	           // .style("opacity", 0);

            let mouseX = event.clientX;
        	

          	if (window.innerWidth <= 500) {

			    let targetBBox = targetDom.getBoundingClientRect();			    

			    setTimeout(() => {
			    	const tooltipHeight = tooltip.node().offsetHeight;

				    const offsetY = 10;

				    let tooltipTop;

				    if (targetBBox.top >= tooltipHeight + offsetY) {
				    
				        tooltipTop = targetBBox.top - tooltipHeight - offsetY;
				    } else if (window.innerHeight - targetBBox.bottom >= tooltipHeight + offsetY) {			       
				        tooltipTop = targetBBox.bottom + offsetY;
				    } else {			        
				        tooltipTop = targetBBox.top + offsetY; 
				    }

				    tooltip.html(tooltipContent)
				        .attr('class', `tooltip mob-tooltip ${additionalClass} ${compositeClass}`);

			    }, 10);

			} else {

                let tooltipWidth = tooltip.node().offsetWidth;
                const tooltipHeight = tooltip.node().offsetHeight;
                const offsetX = 10;
                const offsetY = 10;

                let targetBBox = targetDom.getBoundingClientRect();

                if (gElement) {
                    
                    let gBoxRect = gElement.getBoundingClientRect();
                   
					if (mouseX < (gBoxRect.left + gBoxRect.width / 2)) {
				        tooltipLeft = targetBBox.left - tooltipWidth - offsetX;
				        
				        if (tooltipLeft < boxRect.left) {				            
				            tooltipLeft = targetBBox.right + offsetX;
				        }
				    } else {
				        tooltipLeft = targetBBox.right + offsetX;

				        
				        if (tooltipLeft + tooltipWidth > boxRect.right) {
				            
				            tooltipLeft = targetBBox.left - tooltipWidth - offsetX;
				        }
				    }

                    tooltipTop = targetBBox.top - tooltipHeight - offsetY;

                    if(isPlanetElement == true){                    	

		                if (boxRect.bottom - targetBBox.bottom < tooltipHeight + offsetY) {
		                    tooltipTop = targetBBox.bottom - tooltipHeight;
		                } else {
		                    tooltipTop = targetBBox.top;
		                }

                    } else {                    	
                   
	                    if (gBoxRect.bottom - targetBBox.bottom < tooltipHeight + offsetY) {
	                        tooltipTop = targetBBox.bottom - tooltipHeight;
	                    } else {
	                        tooltipTop = targetBBox.top;
	                    }
                    }


                } else {
                    
                    tooltipLeft = boxRect.right - targetBBox.right < tooltipWidth + offsetX ?
                              Math.max(targetBBox.left - tooltipWidth - offsetX, boxRect.left) :
                              Math.min(targetBBox.right + offsetX, boxRect.right - tooltipWidth);

	                tooltipTop = targetBBox.top - tooltipHeight - offsetY;

	                if (boxRect.bottom - targetBBox.bottom < tooltipHeight + offsetY) {
	                    tooltipTop = targetBBox.bottom - tooltipHeight;
	                } else {
	                    tooltipTop = targetBBox.top;
	                }
                }

                tooltip.html(tooltipContent)
                .attr('class', `tooltip ${additionalClass} ${compositeClass}`);
            }

            tooltip.html(tooltipContent)
                .style("left", `${tooltipLeft}px`)
                .style("top", `${tooltipTop}px`)
                .transition()
                .duration(100)
                .style("opacity", 1);          
        }
    }
}


function hideTooltip(tooltip) {
	if (!tooltip || tooltip.style("opacity") === "0") return;	

    if (isMobile) {
        tooltip.transition()
		    .duration(0)
		    .style("opacity", 0)
		    .on('end', function() {	           
	            tooltip.style("left", null).style("top", null).style("max-width", null);
	        });
    } else {
    	tooltip.transition()
		    .duration(200)
		    .style("opacity", 0)
		    .on('end', function() {
	            tooltip.style("left", null).style("top", null).style("max-width", null);
	        });
    }
    d3.selectAll('[style*="user-select"]').style('user-select', null);
}

document.addEventListener('touchmove', () => {
	 
	    hideTooltip(tooltip);
	});
}

async function setCenters(styles, centers, ver, root, type){
/*	ver
	-	null (plain foundation)
	-	shadow
	-	sleep
	-	animal
	-	biology
	-	angelic
	-   build
	-	career
	-   material
*/
	var center_skins = ["original", "sharp", "round", "quantrix"];
	var svgCenters = root.select("#Centers");
	if (!svgCenters.node()) return;
	var template = styles ? center_skins[styles.center]+"_centers" : "original_centers";

	let path = "/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/centers/";

	const data = await d3.svg(path+template+".svg?v=0.09");
	svgCenters.node().append(data.documentElement);

	var cent_names = ["root", "sacral", "spleen", "solar_plexus", "heart", "G", "throat", "ajna", "head"];
	if (styles) {
		cent_names.forEach(function(center_name) {
			svgCenters.selectAll(".fil_"+center_name)
					  .attr("fill", styles.centerColor[0][center_name]);
			svgCenters.selectAll(".str_"+center_name)
					  .attr("stroke", styles.centerColor[0][center_name]);
		})

		svgCenters.selectAll(styles.centerHeart || styles.center==3 ? ".none_heart" : ".heart").attr("opacity", 0);
	} 
	else {
		svgCenters.selectAll(".heart").attr("opacity", 0);			
	}

if(centers) {
	if (type === "cbGMsleep") {
		svgCenters.selectAll(".noSleep").remove();
		const tooltipIdsToRemove = ["FO11-CE-7-1", "FO11-CE-8-1", "FO11-CE-3-1", "FO11-CE-4-1"];
		tooltipIdsToRemove.forEach(id => {
			d3.selectAll(`path[tooltipid="${id}"]`).remove();
		});
	} else {
		svgCenters.select("#coloured_centres")
		.selectAll(".center")
		.data(centers)
		.attr("visibility",  function(d) { return Math.abs(d)==1 ? "visible" : "hidden";})
		.attr("stroke",  function(d, i) { return d<0 ? "#29fe29" : "#FFFFFF";});
	}

	svgCenters.select("#white_centres")
		.selectAll(".white_center")
		.data(centers)
		.attr("stroke",  function(d, i) { return d==-2 ? "#29fe29" : d3.select(this).attr("stroke");});

	if (ver == "shadow" ) {		//	not self (shadow)
		root.selectAll(".center").attr("fill-opacity", "0.1");

		svgCenters.select("#white_centres")
			.selectAll(".white_center")
			.data(centers)
			.attr("fill",  function(d) { return d>0 ? "#FFFFFF" : "#FF7B00";})
			.attr("stroke", "none");
		var center_names = ["Root", "Sacral", "Spleen", "SolarPlexus", "Heart", "Self", "Throat", "Ajna", "Head"];
		svgCenters.select("#white_centres")
			.selectAll(".white_center")
			.data(center_names)
			.attr("onclick", function(d) { return "javascript:playAudio('../TCS/NSTC-C-"+d+".mp3', 'Center: "+d+"');" })
			.attr("cursor", "pointer")
			.attr("stroke-width", "2");
	}

	if(type == "talkSleep" || type == "talkSleepT" || type == "talkConnS" || type == "talkConnST"){
		var center_names = {
			0: "Root",
			1: "Sacral",
			2: "Splenic",
			5: "G Center",
			6: "Throat"
		};

		d3.selectAll("#white_centres .white_center, #coloured_centres .center")
		  .each(function() { 
			var el = d3.select(this);
			var tooltipId = el.attr("tooltipid");
			var centerId = parseInt(tooltipId.split("-")[2], 10);

			if (centerId in center_names) {
			  var centerName = center_names[centerId];
			  
			  var audioIndex = this.parentNode.id === "white_centres" ? "0" : "1";
			  el.attr("onclick", `javascript:playAudio('../TCSL/TCSL-CE-${centerId}-${audioIndex}.mp3', 'Center: ${centerName}')`)
					 .attr("cursor", "pointer")
					 .attr("stroke-width", "2");
			}
		  });
	}
	
	setupTooltips(ver);

	if (ver != 'shadow') {
		var el = [
			{ tooltipId: "FO11-CE-5-1", ids: ["black_7", "black_1", "black_13", "black_10", "black_15", "black_2", "black_46", "black_25"] },
			{ tooltipId: "FO11-CE-8-1", ids: ["black_64", "black_61", "black_63"] },
			{ tooltipId: "SL-CE-5-1", ids: ["black_15", "black_1"] },
			{ tooltipId: "AN-CE-5-1", ids: ["black_7", "black_1", "black_13", "black_10", "black_15", "black_2", "black_46", "black_25"] }
		];

		var containerIds = ["#chart0", "#chart1", "#chart2", "#chart3", "#chart4", "#chartAdv"];

		el.forEach(function(element) {
			containerIds.forEach(function(containerId) {
				var pathElements = d3.selectAll(containerId + ' .center[tooltipid="' + element.tooltipId + '"]');
				
			   
				if (!pathElements.empty()) {
					pathElements.each(function() {
						var pathElement = d3.select(this);
						var fillCondition = pathElement.attr('fill') === "#441F2E"; 
						var visibilityCondition = pathElement.attr("visibility") === "visible";

						if (fillCondition && visibilityCondition) {
							element.ids.forEach(function(id) {
								var targetElement = d3.select(containerId + " #Gates #black_numbers #" + id);
								
								if (!targetElement.empty()) {
									targetElement.style("fill", "#fff");
								}
							});
							if (["FO11-CE-5-1", "SL-CE-5-1", "AN-CE-5-1"].includes(element.tooltipId)) {
								var heartTexts = d3.selectAll(containerId + ' text.heart:not(.none_heart)');
							   
								if (!heartTexts.empty()) {
									heartTexts.style('fill', '#fff');
								}
							}
						}
					});
				}
			});
		});
	}
}
{	//		Adjust tooltipids
	if (ver == "sleep") {
		svgCenters.selectAll('[tooltipid^="FO11-"]')
			.attr("tooltipid", function() {
				var currentTooltipId = d3.select(this).attr("tooltipid").replace("FO11", "SL");
				 return currentTooltipId;
			});

		const tSleeps = ["SL-CE-4-1", "SL-CE-8-1", "SL-CE-7-1", "SL-CE-3-1"];
		
		tSleeps.forEach(id => {
			d3.selectAll(`#Centers #coloured_centres [tooltipid="${id}"], #Centers #white_centres [tooltipid="${id}"]`).remove();
			});
	}

	if (ver == "animal") {
		svgCenters.selectAll('[tooltipid^="FO11-"]')
			.attr("tooltipid", function() {
				var currentTooltipId = d3.select(this).attr("tooltipid").replace("FO11", "AN");
				 return currentTooltipId;
			});
	}
	
	if (ver == "career") {
		svgCenters.selectAll('[tooltipid^="FO11-"]')
			.attr("tooltipid", function() {
				var currentTooltipId = d3.select(this).attr("tooltipid").replace("FO11-CE", "BG-F");
				 return currentTooltipId;
			});
	}

	if (ver == "material") {
		svgCenters.selectAll('[tooltipid^="FO11-"]')
			.attr("tooltipid", function() {
				var currentTooltipId = d3.select(this).attr("tooltipid").replace("FO11-CE", "BG-F");
				 return currentTooltipId;
			});
	}
}
{	//		Remove unwanted centers
	if (ver == "sleep" || ver == "animal") {		//	dream (sleep)
		svgCenters.attr("transform", "matrix(0,1,-1,0,965,-2)")
		svgCenters.selectAll(".noSleep").remove();
	}
	if (ver == "biology") {
		svgCenters.selectAll(".noBiology").remove();
	}
	if (ver == "angelic") {
		svgCenters.selectAll(".noAngelic").remove();
	}
}
}

async function setChannels(styles, gates, channels, gateset, root, color1, color2){
/*	gateset
	-	sleep
	-	animal
	-	biology
	-	angelic
	-   cbGMsleep
	-	career
	-   material
*/
	var svgChannels = root.select("#Channels");
	if (!svgChannels.node()) return;
	var template = styles ? "channels_"+styles.channel : "channels_0";

	let path = "/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/channels/";

	const data = await d3.svg(path+template+".svg?v=0.09");
	svgChannels.node().append(data.documentElement);
		
	for (var key in gates) {
		var gate = svgChannels.selectAll("#gate_"+key);
		gate.attr("visibility", "visible");
		if(gates[key] == "P")
			gate.select("#pers").attr("visibility", "visible");
		else if(gates[key] == "D")
			gate.select("#desi").attr("visibility", "visible");
		else if(gates[key] == "J")
			gate.select("#juxt").attr("visibility", "visible");

		root.select("#Gates").selectAll("#gate_"+key).attr("visibility", "visible");
	}
		
	if(styles && styles.channel==1 && gates){
		if(gates[10] && !gates[34] && !gates[57]){
			svgChannels.select("#stub_1020").attr("visibility", "visible");
		}
		if(!gates[10] && !gates[20] && gates[34]){
			svgChannels.select("#stub_3457").attr("visibility", "visible");
		}
	}		
	
	if( color1!=null && color2!=null ){
		svgChannels.selectAll(".red_gate").attr("stroke", color1);
		svgChannels.selectAll(".black_gate").attr("stroke", color2);
	} else {			
		var clrSet = channel_colors[styles ? styles.activationColor[0].id : 0]
		svgChannels.selectAll(".red_gate").attr("stroke", clrSet[0]);
		svgChannels.selectAll(".black_gate").attr("stroke", clrSet[1]);
	}

	if (gateset == "sleep") {
		svgChannels.selectAll('[tooltipid^="FO11-"]')
			.attr("tooltipid", function() {
				var currentTooltipId = d3.select(this).attr("tooltipid").replace("FO11", "SL");
				 return currentTooltipId.slice(-1)=='A' ? currentTooltipId.slice(0, -1) : currentTooltipId;
			});
	}

	if (gateset == "animal") {
		svgChannels.selectAll('[tooltipid^="FO11-"]')
			.attr("tooltipid", function() {
				var currentTooltipId = d3.select(this).attr("tooltipid").replace("FO11", "AN");
				 return currentTooltipId.slice(-1)=='A' ? currentTooltipId.slice(0, -1) : currentTooltipId;
			});
	}

	if (gateset == "career" || gateset == "material") {
		svgChannels.selectAll('[tooltipid^="FO11-CH"]')
			.attr("tooltipid", function() {
				var currentTooltipId = d3.select(this).attr("tooltipid").replace("FO11-CH", "BG-SC");
				 return currentTooltipId;
			});
		svgChannels.selectAll('[tooltipid^="FO11-GA"]')
			.attr("tooltipid", function() {
				var currentTooltipId = d3.select(this).attr("tooltipid").replace("FO11-GA", "BA-TA");
				 return currentTooltipId.slice(0, -1);
			});
	}
		
	//	Channels (for interactive)
	if (channels) {
		for (var key in channels) {
			svgChannels.select("#channels").select("#ch_"+key).attr("visibility", "visible");
		}

		g10 = gates[10] ? "10" : "";
		g20 = gates[20] ? "20" : "";
		g34 = gates[34] ? "34" : "";
		g57 = gates[57] ? "57" : "";
		mchannel=g10+g20+g34+g57;
		if (mchannel.length > 4 && (gateset != "sleep" || gateset != "animal"))
			svgChannels.select("#channels").select("#ch_"+mchannel).attr("visibility", "visible");
	}

	if(gateset == "sleep" || gateset == "animal" || gateset === "cbGMsleep") {
		svgChannels.attr("transform", "matrix(0,1,-1,0,965,-2)")
		svgChannels.selectAll(".noSleep").remove();
	}
	if(gateset == "biology")
		svgChannels.selectAll(".noBiology").remove();
	if(gateset == "angelic")
		svgChannels.selectAll(".noAngelic").remove();
}

function setPlanets(styles, objChart, ord, ver, root, isPanels = 0){
	if(ord==50) {
		ord = 0;
		chironVisible = true;
	}
	var svgPlanets = root;
	if (!svgPlanets.node()) return;
	var defStyle = objChart.chartProperties.viewId=="freeFoundAma1" || objChart.chartProperties.viewId=="freeMaterial" || objChart.chartProperties.viewId=="freeCareer";
	if (defStyle && styles)
		styles.planet = 0;
	var template = styles ? "planets_"+styles.planet : "planets_0";

	var bodyVisibvle = ver!=3 && ver!=4 && ver!=6 && ver!=7 && ver!=8 && ver!=81 && ver!=11 && ver!=14;
	var mindVisibvle = ver!=2 && ver!=4 && ver!=6 && ver!=8 && ver!=81 && ver!=11 && ver!=14;

	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/planets/"+template+".svg?v=0.07").then(data=> {
		svgPlanets.node().append(data.documentElement)

		var clrSet = channel_colors[styles ? styles.activationColor[0].id : 0];
		
		root.selectAll(".plBlack").attr("fill", clrSet[1]);
		root.selectAll(".plRed").attr("fill", (clrSet[0]=="#FF0000" && (!styles || styles.planet==0)) ? "#C92711" : clrSet[0]);

		if(bodyVisibvle){
			var dplan =	root.select("#design")
				.selectAll(".planet")
				.data(objChart["bodyPlanets"]);

			dplan.select("#number")
				.text(function(d) { return d[ord].Gate+'.'+d[ord].Line; });
			dplan.filter(function(d) { return !d[ord].Active }).select("#background").selectAll("path").attr("fill", "#808080");
			dplan.select("#up_arrow")
				 .attr("visibility", function(d) { return d[ord].FixingState==1 ? "visible" : "hidden";});
			dplan.select("#down_arrow")
				 .attr("visibility", function(d) { return d[ord].FixingState==2 ? "visible" : "hidden";});
			dplan.select("#star")
				 .attr("visibility", function(d) { return d[ord].FixingState==3 ? "visible" : "hidden";});
			dplan.select("#retro")
				 .attr("visibility", function(d) { return d[ord].retrograde==1 && (ver==12 || ver==13) ? "visible" : "hidden";});
			dplan.select("#plate").attr("tooltipid", function(d) {
					return "FO11-GA-"+d[ord].Gate+"A"+
						  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
						  "+FO11-CO-B"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
						  "+FO11-TO-B"+d[ord].Tone+
						  "+FO11-BA-B"+d[ord].Base+
						  "+FO11-PL-B"+d[ord].Id+
						  "+FO11-GA-"+d[ord].Gate+"B";
				});
			if (ver==13) {
				dplan.select("#plate").attr("tooltipid", function(d) {
					return "HD"+
						  "+FO11-GA-"+d[ord].Gate+"A"+
						  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
						  "+FO11-CO-B"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
						  "+FO11-TO-B"+d[ord].Tone+
						  "+FO11-BA-B"+d[ord].Base+
						  "+FO11-PL-B"+d[ord].Id+
						  "+FO11-GA-"+d[ord].Gate+"B"+
						  "+ASTRO"+ 
						  "+AN-P"+d[ord].Id+"-S"+d[ord].zodiacId+
						  "+AN-S"+d[ord].zodiacId+"-H"+d[ord].house+
						  "+AS-"+d[ord].zodiac+
						  "+AN-P"+d[ord].Id+"-H"+d[ord].house;
						  
				});
			}
			if (objChart.chartProperties.viewId == "freeCareer") {
				dplan.select("#plate").attr("tooltipid", function(d) {
					return "BA-TA-"+d[ord].Gate+
						  "+BA-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
						  "+FO11-CO-B"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
						  "+FO11-TO-B"+d[ord].Tone+
						  "+FO11-BA-B"+d[ord].Base+
						  "+BG-LA-"+d[ord].Id
						  "+FO11-GA-"+d[ord].Gate+"B";
				});
			}
			if (objChart.chartProperties.viewId == "freeFoundAcI") {
				dplan.select("#plate").attr("tooltipid", function(d) {
						return "FVAP"+d[ord].Gate+"-"+d[ord].Line+
							  "+FO11-GA-"+d[ord].Gate+"A"+
							  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
							  "+FO11-CO-B"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
							  "+FO11-TO-B"+d[ord].Tone+
							  "+FO11-BA-B"+d[ord].Base+
							  "+FO11-PL-B"+d[ord].Id+
							  "+FO11-GA-"+d[ord].Gate+"B";
				});
			}
			
			if (ver==10) {
				var circ_tt = {1:"CIRC-TS", 2:"CIRC-DS", 3:"CIRC-AS", 4:"CIRC-LS",
							 5:"CIRC-IE", 6:"CIRC-CS", 7:"CIRC-IS", 57:"CIRC-IEIS", 67:"CIRC-CSIS"};
				dplan.select("#plate").attr("tooltipid", function(d, i) {
					return  i<13 ? circ_tt[objChart.gates[d[ord].Gate][0].Circuit] : "";
				});
			}
		} else {
			root.select("#design").attr("visibility","hidden");
		}
		if(mindVisibvle){
			var pplan =	root.select("#personality")
				.selectAll(".planet")
				.data(objChart["mindPlanets"]);

			pplan.select("#number")
				.text(function(d) { return ver==7 ? d[ord].Gate+'.'+d[ord].Line+'.'+d[ord].Color : d[ord].Gate+'.'+d[ord].Line; });
			pplan.select("#background").select("g").selectAll("path")
					.data(function(d) {
								if(d[ord].Id>1 && objChart["mindPlanets"][0][0].Color == d[ord].Color && ver==7)
									return ["#FFB206","#FFB206"];
								else 
									return ["#727272","#0763D3"];
							  } ).attr("fill", function(d) { return d; } );
			pplan.filter(function(d) { return !d[ord].Active }).select("#background").selectAll("path").attr("fill", "#808080");
			pplan.select("#up_arrow")
				 .attr("visibility", function(d) { return d[ord].FixingState==1 ? "visible" : "hidden";});
			pplan.select("#down_arrow")
				 .attr("visibility", function(d) { return d[ord].FixingState==2 ? "visible" : "hidden";});
			pplan.select("#star")
				 .attr("visibility", function(d) { return d[ord].FixingState==3 ? "visible" : "hidden";});
			pplan.select("#retro")
				 .attr("visibility", function(d) { return d[ord].retrograde==1 && ((ver==7 && d[ord].Id!=13) || ver==12 || ver==13) ? "visible" : "hidden";});
			pplan.select("#plate").attr("tooltipid", function(d) {
					return "FO11-GA-"+d[ord].Gate+"A"+
						  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
						  "+FO11-CO-M"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
						  "+FO11-TO-M"+d[ord].Tone+
						  "+FO11-BA-M"+d[ord].Base+
						  "+FO11-PL-M"+d[ord].Id+
						  "+FO11-GA-"+d[ord].Gate+"B";
				});
			if (ver==13) {
				pplan.select("#plate").attr("tooltipid", function(d) {
					return "HD"+
						  "+FO11-GA-"+d[ord].Gate+"A"+
						  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
						  "+FO11-CO-B"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
						  "+FO11-TO-B"+d[ord].Tone+
						  "+FO11-BA-B"+d[ord].Base+
						  "+FO11-PL-B"+d[ord].Id+
						  "+FO11-GA-"+d[ord].Gate+"B"+
						  "+ASTRO"+ 
						  "+AN-P"+d[ord].Id+"-S"+d[ord].zodiacId+
						  "+AN-S"+d[ord].zodiacId+"-H"+d[ord].house+
						  "+AS-"+d[ord].zodiac+
						  "+AN-P"+d[ord].Id+"-H"+d[ord].house;
						  
				});
			}

			if (objChart.chartProperties.viewId == "freeMaterial") {
				dplan.select("#plate").attr("tooltipid", function(d) {
					return "BA-TA-"+d[ord].Gate+
						  "+BA-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
						  "+FO11-CO-B"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
						  "+FO11-TO-B"+d[ord].Tone+
						  "+FO11-BA-B"+d[ord].Base+
						  "+BG-LA-"+d[ord].Id
						  "+FO11-GA-"+d[ord].Gate+"B";
				});


				pplan.select("#plate").attr("tooltipid", function(d) {
					return "BA-TA-"+d[ord].Gate+
						  "+BA-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
						  "+FO11-CO-M"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
						  "+FO11-TO-M"+d[ord].Tone+
						  "+FO11-BA-M"+d[ord].Base+
						  "+BG-LA-"+d[ord].Id//FO11-PL-B"+d[ord].Id+
						  "+FO11-GA-"+d[ord].Gate+"B";
				});
			}

			if (objChart.chartProperties.viewId == "freeFoundAcI") {
				pplan.select("#plate").attr("tooltipid", function(d) {
						return "FVAP"+d[ord].Gate+"-"+d[ord].Line+
							  "+FO11-GA-"+d[ord].Gate+"A"+
							  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
							  "+FO11-CO-M"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
							  "+FO11-TO-M"+d[ord].Tone+
							  "+FO11-BA-M"+d[ord].Base+
							  "+FO11-PL-M"+d[ord].Id+
							  "+FO11-GA-"+d[ord].Gate+"B";
				});
			}
			
			if (ver==7) {
				pplan.select("#plate").attr("tooltipid", function(d) {
					return "HD"+
						  "+FO11-GA-"+d[ord].Gate+"A"+
						  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
						  "+FO11-CO-M"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
						  "+FO11-TO-M"+d[ord].Tone+
						  "+FO11-BA-M"+d[ord].Base+
						  "+FO11-PL-M"+d[ord].Id+
						  "+FO11-GA-"+d[ord].Gate+"B"+
						  "+ASTRO"+ 
						  "+AN-P"+d[ord].Id+"-S"+d[ord].zodiacId+
						  "+AN-P"+d[ord].Id+"-H"+d[ord].house;
				});
			}

			if (objChart.chartProperties.viewId == "freeCareer") {
				pplan.select("#plate").attr("tooltipid", function(d) {
					return "BA-TA-"+d[ord].Gate+
						  "+BA-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
						  "+FO11-CO-M"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
						  "+FO11-TO-M"+d[ord].Tone+
						  "+FO11-BA-M"+d[ord].Base+
						  "+BG-LA-"+d[ord].Id//FO11-PL-B"+d[ord].Id+
						  "+FO11-GA-"+d[ord].Gate+"B";
				});
			}
			if (ver==10) {
				var circ_tt = {1:"CIRC-TS", 2:"CIRC-DS", 3:"CIRC-AS", 4:"CIRC-LS",
							 5:"CIRC-IE", 6:"CIRC-CS", 7:"CIRC-IS", 57:"CIRC-IEIS", 67:"CIRC-CSIS"};
				pplan.select("#plate").attr("tooltipid", function(d, i) {
					return i<13 ? circ_tt[objChart.gates[d[ord].Gate][0].Circuit] : "";
				});
			}
		} else {
			root.select("#personality").attr("visibility","hidden");
		}

		if(styles && (styles.planet == 1 || styles.planet == 2 || styles.planet == 3) && (objChart.chartProperties.viewId=="freeFoundCH"))
			root.selectAll("#number").attr("visibility", "hidden")

		if (chironVisible){
			svgPlanets.select("#design").attr("transform", "matrix(0.95 0 0 0.95 0 0)");
			svgPlanets.select("#personality").attr("transform", "matrix(0.95 0 0 0.95 40 0)");
			svgPlanets.selectAll(".chiron").attr("visibility","visible");
			svgPlanets.selectAll(".last3").attr("transform", "translate(0, 55)");
		}
		
		if(objChart.chartProperties.viewId=="freeFoundK" || objChart.chartProperties.viewId=="freeFoundAc") {
			if (styles && (styles.planet == 1 || styles.planet == 2 || styles.planet == 3)) {
				svgPlanets.select("#design").attr("transform", "translate(-70)");
				svgPlanets.select("#personality").attr("transform", "translate(70)");
			} else {
				svgPlanets.select("#design").attr("transform", "translate(-90)");
				svgPlanets.select("#personality").attr("transform", "translate(90)");
			}
		}

		if(objChart.chartProperties.viewId == "freeNowAstro" ||
		   objChart.chartProperties.viewId == "freeNowAstroP") {
			svgPlanets.select("#personality").attr("transform", "matrix(0.93,0,0,0.93,115,10)");

			svgPlanets.select("#personality").selectAll("#retro").attr("transform","matrix(1 0 0 1 -75 0)");
			svgPlanets.select("#personality").selectAll(".chiron").attr("visibility","visible");
			svgPlanets.select("#personality").selectAll(".chiron").attr("transform", "matrix(1 0 0 1 0 165)");
		}
		
		if(objChart.chartProperties.viewId=="astroQuantum" || objChart.chartProperties.viewId=="astroQuantumI" || objChart.chartProperties.viewId=="astroTarot" || objChart.chartProperties.viewId=="astroTarotI" ||
		   objChart.chartProperties.viewId=="freeSacrElem2" || objChart.chartProperties.viewId=="freeFoundAma4" || objChart.chartProperties.viewId=="relocFound") {
			if (styles && (styles.planet == 1 || styles.planet == 2 || styles.planet == 3)) {
				svgPlanets.select("#design").attr("transform", "matrix(0.95 0 0 0.95 -20 -10)");
				svgPlanets.select("#personality").attr("transform", "matrix(0.95 0 0 0.95 50 -10)");
			} else {
				svgPlanets.select("#design").attr("transform", "matrix(0.95 0 0 0.95 -50 -10)");
				svgPlanets.select("#personality").attr("transform", "matrix(0.95 0 0 0.95 80 -10)");
				
				svgPlanets.select("#design").selectAll("#retro").attr("transform","matrix(1 0 0 1 75 0)");
				svgPlanets.select("#personality").selectAll("#retro").attr("transform","matrix(1 0 0 1 -75 0)");
			}
			root.selectAll(".chiron").attr("visibility","visible");
			root.selectAll(".lilith").attr("visibility","visible");
			root.selectAll(".last3").attr("transform", "translate(0, 110)");
		}

		if(objChart.chartProperties.viewId=="freeFoundAma1" || objChart.chartProperties.viewId=="freeSimple")
			root.attr("transform", "matrix(1.145,0,0,1.145,-60,-85)")

		if(objChart.chartProperties.viewId=="freeMaterial" || objChart.chartProperties.viewId=="freeCareer") {
			root.selectAll("#planet_symbol").attr("opacity", 0)
			root.selectAll("#planet_letter").attr("opacity", "100")
		}

		if (isPanels) {
			if (objChart.chartProperties.viewId=="freeFoundCH") {
				root.select("#personality").attr("transform", "matrix(1,0,0,1,-225,0)")
			}
			if (objChart.chartProperties.viewId=="freeFoundK" || objChart.chartProperties.viewId=="freeFoundAc") {
				root.select("#personality").attr("transform", "matrix(1,0,0,1,-480,0)")
			}
			if (objChart.chartProperties.viewId=="astroQuantum" || objChart.chartProperties.viewId=="astroQuantumI" || objChart.chartProperties.viewId=="astroTarot" || objChart.chartProperties.viewId=="astroTarotI") {
				if (styles && (styles.planet == 1 || styles.planet == 2 || styles.planet == 3))
					root.select("#personality").attr("transform", "matrix(0.95,0,0,0.95,-400,-10)")
				else
					root.select("#personality").attr("transform", "matrix(0.95,0,0,0.95,-370,-10)")
			}
		}
	});
}

function setCirclesArrow(styles, objChart, ord, ver, root, adv){
	if (!root.node()) return;
	var template = styles && styles.planet == 2 ? "arrows_1" : "arrows_0";

	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/arrows/"+template+".svg?v=0.01").then(data=> {
		root.node().append(data.documentElement)

		var clrSet = channel_colors[styles ? styles.activationColor[0].id : 0];
		root.selectAll(".flBlack").attr("fill", clrSet[1]);
		root.selectAll(".flRed").attr("fill", (clrSet[0]=="#FF0000" && (!styles || styles.planet==0)) ? "#C92711" : clrSet[0]);
		root.selectAll(".stBlack").attr("stroke", clrSet[1]);
		root.selectAll(".stRed").attr("stroke", (clrSet[0]=="#FF0000" && (!styles || styles.planet==0)) ? "#C92711" : clrSet[0]);
		
		if(!adv){
			if (objChart["bodyPlanets"][0][ord]!=null && ver!=0 && ver!=4 && ver!=81 && ver!=11 && ver!=8 && ver!=14) {
				if (objChart["bodyPlanets"][0][ord].Tone < 4)
					root.select("#bsLeft")
					  .attr("visibility", "visible");
				else
					root.select("#bsRight")
					  .attr("visibility", "visible");
					  
				if (objChart["bodyPlanets"][3][ord].Tone < 4)
					root.select("#bcLeft")
					  .attr("visibility", "visible");
				else
					root.select("#bcRight")
					  .attr("visibility", "visible");
				if(ver!=12){	  
					root.select("#bsTone").text(objChart["bodyPlanets"][0][ord].Tone);
					root.select("#bsColor").text(objChart["bodyPlanets"][0][ord].Color);
					root.select("#bcTone").text(objChart["bodyPlanets"][3][ord].Tone);
					root.select("#bcColor").text(objChart["bodyPlanets"][3][ord].Color);
					root.select("#bs").attr("visibility", "visible");
					root.select("#bc").attr("visibility", "visible");
				}
				
				if (ver==5) {
					d3.select("#bs").attr("tooltipid", "FO11-VA-B1-"+objChart["bodyPlanets"][0][ord].Color+objChart["bodyPlanets"][0][ord].Tone);
					d3.select("#bc").attr("tooltipid", "FO11-VA-B2-"+objChart["bodyPlanets"][3][ord].Color+objChart["bodyPlanets"][3][ord].Tone);
				} else {
					d3.select("#bs").select("#Arrow").attr("tooltipid", "FO11-VA-B1-"+objChart["bodyPlanets"][0][ord].Color+objChart["bodyPlanets"][0][ord].Tone);
					d3.select("#bs").select("#ToneIcon").attr("tooltipid", "FO11-TO-B"+objChart["bodyPlanets"][0][ord].Tone);
					d3.select("#bs").select("#ColorIcon").attr("tooltipid", "FO11-CO-B"+objChart["bodyPlanets"][0][ord].Color);
					d3.select("#bc").select("#Arrow").attr("tooltipid", "FO11-VA-B2-"+objChart["bodyPlanets"][3][ord].Color+objChart["bodyPlanets"][3][ord].Tone);
					d3.select("#bc").select("#ToneIcon").attr("tooltipid", "FO11-TO-B"+objChart["bodyPlanets"][3][ord].Tone);
					d3.select("#bc").select("#ColorIcon").attr("tooltipid", "FO11-CO-B"+(objChart["bodyPlanets"][3][ord].Color+6));
				}
			}
			if (objChart["mindPlanets"][0][ord]!=null && ver!=0 && ver!=4 && ver!=81 && ver!=11 && ver!=14) {
				if (objChart["mindPlanets"][0][ord].Tone < 4)
					root.select("#msLeft")
					  .attr("visibility", "visible");
				else
					root.select("#msRight")
					  .attr("visibility", "visible");
					  
				if (objChart["mindPlanets"][3][ord].Tone < 4)
					root.select("#mcLeft")
					  .attr("visibility", "visible");
				else
					root.select("#mcRight")
					  .attr("visibility", "visible");

				if (ver!=12) {
					root.select("#msTone").text(objChart["mindPlanets"][0][ord].Tone);
					root.select("#msColor").text(objChart["mindPlanets"][0][ord].Color);
					root.select("#msColorH").text((objChart["mindPlanets"][0][ord].Color+2)%6+1);
					root.select("#mcTone").text(objChart["mindPlanets"][3][ord].Tone);
					root.select("#mcColor").text(objChart["mindPlanets"][3][ord].Color);
					root.select("#mcColorH").text((objChart["mindPlanets"][3][ord].Color+2)%6+1);
					root.select("#ms").attr("visibility", "visible");
					root.select("#mc").attr("visibility", "visible");
				}
				if (ver==5) {
					root.select("#ms").attr("tooltipid", "FO11-VA-M1-"+objChart["mindPlanets"][0][ord].Color+objChart["mindPlanets"][0][ord].Tone);
					root.select("#mc").attr("tooltipid", "FO11-VA-M2-"+objChart["mindPlanets"][3][ord].Color+objChart["mindPlanets"][3][ord].Tone);
				} else {
					root.select("#ms").select("#Arrow").attr("tooltipid", "FO11-VA-M1-"+objChart["mindPlanets"][0][ord].Color+objChart["mindPlanets"][0][ord].Tone);
					root.select("#ms").select("#ToneIcon").attr("tooltipid", "FO11-TO-M"+objChart["mindPlanets"][0][ord].Tone);
					root.select("#ms").select("#ColorIcon").attr("tooltipid", "FO11-CO-M"+objChart["mindPlanets"][0][ord].Color);
					root.select("#ms").select("#ColorHIcon").attr("tooltipid", "FO11-CO-M"+((objChart["mindPlanets"][0][ord].Color+2)%6+1));
					
					root.select("#mc").select("#Arrow").attr("tooltipid", "FO11-VA-M2-"+objChart["mindPlanets"][3][ord].Color+objChart["mindPlanets"][3][ord].Tone);
					root.select("#mc").select("#ToneIcon").attr("tooltipid", "FO11-TO-M"+objChart["mindPlanets"][3][ord].Tone);
					root.select("#mc").select("#ColorIcon").attr("tooltipid", "FO11-CO-M"+(objChart["mindPlanets"][3][ord].Color+6));

					root.select("#mc").select("#ColorHIcon").attr("tooltipid", "FO11-CO-M"+((objChart["mindPlanets"][3][ord].Color+2)%6+1));
				}
				if (ver==8) {
					root.selectAll("#ToneIcon").attr("visibility", "hidden");
					root.selectAll("#ColorIcon").attr("visibility", "hidden");
					root.selectAll("#ColorHIcon").attr("visibility", "visible")
							.attr("transform", function(d){
								return this.getAttribute("transform") +	" translate(35)";
							});
				}
				if (ver==7) {
					root.selectAll("#ToneIcon").attr("visibility", "hidden");
					root.selectAll("#mc").attr("transform", "translate(0,-30)");

					root.select("#ms").select("#Arrow").attr("transform", "translate(390,65)");
					root.select("#mc").select("#Arrow").attr("transform", "translate(390,175)");
				}
			}
		} else {
			if (ver==5 || ver==6 || ver==61 || ver==7) {
				var acronyms = ["#bs", "#bc", "#ms", "#mc"];
				var indexs = [0, 3, 0, 3];
				var planets = ["bodyPlanets", "bodyPlanets", "mindPlanets", "mindPlanets"];
				var tt = ["B1", "B2", "M1", "M2"];
				for (var i = 0; i < 8; i++) {
					var j = Math.floor(i/4);	// chart index
					var k = i%4;
					var planet = objChart[planets[k]][indexs[k]][j];
					var acr = acronyms[k];

					if (planet!=null) {
						if (planet.Tone < 4)
							root.select(acr+j)
							  .select(acr+"Left")
							  .attr("visibility", "visible");
						else
							root.select(acr+j)
							  .select(acr+"Right")
							  .attr("visibility", "visible");
						root.select(acr+j).select(acr+"Tone").text(planet.Tone);
						root.select(acr+j).select(acr+"Color").text(planet.Color);
						root.select(acr+j).attr("visibility", "visible");
						root.select(acr+j).attr("tooltipid", "FO11-VA-"+tt[k]+"-"+planet.Color+planet.Tone);
					}
				}	
			
				if (ver==6) {
					mstp=objChart["mindPlanets"][0][1];
					root.select("#mst").select("#msColor").text(mstp.Color);
					root.select("#mst").select("#msColorH").text((mstp.Color+2)%6+1);
					root.select("#mst").attr("visibility", "visible");
					root.select("#mst").attr("tooltipid","FT11-CO-M"+mstp.Color);

					mctp=objChart["mindPlanets"][3][1];
					root.select("#mct").select("#mcColor").text(mctp.Color);
					root.select("#mct").select("#mcColorH").text((mctp.Color+2)%6+1);
					root.select("#mct").attr("visibility", "visible");
					root.select("#mct").attr("tooltipid","FT11-CO-M"+mctp.Color);
				}
				if (ver==61) {
					bstp=objChart["bodyPlanets"][0][1];
					root.select("#bst").select("#bsColor").text(bstp.Color);
					root.select("#bst").select("#bsColorH").text((bstp.Color+2)%6+1);
					root.select("#bst").attr("visibility", "visible");
					root.select("#bst").attr("tooltipid","FT11-CO-B"+bstp.Color);

					bctp=objChart["bodyPlanets"][3][1];
					root.select("#bct").select("#bcColor").text(bctp.Color);
					root.select("#bct").select("#bcColorH").text((bctp.Color+2)%6+1);
					root.select("#bct").attr("visibility", "visible");
					root.select("#bct").attr("tooltipid","FT11-CO-B"+bctp.Color);
				}
			}
		}
	});
}


async function chart(objChart, ord, ver, root, shadowGates){
/* ver
	0 - free
	1 - full
	2 - body
	3 - mind
	4 - none
	5 - interactive
	6 - no planets(with circles and arrows)
	7 - now chart
	8 - not self
   81 - not self (talking)
   10 - circuits
   11 - astro mandala
   14 - profile
   95 < light
  101 - management
*/
	if(ver>95){
		ord = ver==98 ? 50 : ord;
		ver=0;
		bgFile="bgFound";
	}else{
		bgFile="bgFound";
	}
	var dept = 0;
	if(ord>100){
		dept = ord%100;
		ord = Math.floor(ord/100) - 1;
	}

	chironVisible = ord==50;
	ord = ord==50 ? 0 : ord;
	//ord = ver==11 ? 2 : ord;	// astro chart use mind bodygraph

	if(root==null)
		root = d3.select("#chart"+ord);
	if(root.empty()) {
		console.log("Root node for chart not found!");
		return;
	}

	const data = await d3.svg("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/"+bgFile+".svg?v=0.47");
	root.node().append(data.documentElement);
{	//	Init
	var styles = null;
	if (objChart.chartProperties && objChart.chartProperties.viewId != "freeMandalaHC"
								 && objChart.chartProperties.viewId != "freeFoundL"
								 && objChart.chartProperties.viewId != "freeFoundLC") {
		styles = objChart.chartProperties.styles;
	} else {
		styles = objChart.styles;
	}

	if(objChart.chartProperties.csvLvl==0)
		d3.select("#link").attr("transform", "matrix(1.5,0,0,1.5,165,690)");
}
{	//	Styles
	setStyles(styles, root, objChart.chartProperties.viewId, "found");

	var skin = objChart.personSettings[ord] ? objChart.personSettings[ord].skin : 0;
	var auraColors = objChart.data.type[ord] ? objChart.data.type[ord].AuraColors : null;
	setBodyAura(styles, auraColors, null, root, skin);
}
{	//	GatesSet
	var gateset = null;
	if(objChart.data.gatesSet[ord]=='Biology'){
		gateset = "biology";
		root.selectAll(".noBiology").attr("visibility", "hidden");
	}
	if(objChart.data.gatesSet[ord]=='Angelic'){
		gateset = "angelic"
		root.selectAll(".noAngelic").attr("visibility", "hidden");
	}
	if(objChart.chartProperties.svcId == "freeMultidim"){
		if(ord==2 || ord==4 || ord==6 || ord==8){
			root.select("#bodyPlanets").attr("transform", "matrix(1 0 0 1 470 0)");
			root.select("#mindPlanets").attr("transform", "matrix(1 0 0 1 -470 0)");
			root.select("#labelBody").attr("text-anchor", "end").attr("transform", "matrix(1 0 0 1 85 28)");
			root.select("#labelMind").attr("text-anchor", "start").attr("transform", "matrix(1 0 0 1 510 28)");
		}
	}
}
{	//	Now Chart
	if (ver==7) {
		root.select("#CirclesArrows").attr("transform", "matrix(1,0,0,1,130,70)");
		root.select("#LunarPhases").select("#personality").attr("transform", "matrix(0.5 0 0 0.5 440 235)")
	}
}
{	//	Not Self (shadow)
	if (ver==8 || ver==81) {
		root.selectAll("#CirclesArrows").attr("transform", "translate(120,50)");
		root.selectAll("#Gates").attr("fill-opacity", "0.3");

		for (var gkey in shadowGates){
			d3.select("#nGates").select("#gate_" + gkey)
								.attr("visibility", "visible")
								.selectAll("circle")
								.attr("fill", shadowGates[gkey]);
		}
	}
}
{	//	Advanced
	if (objChart.chartProperties.viewId=="freeFoundAdv") {
		root.select("#LunarPhases").select("#design").attr("transform", "matrix(0.6 0 0 0.6 60 300)")
		root.select("#LunarPhases").select("#personality").attr("transform", "matrix(0.6 0 0 0.6 480 300)")
	}
}

{	//	Circuits
	if (ver==10){
		var circs = {1:"Tribal", 2:"Defense", 3:"Abstract", 4:"Logical",
					 5:"Individual", 6:"Centering", 7:"Integration", 57:"IndInt", 67:"CenInt"};
		var plan =	d3.selectAll("#planet");

		plan.on("click",function(d){
			d3.select("#Gates").selectAll("circle").attr("fill","#C92711");
			d3.select("#gate_"+d[0].Gate).select("circle").attr("fill","#01cd01");
			d3.selectAll(".circuit").attr("visibility", "hidden");
			d3.select("#bar_frames").selectAll("rect").attr("stroke", "none");
			d3.selectAll("#planet").select("#plate").attr("stroke", "none");
			
			circId = objChart.gates[d[0].Gate][0].Circuit;
			if (circId==57 || circId==67){
				d3.selectAll("#"+circs[Math.floor(circId/10)]).attr("visibility", "visible");
				d3.selectAll("#"+circs[circId%10]).attr("visibility", "visible");
				
				d3.select("#bar_"+circs[Math.floor(circId/10)]).attr("stroke", "#01cd01");
				d3.select("#bar_"+circs[circId%10]).attr("stroke", "#01cd01");
			} else {
				d3.selectAll("#"+circs[circId]).attr("visibility", "visible");
				d3.select("#bar_"+circs[circId]).attr("stroke", "#01cd01");
			}
		});
	}
}

{	//	Lunar Phases
	if ((objChart.chartProperties.csvLvl>1 &&
		(objChart.chartProperties.viewId == "freeFound" ||
		 objChart.chartProperties.viewId == "freeFoundI" ||
		 objChart.chartProperties.viewId == "freeFoundM" ||
		 objChart.chartProperties.viewId == "freeFoundB" ||
		 (objChart.chartProperties.viewId == "freeFoundAdv" && ord==0) ||
		 objChart.chartProperties.viewId == "astroQuantum" ||
		 objChart.chartProperties.viewId == "astroQuantumI" ||
		 objChart.chartProperties.viewId == "astroTarot" ||
		 objChart.chartProperties.viewId == "astroTarotI" ||
		 objChart.chartProperties.viewId == "freeFoundCH" ||
		 objChart.chartProperties.viewId == "freeFoundK" ||
		 (objChart.chartProperties.viewId == "freeFoundQC" && ver==0) ||
		 (objChart.chartProperties.viewId == "freeFoundAma1" && ord==0) ||
		 (objChart.chartProperties.viewId == "freeFoundAma5" && ord==0) ||
		 (objChart.chartProperties.viewId == "freeFoundAma6" && ver!=8) ||
		 objChart.chartProperties.viewId == "freeDreamC")) ||
		 objChart.chartProperties.viewId == "freeNowAstro" ||
		 objChart.chartProperties.viewId == "freeNowAstroP") {

		if (objChart.data.lunarPhaseD[ord])
			root.select("#LunarPhases").select("#design")
									   .select("#"+objChart.data.lunarPhaseD[ord].Name).attr("visibility", "visible")
									   .select("title").text(objChart.data.lunarPhaseD[ord].NameL);

		if (objChart.data.lunarPhaseP[ord])
			root.select("#LunarPhases").select("#personality")
									   .select("#"+objChart.data.lunarPhaseP[ord].Name).attr("visibility", "visible")
									   .select("title").text(objChart.data.lunarPhaseP[ord].NameL);
	}
}
{	//	CirclesArrows
	if (objChart.chartProperties.csvLvl>0 || ver==7) { 
		setCirclesArrow(styles, objChart, ord, ver, root.select("#CirclesArrows"));
	}
}

{	//	Centers
	var centers = new Array();
	for (var key in objChart.centers) {
		if(ver == 11)
			centers.push(objChart.centers[key].index[0]);
		else if(dept>0)
			centers.push(objChart.centers[key].departments[ord][dept]);
		else
			centers.push(objChart.centers[key].index[ord]);
	}
	var _ver = (ver==8 || ver==81) ? "shadow" : gateset;

	if (objChart.chartProperties.viewId == "freeCareer") {
	    _ver = "career";
	} else if (objChart.chartProperties.viewId == "freeMaterial") {
	    _ver = "material";
	} else {
		_ver;
	}

	setCenters(styles, centers, _ver, root);
}
{	//	Gates and Channels
	var gates = {};
	if(objChart.chartProperties.viewId=='freeMandalaM' && (objChart.gates[10] && objChart.gates[10][ord]!=null ||
														   objChart.gates[20] && objChart.gates[20][ord]!=null ||
														   objChart.gates[34] && objChart.gates[34][ord]!=null ||
														   objChart.gates[57] && objChart.gates[57][ord]!=null)) {
		if(!objChart.gates[10] || objChart.gates[10][ord]==null)
			gates[10] = "P";
		if(!objChart.gates[20] || objChart.gates[20][ord]==null)
			gates[20] = "P";
		if(!objChart.gates[34] || objChart.gates[34][ord]==null)
			gates[34] = "P";
		if(!objChart.gates[57] || objChart.gates[57][ord]==null)
			gates[57] = "P";
	}
	for (var key in objChart.gates) {
		if(objChart.gates[key][ord]!=null) {
			if(objChart.chartProperties.viewId=='freeMandalaM') {
				if(objChart.gates[objChart.gates[key][ord].Harmonic]==null || objChart.gates[objChart.gates[key][ord].Harmonic][ord]==null)
					gates[objChart.gates[key][ord].Harmonic] = "P";
				
				continue;
			}
			
			if ((ver==14 && (!checkHarmonics(key, objChart.gates, ord) && (key != objChart["bodyPlanets"][0][ord].Gate && 
																		 key != objChart["bodyPlanets"][1][ord].Gate &&
																		 key != objChart["mindPlanets"][0][ord].Gate &&
																		 key != objChart["mindPlanets"][1][ord].Gate))) ||
			(dept>0 && objChart.gates[key][ord].Department!=dept))
				continue;

			gates[key] = objChart.gates[key][ord]["Activation"];
		}
	}

	if (_ver == "career" || _ver == "material") {
		root.selectAll('[tooltipid^="FO11-GA-"]')
			.attr("tooltipid", function() {
				var currentTooltipId = d3.select(this).attr("tooltipid").replace("FO11-GA", "BA-TA");
				 return currentTooltipId.slice(0, -1);
			});
	}

	var channels = {};	
	for (var key in objChart.channels) {
		if (objChart.channels[key].index[ord]==1)
			channels[key] = objChart.channels[key].details;
	}

	await setChannels(styles, gates, channels, _ver, root);
}
{	//	Planets
	if (ver!=4 && ver!=6)
		setPlanets(styles, objChart, chironVisible ? 50 : ord, ver, root.select("#Planets"));
}

{	//	Planet labels
	if(objChart.labels && objChart.labels.length>0){
		if(objChart.chartProperties.svcId == "freeMultidim"){
			var lblPers = objChart.labels.length-1;
			var lblDesi = (objChart.labels.length-10)+ord;
			if(ord==1 || ord==3 || ord==5 | ord==7){
				temp = lblPers;
				lblPers=lblDesi;
				lblDesi=temp;
			}
			root.select("#labelBody").text(objChart.labels[lblPers].lbl);
			root.select("#labelMind").text(objChart.labels[lblDesi].lbl);
		} else if(objChart.labels.length>1) {
			root.select("#labelBody").text(objChart.labels[objChart.labels.length-2].lbl);
			root.select("#labelMind").text(objChart.labels[objChart.labels.length-1].lbl);
		}
	}
}
}
function chartAdv(objChart, ver, ord){
/* ver
	4 - calendar transit
	5 - arrows/circles
	6 - arrows/circles transit
	61- arrows/circles transit (design)
	7 - arrows/circles predictor
*/
{	//	Init
	var dept = 0;
	if(ord>100){
		dept = ord%100;
		ord = dept;
	}

	if (ord != null && dept == 0)
		advChart = objChart.ChartAdvsStruct[ord];
	else
		advChart = objChart.advChart;

	var styles = null;
	if (objChart.chartProperties) {
		styles = objChart.chartProperties.styles;
	} else {
		styles = objChart.styles;
	}

	var root = d3.select(ord != null ? "#chartAdv"+ord : "#chartAdv");
	if(root.empty()) {
		console.log("Root node for chart not found!");
		return;
	}
}
	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/bgFound.svg?v=0.44").then(data=> {
		root.node().append(data.documentElement);

{	//	Styles
	setStyles(styles, root, objChart.chartProperties.viewId, "found");

	setBodyAura(styles, advChart.auraColors, null, root)
}
{	//	Centers
	var centers = new Array();
	for (var key in advChart.centers) {
		if (dept>0) 
			centers[key] = advChart.departments[key][dept];
		else if (ver==7 && centers[key] && objChart.centers[key] && objChart.centers[key].index[0]==0)
			centers[key] = -1;
		else
			centers[key] = advChart.centers[key];
	}

	setCenters(styles, centers, null, root);
}
{	//	Gates and Channels
	var gates = new Array();
	if(objChart.chartProperties.viewId=='freeMandalaM' && ((objChart.gates[10] && objChart.gates[10][0]!=null) ||
														   objChart.gates[20] && objChart.gates[20][0]!=null ||
														   objChart.gates[34] && objChart.gates[34][0]!=null ||
														   objChart.gates[57] && objChart.gates[57][0]!=null)) {
		gates = {};
		if(!objChart.gates[10] || objChart.gates[10][0]==null)
			gates[10] = "P";
		if(!objChart.gates[20] || objChart.gates[20][0]==null)
			gates[20] = "P";
		if(!objChart.gates[34] || objChart.gates[34][0]==null)
			gates[34] = "P";
		if(!objChart.gates[57] || objChart.gates[57][0]==null)
			gates[57] = "P";

		for (var key in objChart.gates) {
			if(objChart.gates[key][0]!=null && (objChart.gates[objChart.gates[key][0].Harmonic]==null || objChart.gates[objChart.gates[key][0].Harmonic][0]==null)) 
				gates[objChart.gates[key][0].Harmonic] = gates[objChart.gates[key][0].Harmonic] == "P" ? "J" :"D";
			
			if(objChart.gates[key][1]!=null)
				gates[key] = gates[key] == "D" ? "J" :"P";
		}
	} else {
		for (var key in advChart.gates) {
			if (dept>0 && ((objChart.gates[key][0] && objChart.gates[key][0].Department!=dept) || (objChart.gates[key][1] && objChart.gates[key][1].Department!=dept))) {
				continue;
			}

			if (objChart.chartProperties && objChart.chartProperties.svcId == "freeConnT") {
				if(advChart.gates[key] == "")
					gates[key] = "P";
				else if (objChart.gates[key][2]!=null)
					gates[key] = "J";
				else
					gates[key] = "D";
			} else if (objChart.chartProperties && objChart.chartProperties.svcId == "petConnAT") {
				if(advChart.gates[key] == "")
					gates[key] = "P";
				else if (objChart.gates[key][2]!=null)
					gates[key] = "J";
				else
					gates[key] = "D";
			} else if (objChart.chartProperties && (objChart.chartProperties.svcId == "freeFamily" || objChart.chartProperties.svcId == "freeFamilyA" || objChart.chartProperties.svcId == "freeBusiness")) {
					gates[key] = "D";
			} else {
				if(advChart.gates[key] == "M")
					gates[key] = "P";
				else if(advChart.gates[key] == "B")
					gates[key] = "D";
				else if(advChart.gates[key] == "J")
					gates[key] = "J";
			}
		}
	}
	//	channels for interactive
	var channels = {};
	for (var key in advChart.channels) {
		channels[advChart.channels[key].Id] = advChart.channels[key];
	}

	if (objChart.chartProperties.viewId=='freeMandalaM'){
		setChannels(styles, gates, null, null, root, "#CE3BFF", "#000000");
	} else if (objChart.chartProperties && (objChart.chartProperties.svcId == "freeTransit" || objChart.chartProperties.svcId == "astroTransit" || objChart.chartProperties.svcId == "freeProgresA" || objChart.chartProperties.svcId == "freeProgresS" || objChart.chartProperties.svcId == "freeConnT" || objChart.chartProperties.svcId == "petConnAT" || objChart.chartProperties.svcId == "freeFamilyT" || objChart.chartProperties.svcId == "freeBusinessT" || ver==4)) {
		setChannels(styles, gates, channels, null, root, "#01CD01", "#CE3BFF");
	} else  {
		setChannels(styles, gates, channels, null, root, "#F96C03", "#06BFF9");
	}
}
{	//	CirclesArrows
	if (objChart.chartProperties.csvLvl>0) { 
		setCirclesArrow(styles, objChart, ord, ver, root.select("#CirclesArrows"), 1);
	}
}
{	//	Planets
	if (ver==9) {
		var mplan =	root
			.select("#mindPlanets")
			.selectAll("#planet")
			.data(objChart["mindPlanets"]);

		mplan.select("#number")
			.text(function(d) {	return ver==7 ? d[1].Gate+'.'+d[1].Line+'.'+d[1].Color : d[1].Gate+'.'+d[1].Line; });
		mplan.select("#background").select("g").selectAll("path")
				.data(function(d) {
							if(d[1].Id>1 && objChart["mindPlanets"][0][0].Color == d[1].Color && ver==7)
								return ["#FFB206","#FFB206"];
							else 
								return ["#727272","#0763D3"];
						  } ).attr("fill", function(d) { return d; } );
		mplan.select("#up_arrow")
			 .attr("visibility", function(d) { return d[1].FixingState==1 ? "visible" : "hidden";});
		mplan.select("#down_arrow")
			 .attr("visibility", function(d) { return d[1].FixingState==2 ? "visible" : "hidden";});
		mplan.select("#star")
			 .attr("visibility", function(d) { return d[1].FixingState==3 ? "visible" : "hidden";});

		root.select("#Planets").select("#personality").attr("transform", "matrix(1,0,0,1,50,0)");
		root.select("#Planets").select("#design").attr("visibility","hidden");
	} else {
		root.select("#Planets").select("#design").attr("visibility","hidden");
		root.select("#Planets").select("#personality").attr("visibility","hidden");
	}
}
	});
}
function chartHm(objChart, ord, ver){
/*
	0 - free
	1 - full
	2 - body
	3 - mind
	4 - none
*/
	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/wl/chartHm.svg?v=5").then(data=> {
		d3.select("#chart"+ord).node().append(data.documentElement)
		var i = ord;
{	//	Planets
		if(ver != 4 ){
			var bplan =	d3.select("#bodyPlanets").selectAll("#planet").data(objChart["bodyPlanets"]);
			bplan.select("#number")
				.text(function(d) { return d[i].Gate+'.'+d[i].Line; });
			bplan.select("#up_arrow")
				 .attr("visibility", function(d) { return d[i].FixingState==1 ? "visible" : "hidden";});
			bplan.select("#down_arrow")
				 .attr("visibility", function(d) { return d[i].FixingState==2 ? "visible" : "hidden";});
			bplan.select("#star")
				 .attr("visibility", function(d) { return d[i].FixingState==3 ? "visible" : "hidden";});

			var mplan =	d3.select("#mindPlanets").selectAll("#planet").data(objChart["mindPlanets"]);
			mplan.select("#number")
				.text(function(d) { return d[i].Gate+'.'+d[i].Line; });
			mplan.select("#up_arrow")
				 .attr("visibility", function(d) { return d[i].FixingState==1 ? "visible" : "hidden";});
			mplan.select("#down_arrow")
				 .attr("visibility", function(d) { return d[i].FixingState==2 ? "visible" : "hidden";});
			mplan.select("#star")
				 .attr("visibility", function(d) { return d[i].FixingState==3 ? "visible" : "hidden";});
				 
			d3.select("#mindPlanets").select("#ascendant").select("#number").text(objChart.data.ascendant[0].AscGate+"."+objChart.data.ascendant[0].AscLine);
			d3.select("#bodyPlanets").select("#ascendant").select("#number").text(objChart.data.ascendantBody[0].AscGate+"."+objChart.data.ascendantBody[0].AscLine);

			for(j=0; j < objChart.bodyPlanets.length; j++) {
				if (objChart.bodyPlanets[j][i].retrograde==0) continue;
				var pls = d3.select("#bodyPlanets")
								.append("g").html( d3.select("#retro").html() )
								.attr("transform", "matrix(0.08 0 0 0.08 880 "+(102+j*46)+")")
								.attr("visibility", "visible")
								.attr("fill", "#000000");
			}
			for(j=0; j < objChart.mindPlanets.length; j++) {
				if (objChart.mindPlanets[j][i].retrograde==0) continue;
				var pls = d3.select("#mindPlanets")
								.append("g").html( d3.select("#retro").html() )
								.attr("transform", "matrix(0.08 0 0 0.08 175 "+(102+j*46)+")")
								.attr("visibility", "visible")
								.attr("fill", "#FF0000");
			}
		} else {
			d3.select("#Planets").attr("visibility", "hidden");
		}
}
{	//	Gates
		var myArray = {10:objChart.gates[10]!=null && objChart.gates[10][i]!=null,
					   20:objChart.gates[20]!=null && objChart.gates[20][i]!=null,
					   34:objChart.gates[34]!=null && objChart.gates[34][i]!=null,
					   57:objChart.gates[57]!=null && objChart.gates[57][i]!=null};
		for (var key in objChart.gates) {
			if(objChart.gates[key][i]!=null){
				var gate = null;
				if(key==57 && myArray[34] && !myArray[10] && !myArray[20])
					gate = d3.select("#Gates").select("#gate_34-57");
				else if (key==34 && !myArray[57] && myArray[10])
					gate = d3.select("#Gates").select("#gate_34-10");
				else if (key==34 && !myArray[57] && myArray[20])
					gate = d3.select("#Gates").select("#gate_34-20");
				else
					gate = d3.select("#Gates").select("#gate_"+key);
					
				gate.attr("visibility", "visible");
				if(objChart.gates[key][i]["Activation"] == "P")
					gate.select("#Mind").attr("visibility", "visible");
				else if(objChart.gates[key][i]["Activation"] == "D")
					gate.select("#Body").attr("visibility", "visible");
				else if(objChart.gates[key][i]["Activation"] == "J")
					gate.select("#Juxt").attr("visibility", "visible");
			}
		}
}
{	//	Centers
		var centers = new Array();
		for (var key in objChart.centers) {
			centers.push(objChart.centers[key].index[i]);
		}
		d3.select("#Centers")
			.selectAll("#center")
			.data(centers)
			.attr("visibility",  function(d) { return d==1 ? "visible" : "hidden";});
}
{	//	CirclesArrows
		if(ver != 4 ){
			if (objChart["bodyPlanets"][0][i]!=null) {
				if (objChart["bodyPlanets"][0][i].Tone < 4)
					d3.select("#bsLeft")
					  .attr("visibility", "visible");
				else
					d3.select("#bsRight")
					  .attr("visibility", "visible");
					  
				if (objChart["bodyPlanets"][3][i].Tone < 4)
					d3.select("#bcLeft")
					  .attr("visibility", "visible");
				else
					d3.select("#bcRight")
					  .attr("visibility", "visible");
			}
			if (objChart["mindPlanets"][0][i]!=null) {
				if (objChart["mindPlanets"][0][i].Tone < 4)
					d3.select("#msLeft")
					  .attr("visibility", "visible");
				else
					d3.select("#msRight")
					  .attr("visibility", "visible");
					  
				if (objChart["mindPlanets"][3][i].Tone < 4)
					d3.select("#mcLeft")
					  .attr("visibility", "visible");
				else
					d3.select("#mcRight")
					  .attr("visibility", "visible");

			}
		} else {
			d3.select("#Arrows").attr("visibility", "hidden");
		}
}
	});
}

function chartTalk(objChart, i){
	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/bgTalk.svg?v=0.43").then(data=> {
		d3.select("#chart"+i).node().append(data.documentElement)
{	//	Styles
	var root = d3.select("#chart"+i);
	var roots = setStyles1(objChart, root, objChart.data.type[i].Id, "found");
	var svgCenters = roots[0];
	var svgChannels = roots[1];
}
{	//	Centers
	var centers = new Array();
	for (var key in objChart.centers) {
		centers.push(objChart.centers[key].index[i]);
	}

	svgCenters.selectAll("#coloured_centres")
		.selectAll(".center")
		.data(centers)
		.attr("visibility",  function(d) { return d==1 ? "visible" : "hidden";});
}
{	//	Gates
	for (var key in objChart.gates) {
		if(objChart.gates[key][i]!=null){
			d3.select("#chart"+i).select("#gate_"+key)
					.attr("visibility", "visible")
					.attr("onclick", "javascript:playAudio('"+objChart.gates[key][i].GateAudio+"','"+objChart.gates[key][i].GateName+"')");

			var gate = d3.select("#chart"+i).select("#channel_"+key);
			gate.attr("visibility", "visible");
			if(objChart.gates[key][i]["Activation"] == "P")
				gate.select("#Mind").attr("visibility", "visible");
			else if(objChart.gates[key][i]["Activation"] == "D")
				gate.select("#Body").attr("visibility", "visible");
			else if(objChart.gates[key][i]["Activation"] == "J")
				gate.select("#Juxt").attr("visibility", "visible");
		}
	}
}
{	//	Channels
	for (var key in objChart.gates) {
		if(objChart.gates[key][i]!=null){
			root.select("#Gates").selectAll("#gate_"+key).attr("visibility", "visible")
						.attr("onclick", "javascript:playAudio('"+objChart.gates[key][i].GateAudio+"','"+objChart.gates[key][i].GateName+"')");
			var gate = svgChannels.selectAll("#gate_"+key);
			gate.attr("visibility", "visible");
			if(objChart.gates[key][i]["Activation"] == "P")
				gate.select("#pers").attr("visibility", "visible");
			else if(objChart.gates[key][i]["Activation"] == "D")
				gate.select("#desi").attr("visibility", "visible");
			else if(objChart.gates[key][i]["Activation"] == "J")
				gate.select("#juxt").attr("visibility", "visible");
		}
	}
		
	var myArray = {10:objChart.gates[10]!=null && objChart.gates[10][i]!=null,
				   20:objChart.gates[20]!=null && objChart.gates[20][i]!=null,
				   34:objChart.gates[34]!=null && objChart.gates[34][i]!=null,
				   57:objChart.gates[57]!=null && objChart.gates[57][i]!=null};
	if(objChart.chartProperties ? objChart.chartProperties.styles.channel==1 : objChart.styles.channel==1){
		if(myArray[10] && !myArray[34] && !myArray[57]){
			svgChannels.select("#stub_1020").attr("visibility", "visible");
		}
		if(!myArray[10] && !myArray[20] && myArray[34]){
			svgChannels.select("#stub_3457").attr("visibility", "visible");
		}
	}
}

{	//	Planets
	var gates = [31, 8, 33, 7, 1, 13, 15, 2, 46, 5, 14, 29];
	var lines = [0, 0, 0, 0, 0, 0];

	var bplan = d3.select("#chart"+i)
		.select("#bodyPlanets")
		.selectAll("#planet")
		.data(objChart["bodyPlanets"]);

		bplan.select("#up_arrow")
			 .attr("visibility", function(d) { return d[i].FixingState==1 ? "visible" : "hidden";});
		bplan.select("#down_arrow")
			 .attr("visibility", function(d) { return d[i].FixingState==2 ? "visible" : "hidden";});
		bplan.select("#star")
			 .attr("visibility", function(d) { return d[i].FixingState==3 ? "visible" : "hidden";});

		d3.select("svg").on("mousedown",function(d){ d3.select("#active_gates").selectAll("circle").attr("fill", "#C92711"); });

		d3.select("#chart"+i)
			.select("#bodyPlanets")
			.selectAll("#pl_gate")
			.data(objChart["bodyPlanets"])
			.attr("onclick", function(d) { return "javascript:playAudio('"+d[i].GateAudio+"','"+d[i].GateName+"');" +
													"d3.select('#chart"+i+"').select('#gate_"+d[i].Gate+"').select('circle').attr('fill', '#01cd01')"})
			.select("text")
			.text(function(d) { return d[i].Gate; });
		d3.select("#chart"+i)
			.select("#bodyPlanets")
			.selectAll("#pl_line")
			.data(objChart["bodyPlanets"])
			.attr("onclick", function(d) { return "javascript:playAudio('"+d[i].LineAudio+"','"+d[i].LineName+"');" +
													"d3.select('#chart"+i+"').select('#gate_"+d[i].Gate+"').select('circle').attr('fill', '#01cd01')"})
			.select("text")
			.text(function(d) { return d[i].Line; });

	var mplan = d3.select("#chart"+i)
		.select("#mindPlanets")
		.selectAll("#planet")
		.data(objChart["mindPlanets"]);

		mplan.select("#up_arrow")
			 .attr("visibility", function(d) { return d[i].FixingState==1 ? "visible" : "hidden";});
		mplan.select("#down_arrow")
			 .attr("visibility", function(d) { return d[i].FixingState==2 ? "visible" : "hidden";});
		mplan.select("#star")
			 .attr("visibility", function(d) { return d[i].FixingState==3 ? "visible" : "hidden";});

		d3.select("#chart"+i)
			.select("#mindPlanets")
			.selectAll("#pl_gate")
			.data(objChart["mindPlanets"])
			.attr("onclick", function(d) { return "javascript:playAudio('"+d[i].GateAudio+"','"+d[i].GateName+"');" +
													"d3.select('#chart"+i+"').select('#gate_"+d[i].Gate+"').select('circle').attr('fill', '#01cd01')"})
			.select("text")
			.text(function(d) { return d[i].Gate; });
		d3.select("#chart"+i)
			.select("#mindPlanets")
			.selectAll("#pl_line")
			.data(objChart["mindPlanets"])
			.attr("onclick", function(d) { return "javascript:playAudio('"+d[i].LineAudio+"','"+d[i].LineName+"');" +
													"d3.select('#chart"+i+"').select('#gate_"+d[i].Gate+"').select('circle').attr('fill', '#01cd01')"})
			.select("text")
			.text(function(d) { return d[i].Line; });
}
	});
}

async function mandala(objChart, planets, selected, ord, ver){
/* ver
	0 - Natal
	1 - Found
	2 - Not interactive
*/
	const data = await d3.svg("/wp-content/themes/geneticmatrix/assets/svg/chartMandala.svg?v=19.93");
	var root = d3.select("#mandala"+ord);
	root.node().append(data.documentElement)

	if (false) d3.selectAll("#drag_frame").attr("visibility", "hidden");	//	not amalgamated

	if (objChart.personSettings[ord].astroSystem==3) {
		d3.select("#sidereal_ring").attr("visibility", "visible");
		d3.select("#sidereal_ring").select("#text_"+objChart.chartProperties.language).attr("visibility", "visible");
	} else if (objChart.personSettings[ord].astroSystem==4) {
		d3.select("#true_sidereal_ring_k").attr("visibility", "visible");
	} else if (objChart.personSettings[ord].astroSystem==5) {
		d3.select("#true_sidereal_ring_c").attr("visibility", "visible");
	} else if (objChart.personSettings[ord].astroSystem==8) {
		d3.select("#true_sidereal_ring_m").attr("visibility", "visible");
	} else {
		d3.select("#zodiac_ring").attr("visibility", "visible");
		d3.select("#zodiac_ring").select("#text_"+objChart.chartProperties.language).attr("visibility", "visible");
	}
	var ascendObj = ver==2 ? objChart.data.ascendant[ord]
						   : (ord==1 ? objChart.data.ascendantBody[0] : objChart.data.ascendant[0]);
	var clrSet = channel_colors[objChart.chartProperties.styles ? objChart.chartProperties.styles.activationColor[0].id : 0]
	var	actColor = ver==2 ? (ord==1 ? "#06BFF9" : "#F96C03")
						  : (ord==1 ? clrSet[0] : clrSet[1]);
	actColor = objChart.chartProperties.svcType == "progresa" && objChart.chartProperties.viewId == "astroNatal" ? "#000000" : actColor;
{	//	Hybrid
	var tiltH = 0;
	if (objChart.personSettings[ord].Hybrid) {
		tiltH = objChart.personSettings[ord].equinoxDivergence;
		root.select("#Inner_circle").attr("transform", "rotate("+(-1*tiltH)+", 807, 575)");
		root.select("#Aspects").attr("transform", "rotate("+(tiltH)+", 807, 575)");
	}
}		
{	//	Gates
	root.select("#gate_numbers").selectAll("text").attr("transform", function() {  
									var oldTrans = d3.select(this).attr('transform');
									var angle = ascendObj.Cusps[0]+2.0-tiltH;
									var x = d3.select(this).text()<10 ? 3 : 7;
									return oldTrans + ' rotate('+(-1*angle)+', '+x+', -7)'
								})
							.attr("fill", actColor);
	if (ver==1) {
		for (var key in objChart.gates) {
			if(objChart.gates[key][ord]!=null && objChart.centers[objChart.gates[key][ord].Center].index[ord]){
				root.select("#quadrant_slice_"+key)
					.attr("visibility", "visible");
			}
		}
		root.select("#quadrant_slices").select("circle").attr("visibility", "visible");
	}
	for (var key in planets) {
		root.select("#g"+planets[key].obj.Gate).selectAll("#l"+planets[key].obj.Line).attr("fill", actColor);
	}
}
{	//	Houses
	var trans = root.attr("transform");
	root.attr("transform", trans + " rotate("+(ascendObj.Cusps[0]+2.0)+", 808, 575)");
	var urlTrans = root.select("#url").attr("transform");
	root.select("#url").attr("transform", "rotate(-"+(ascendObj.Cusps[0]+2.0)+", 808, 575) " + urlTrans);
	root.select("#Houses").selectAll("line").data(ascendObj.Cusps)
						.attr("transform", function(d) { return "rotate(-"+(d+2)+",807.3,575)"})
						.attr("stroke", actColor);
	root.select("#Houses").select("circle")
						.attr("stroke", actColor);
if(ver==0) {
	root.select("#Houses").select("#asc")
						.attr("transform", "rotate(-"+(ascendObj.AscLong+2)+",807.3,575)");
	root.select("#Houses").select("#mc")
						.attr("transform", "rotate(-"+(ascendObj.McLong+2)+",807.3,575)");
	root.select("#Houses").select("#mc").select("text")
						.attr("transform", "matrix(1 0 0 1 200 584) rotate("+(-1*(ascendObj.Cusps[0]-ascendObj.McLong+2))+", 20, -10)");
}			
	root.selectAll("#num").data(ascendObj.Cusps)
						.attr("transform", function(d, i) {
							var d1 = d;
							var d2 = i<11 ? ascendObj.Cusps[i+1] : ascendObj.Cusps[0];
							d2 = d2<d1 ? d2+360 : d2;
							var angle = d1 + (d2-d1)/2 + 2;
							
							return " rotate(-"+angle+",263,247) rotate("+(angle+90-ascendObj.Cusps[0])+", 53, 247)"
						})
						.attr("fill", actColor);
}
{	//	Planets
	var gateCount = Array.apply(null, Array(65)).map(Number.prototype.valueOf,0);
	root.select("#Planets").selectAll("#planets")
		.data(planets)
		.enter()
		.append("g").html( function(d) { return d3.select("#"+d.name).html(); })
		.attr("transform", function(d) { return "rotate("+(d.obj.Angle-0.5)+") translate(-10,-"+(320-25*(gateCount[d.obj.Gate]++))+") scale(0.8)"; } )
		.attr("visibility", "visible")
		.attr("fill", function(d) {
			return ver!=1 || (objChart.gates[d.obj.Gate] && objChart.centers[d.obj.Center].index[ord]) ? actColor : "#FFFFFF";
		})
		.attr("stroke", function(d) {
			return ver!=1 || (objChart.gates[d.obj.Gate] && objChart.centers[d.obj.Center].index[ord]) ? "none" : actColor;
		})
		.on("mouseover", function(d, i) {
			if(ver==2) return;
			if(selected.index>-1) return;
			i = planets.indexOf(i);
			highlightAspects(i, ord, selected, planets, objChart.chartProperties.aspects);
		})
		.on("mouseout", function(d, i){
			if(ver==2) return;
			i = planets.indexOf(i);
			if(selected.index>-1){
				highlightAspects(selected.index, ord, -1, planets, objChart.chartProperties.aspects);
			} else {
				d3.selectAll("#ag"+i).attr("stroke-width", 1).attr("stroke", "#000000");
				d3.selectAll("#ag"+(i+1)).attr("stroke-width", 1).attr("stroke", "#000000");
				d3.selectAll("#pt"+i).attr("stroke-width", 1).attr("stroke", "#000000");
				d3.selectAll("#pt"+(i+1)).attr("stroke-width", 1).attr("stroke", "#000000");
				drawAllAspects(planets, ord, objChart.chartProperties.aspects);
			}
		})
		.on("click", function(d, i){
			if(ver==2) return;
			i = planets.indexOf(i);
			if(selected.index == i) {
				selected.index = -1;
			} else {
				highlightAspects(i, ord, selected, planets, objChart.chartProperties.aspects, "");
				selected.index = i;
			}
		})
		.select("#rtr").attr("visibility", function(d) { return d.obj.retrograde==0 ? "hidden" : "visible" });
	if(ver!=0){
		root.select("#asc").attr("visibility","hidden");
		root.select("#mc").attr("visibility","hidden");
	}
}
{	//	Aspects
	drawAllAspects(planets, ord, objChart.chartProperties.aspects);
}
}
async function mandalaAdv(objChart, mindPlanets, bodyPlanets, ascendMind, ascendBody, colorMind, colorBody, selected, ver){
/* ver
	0 - Natal
	1 - Found
	2 - Natal (without aspects)
*/
	const data = await d3.svg("/wp-content/themes/geneticmatrix/assets/svg/chartMandala.svg?v=19.93");
	var root = d3.select("#mandalaAdv");
	root.node().append(data.documentElement)

	if (false) d3.selectAll("#drag_frame").attr("visibility", "hidden");	//	not amalgamated
	
	d3.select("#asc").attr("visibility","hidden");
	d3.select("#mc").attr("visibility","hidden");

	if (objChart.personSettings[0].astroSystem==3) {
		d3.select("#sidereal_ring").attr("visibility", "visible");
		d3.select("#sidereal_ring").select("#text_"+objChart.chartProperties.language).attr("visibility", "visible");
	} else if (objChart.personSettings[0].astroSystem==4) {
		d3.select("#true_sidereal_ring_k").attr("visibility", "visible");
	} else if (objChart.personSettings[0].astroSystem==5) {
		d3.select("#true_sidereal_ring_c").attr("visibility", "visible");
	} else if (objChart.personSettings[0].astroSystem==8) {
		d3.select("#true_sidereal_ring_m").attr("visibility", "visible");
	} else {
		d3.select("#zodiac_ring").attr("visibility", "visible");
		d3.select("#zodiac_ring").select("#text_"+objChart.chartProperties.language).attr("visibility", "visible");
	}
{	//	Hybrid
	var tiltH = 0;
	if (objChart.personSettings[0].Hybrid) {
		tiltH = objChart.personSettings[0].equinoxDivergence;
		root.select("#Inner_circle").attr("transform", "rotate("+(-1*tiltH)+", 807, 575)");
		root.select("#Aspects").attr("transform", "rotate("+(tiltH)+", 807, 575)");
	}
}		
{	//	Gates
	var tilt = objChart.chartProperties.svcId == "astroFound" ? ascendMind.Cusps[0] : ascendBody.Cusps[0];
	d3.select("#gate_numbers").selectAll("text").attr("transform", function() {  
									var oldTrans = d3.select(this).attr('transform');
									var angle = tilt+2.0-tiltH;
									var x = d3.select(this).text()<10 ? 3 : 7;
									return oldTrans + ' rotate('+(-1*angle)+', '+x+', -7)'
								});
	if (ver==1) {
		d3.select("#quadrant_slices").select("circle").attr("visibility", "visible");
	}
	for (var key in mindPlanets) {
		root.select("#g"+mindPlanets[key].obj.Gate).selectAll("#l"+mindPlanets[key].obj.Line).attr("fill", colorMind);
	}			
	for (var key in bodyPlanets) {
		if(root.select("#g"+bodyPlanets[key].obj.Gate).select("#l"+bodyPlanets[key].obj.Line).attr("fill")=="none")
			root.select("#g"+bodyPlanets[key].obj.Gate).selectAll("#l"+bodyPlanets[key].obj.Line).attr("fill", colorBody);
		else
			root.select("#g"+bodyPlanets[key].obj.Gate).select("#l"+bodyPlanets[key].obj.Line).attr("fill", colorBody);
	}
}
{	//	Houses
	var trans = root.attr("transform");
	root.attr("transform", trans + " rotate("+(tilt+2.0)+", 808, 575)");
	var urlTrans = root.select("#url").attr("transform");
	root.select("#url").attr("transform", "rotate(-"+(tilt+2.0)+", 808, 575) " + urlTrans);
	d3.select("#Houses").select("#frame").selectAll("line").data(ascendMind.Cusps)
						.attr("transform", function(d) { return "rotate(-"+(d+2)+",807.3,575)"})
						.attr("stroke", colorMind);
	d3.select("#Houses").select("#frame").selectAll("circle")
						.attr("stroke", colorMind);
	d3.select("#Houses").selectAll("#num").data(ascendMind.Cusps)
						.attr("transform", function(d, i) {
							var d1 = d;
							var d2 = i<11 ? ascendMind.Cusps[i+1] : ascendMind.Cusps[0];
							d2 = d2<d1 ? d2+360 : d2;
							var angle = d1 + (d2-d1)/2 + 2;
							
							return " rotate(-"+angle+",263,247) rotate("+(angle+90-tilt)+", 53, 247)"
						})
						.attr("fill", colorMind);

	d3.select("#HousesB").attr("visibility", "visible");
	d3.select("#HousesB").select("#frame").selectAll("line").data(ascendBody.Cusps)
						.attr("transform", function(d) { return "rotate(-"+(d+2)+",807.3,575)"})
						.attr("stroke", colorBody);
	d3.select("#HousesB").select("#frame").selectAll("circle")
						.attr("stroke", colorBody);
	d3.select("#HousesB").selectAll("#num").data(ascendBody.Cusps)
						.attr("transform", function(d, i) {
							var d1 = d;
							var d2 = i<11 ? ascendBody.Cusps[i+1] : ascendBody.Cusps[0];
							d2 = d2<d1 ? d2+360 : d2;
							var angle = d1 + (d2-d1)/2 + 2;
							
							return " rotate(-"+angle+",263,247) rotate("+(angle+90-tilt)+", 53, 247)"
						})
						.attr("fill", colorBody);
}
{	//	Planets
	
	var gateCount = Array.apply(null, Array(65)).map(Number.prototype.valueOf,0);
	d3.select("#Planets").select("#body").selectAll("g")
		.data(bodyPlanets)
		.enter()
		.append("g").html( function(d) { return d3.select("#"+d.name).html(); })
		.attr("transform", function(d) { return "rotate("+(d.obj.Angle-0.5)+") translate(-10,-"+(320-25*(gateCount[d.obj.Gate]++))+") scale(0.8)" })
		.attr("fill", function(d) {
			if (objChart.chartProperties.svcId == "astroFound"){
				defined = ver==0 || ver==2 || (objChart.gates[d.obj.Gate] && objChart.centers[d.obj.Center].index[0]);
			} else {
				defined = ver==0 || ver==2 || (objChart.gates[d.obj.Gate] && objChart.advChart.centers[d.obj.Center]);
			}
			d3.select("#quadrant_slice_"+d.obj.Gate).attr("visibility", ver==1 && defined ? "visible" : "hidden");
			return defined ? colorBody : "#FFFFFF";
		})
		.attr("stroke", function(d) {
			return ver==0 || ver==2 || (objChart.gates[d.obj.Gate] && objChart.centers[d.obj.Center].index[0]) ? "none" : colorBody;
		})
		.on("mouseover", function(d, i) {
			if(selected.index!=-1) return;
			
			i = bodyPlanets.indexOf(i);

			highlightCrossAspects(i, selected, bodyPlanets, mindPlanets, objChart.chartProperties.aspects, "b");
		})
		.on("mouseout", function(d, i){
			if(selected.index!=-1) return;
			
			i = bodyPlanets.indexOf(i);
			
			d3.selectAll("#agb"+i).attr("stroke-width", 1).attr("stroke", "#000000");
			d3.selectAll("#agb"+(i+1)).attr("stroke-width", 1).attr("stroke", "#000000");
			d3.selectAll("#ptb"+i).attr("stroke-width", 1).attr("stroke", "#000000");
			d3.selectAll("#ptb"+(i+1)).attr("stroke-width", 1).attr("stroke", "#000000");
			drawAllCrossAspects(bodyPlanets, mindPlanets, objChart.chartProperties.aspects);
		})
		.on("click", function(d, i){
			i = bodyPlanets.indexOf(i);

			if(selected.index == "b"+i) {
				selected.index = -1;
			} else {
				highlightCrossAspects(i, selected, bodyPlanets, mindPlanets, objChart.chartProperties.aspects, "b");
				selected.index = "b"+i;
			}
		})
		.select("#rtr").attr("visibility", function(d) { return d.obj.retrograde==0 ? "hidden" : "visible" });


	d3.select("#Planets").select("#mind").selectAll("g")
		.data(mindPlanets)
		.enter()
		.append("g").html( function(d) { return d3.select("#"+d.name).html(); })
		.attr("transform", function(d) { return "rotate("+(d.obj.Angle-0.5)+") translate(-10,-"+(320-25*(gateCount[d.obj.Gate]++))+") scale(0.8)" })
		.attr("fill", function(d) {
			if (objChart.chartProperties.svcId == "astroFound"){
				defined = ver==0 || ver==2 || (objChart.gates[d.obj.Gate] && objChart.centers[d.obj.Center].index[0]);
			} else {
				defined = ver==0 || ver==2 || (objChart.gates[d.obj.Gate] && objChart.advChart.centers[d.obj.Center]);
			}
			d3.select("#quadrant_slice_"+d.obj.Gate).attr("visibility", ver==1 && defined ? "visible" : "hidden");
			return defined ? colorMind : "#FFFFFF";
		})
		.attr("stroke", function(d) {
			return ver==0 || ver==2 || (objChart.gates[d.obj.Gate] && objChart.centers[d.obj.Center].index[0]) ? "none" : colorMind;
		})
		.on("mouseover", function(d, i) {
			if(selected.index!=-1) return;
			
			i = mindPlanets.indexOf(i);

			highlightCrossAspects(i, selected, mindPlanets, bodyPlanets, objChart.chartProperties.aspects, "m");
		})
		.on("mouseout", function(d, i){
			if(selected.index!=-1) return;

			i = mindPlanets.indexOf(i);

			d3.selectAll("#agm"+i).attr("stroke-width", 1).attr("stroke", "#000000");
			d3.selectAll("#agm"+(i+1)).attr("stroke-width", 1).attr("stroke", "#000000");
			d3.selectAll("#ptm"+i).attr("stroke-width", 1).attr("stroke", "#000000");
			d3.selectAll("#ptm"+(i+1)).attr("stroke-width", 1).attr("stroke", "#000000");
			drawAllCrossAspects(bodyPlanets, mindPlanets, objChart.chartProperties.aspects);
		})
		.on("click", function(d, i){
			i = mindPlanets.indexOf(i);

			if(selected.index == "m"+i) {
				selected.index = -1;
			} else {
				highlightCrossAspects(i, selected, mindPlanets, bodyPlanets, objChart.chartProperties.aspects, "m");
				selected.index = "m"+i;
			}
		})
		.select("#rtr").attr("visibility", function(d) { return d.obj.retrograde==0 ? "hidden" : "visible" });
}
{	//	Aspects
	if (ver!=2) {
		drawAllCrossAspects(bodyPlanets, mindPlanets, objChart.chartProperties.aspects);
	} else {
		d3.select("#Aspects").attr("visibility", "hidden");
	}
}
}

function setStyles1(objChart, root, type, template, animal){
	var styles = null;
	if (objChart.chartProperties && objChart.chartProperties.viewId != "freeMandalaHC"
								 && objChart.chartProperties.viewId != "freeFoundL"
								 && objChart.chartProperties.viewId != "freeFoundLC"
								 && objChart.chartProperties.viewId != "wlFoundLC") {
		styles = objChart.chartProperties.styles;
	} else {
		styles = objChart.styles;
	}
	
	if (styles) {
		var svgShade = root.select("#body_shade_0").attr("visibility", "visible");
		if (template=="animal") {
			svgShade = root.select("#body_shade_"+animal).attr("visibility", "visible");
		}

		if (styles.shadeColor==1) {
			svgShade.select("#bodygraph > path").attr("fill", svgShade.select("#aura_"+type).select(".light").attr("fill"));
		} else if (styles.shadeColor==2) {
			svgShade.select("#bodygraph > path").attr("fill", svgShade.select("#aura_"+type).select(".medium").attr("fill"));
		} else if (styles.shadeColor==3) {
			svgShade.select("#bodygraph > path").attr("fill", svgShade.select("#aura_"+type).select(".dark").attr("fill"));
		}
		
		if(styles.aura)
			svgShade.select("#aura_"+type).attr("visibility", "visible");
			
		var isHeart = styles.centerHeart;
		root.selectAll(isHeart ? ".none_heart" : ".heart").attr("opacity", 0);
		
		if(template=="found" && styles.center==1){
			root.selectAll("#gate_1, #gate_8").selectAll("line").attr("transform", "matrix(1 0 0 1 0 -7)")
			root.selectAll("#gate_23, #gate_43").selectAll("line").attr("transform", "matrix(1 0 0 1 0 7)")
		}
		if((template=="sleep" || template=="animal") && (styles.center==2 || styles.center==3)){
			root.selectAll("#gate_1, #gate_8").selectAll("line").attr("transform", "matrix(1 0 0 1 -7 0)")
		}

		var center_skins = ["original", "sharp", "round", "heart"]	// set skin
		svgCenters = root.selectAll("#"+center_skins[styles.center]+"_centers").attr("visibility", "visible");

		svgCenters.selectAll(".center").data(center_colors).attr("fill", function(d) { return d[styles.centerColor[0].id]; } );
		svgCenters.selectAll(".white_center").data(center_colors).attr("stroke", function(d) { return d[styles.centerColor[0].id]; } );

		svgChannels = root.selectAll("#channels"+styles.channel).attr("visibility", "visible");
	} else {
		var svgShade = root.select("#body_shade_0").attr("visibility", "visible");
		svgCenters = root.selectAll("#original_centers").attr("visibility", "visible");
		if (objChart.chartProperties.viewId == "freeFoundL" || objChart.chartProperties.viewId == "freeFoundLC" ||
			objChart.chartProperties.viewId == "wlFoundLC") {
			svgChannels = root.selectAll("#Gates").attr("visibility", "visible");
		} else {
			svgChannels = root.selectAll("#channels0").attr("visibility", "visible");
		}
	}
	
	return [svgCenters, svgChannels]
}
function chart1(objChart, ord, ver, root){ // wlFoundLC
/* ver
	0 - free
	1 - full
	2 - body
	3 - mind
	4 - none
	5 - interactive
	6 - no planets(with circles and arrows)
	7 - now chart
	8 - not self
   81 - not self (talking)
	9 - keyword
   10 - circuits
   11 - astro mandala
   12 - astro quatnum
   13 - astro interactive
   14 - profile
   95 < light
*/
	if(ver>95){
		ord = ver==98 ? 50 : ord;
		ver=0;
		bgFile="bgFoundL";
	}else{
		bgFile="bgFound";
	}

	chironVisible = ord==50;
	ord = ord==50 ? 0 : ord;
	ord = ver==11 ? 2 : ord;	// astro chart use mind bodygraph

	if(root==null){
		root = d3.select("#chart"+ord);
	}
	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/"+bgFile+".svg?v=0.401").then(data=> {
		root.node().append(data.documentElement)
		
{	//	Init
	var bodyVisibvle = ver!=3 && ver!=4 && ver!=6 && ver!=7 && ver!=8 && ver!=81 && ver!=11 && ver!=14;
	var mindVisibvle = ver!=2 && ver!=4 && ver!=6 && ver!=8 && ver!=81 && ver!=11 && ver!=14;
	if(objChart.chartProperties.csvLvl==0)
		d3.select("#link").attr("transform", "matrix(1.5,0,0,1.5,165,690)");
}
{	//	Styles
	var roots = setStyles1(objChart, root, objChart.data.type[ord].Id, "found");
	var svgCenters = roots[0];
	var svgChannels = roots[1];
}
{	//	GatesSet
	if(objChart.data.gatesSet[ord]=='Biology'){
		root.select("#white_parts").attr("visibility", "hidden");
		root.selectAll(".noBiology").attr("visibility", "hidden");
		root.select("#white_parts_25").attr("visibility", "visible");
	}
	if(objChart.data.gatesSet[ord]=='Angelic'){
		root.select("#white_parts").attr("visibility", "hidden");
		root.selectAll(".noAngelic").attr("visibility", "hidden");
		root.select("#white_parts_33").attr("visibility", "visible");
	}
	if(objChart.chartProperties.svcId == "freeMultidim"){
		if(ord==2 || ord==4 || ord==6 || ord==8){
			root.select("#bodyPlanets").attr("transform", "matrix(1 0 0 1 470 0)");
			root.select("#mindPlanets").attr("transform", "matrix(1 0 0 1 -470 0)");
			root.select("#labelBody").attr("text-anchor", "end").attr("transform", "matrix(1 0 0 1 85 28)");
			root.select("#labelMind").attr("text-anchor", "start").attr("transform", "matrix(1 0 0 1 510 28)");
		}
	}
}
{	//	Now Chart
	if (ver==7) {
		root.select("#mindPlanets").attr("transform", "matrix(0.93,0,0,0.93,60,0)");
		root.select("#CirclesArrows").attr("transform", "matrix(1,0,0,1,30,0)");
		root.selectAll("#ToneIcon").attr("visibility", "hidden");
		root.selectAll("#mc").attr("transform", " translate(0,-30)");

		if (objChart["mindPlanets"][0][ord].Tone < 4)
			root.select("#msLeft")
			  .attr("transform", " translate(-30,0)")
			  .attr("visibility", "visible");
		else
			root.select("#msRight")
			  .attr("transform", " translate(-30,0)")
			  .attr("visibility", "visible");
			  
		if (objChart["mindPlanets"][3][ord].Tone < 4)
			root.select("#mcLeft")
			  .attr("transform", " translate(-30,0)")
			  .attr("visibility", "visible");
		else
			root.select("#mcRight")
			  .attr("transform", " translate(-30,0)")
			  .attr("visibility", "visible");
		
		root.select("#msColor").text(objChart["mindPlanets"][0][ord].Color);
		root.select("#msColorH").text((objChart["mindPlanets"][0][ord].Color+2)%6+1);
		root.select("#mcColor").text(objChart["mindPlanets"][3][ord].Color);
		root.select("#mcColorH").text((objChart["mindPlanets"][3][ord].Color+2)%6+1);
		root.select("#ms").attr("visibility", "visible");
		root.select("#mc").attr("visibility", "visible");

		root.select("#mindPlanets").selectAll(".chiron").attr("visibility","visible");
		root.select("#mindPlanets").selectAll(".chiron").attr("transform", "matrix(1.7 0 0 1.7 504 627)");

		root.select("#LunarPhases").select("#personality").attr("transform", "matrix(0.5 0 0 0.5 440 235)")
	}
}
{	//	Not Self (shadow)
	if (ver==8) {
		root.selectAll("#ToneIcon").attr("visibility", "hidden");
		root.selectAll("#ColorIcon").attr("visibility", "hidden");
		root.selectAll("#ColorHIcon").attr("visibility", "visible")
				.attr("transform", function(d){
					return this.getAttribute("transform") +	" translate(35)";
				});
		if(ver==8)
			root.selectAll("#CirclesArrows").attr("transform", "translate(120,50)");
		else
			root.selectAll("#CirclesArrows").attr("transform", "translate(-35)");
	}
	if (ver==8 || ver==81) {
		root.selectAll(".center").attr("fill-opacity", "0.1");
		root.selectAll("#Gates").attr("fill-opacity", "0.3");
	}
}
{	//	Keyword
	if (ver==9) {
		root.select("#Planets").select("#design").attr("transform", "translate(-100)");
		root.select("#Planets").select("#personality").attr("transform", "translate(100)");
		root.select("#bs").attr("transform", "translate(-85)");
		root.select("#bc").attr("transform", "translate(-85)");
		root.select("#ms").attr("transform", "translate(85)");
		root.select("#mc").attr("transform", "translate(85)");
		root.selectAll("#ColorHIcon").attr("visibility", "hidden");

		root.select("#LunarPhases").select("#design").attr("transform", "matrix(0.5 0 0 0.5 30 260)");
		root.select("#LunarPhases").select("#personality").attr("transform", "matrix(0.5 0 0 0.5 520 260)");
	}
}
{	//	Chains
	if (objChart.chartProperties.viewId=="freeFoundCH")
		d3.select("#chart0").selectAll("#ColorHIcon").attr("visibility", "hidden");
}
{	//	Astro Quantum
	if (ver==12 || ver==13) {
		d3.selectAll("#labelBody").attr("visibility","hidden");
		d3.selectAll("#labelMind").attr("visibility","hidden");
		d3.select("#Planets").select("#design").attr("transform", "matrix(0.95 0 0 0.95 -50 -10)");
		d3.select("#Planets").select("#personality").attr("transform", "matrix(0.95 0 0 0.95 80 -10)");
		d3.select("#bs").attr("transform", "translate(-35, -15)");
		d3.select("#bc").attr("transform", "translate(-35, -15)");
		d3.select("#ms").attr("transform", "translate(35, -15)");
		d3.select("#mc").attr("transform", "translate(35, -15)");
		d3.selectAll(".chiron").attr("visibility","visible");
		d3.selectAll(".lilith").attr("visibility","visible");
		d3.selectAll(".last3").attr("transform", "translate(0, 110)");
		d3.select("#LunarPhases").select("#design").attr("transform", "matrix(0.5 0 0 0.5 80 235)")
		d3.select("#LunarPhases").select("#personality").attr("transform", "matrix(0.5 0 0 0.5 470 235)")
	}
}
{	//	Advanced
	if (objChart.chartProperties.viewId=="freeFoundAdv") {
		root.select("#LunarPhases").select("#design").attr("transform", "matrix(0.6 0 0 0.6 60 300)")
		root.select("#LunarPhases").select("#personality").attr("transform", "matrix(0.6 0 0 0.6 480 300)")
	}
}
{	//	Transit
	if (objChart.chartProperties.viewId=="freeTransit") {
		if (ord==0){
			root.select("#LunarPhases").select("#design").attr("transform", "matrix(0.6 0 0 0.6 570 430)")
			root.select("#LunarPhases").select("#personality").attr("transform", "matrix(0.6 0 0 0.6 940 430)")
		}
		if (ord==1){
			root.select("#LunarPhases").select("#personality").attr("transform", "matrix(0.6 0 0 0.6 -90 430)")
		}
	}
}

{	//	Circuits
	if (ver==10){
		var circs = {1:"Tribal", 2:"Defense", 3:"Abstract", 4:"Logical",
					 5:"Individual", 6:"Centering", 7:"Integration", 57:"IndInt", 67:"CenInt"};
		var plan =	d3.selectAll("#planet");

		plan.on("click",function(d){
			d3.select("#Gates").selectAll("circle").attr("fill","#C92711");
			d3.select("#gate_"+d[0].Gate).select("circle").attr("fill","#01cd01");
			d3.selectAll(".circuit").attr("visibility", "hidden");
			d3.select("#bar_frames").selectAll("rect").attr("stroke", "none");
			d3.selectAll("#planet").select("#plate").attr("stroke", "none");
			
			circId = objChart.gates[d[0].Gate][0].Circuit;
			if (circId==57 || circId==67){
				//d3.selectAll("#"+circs[circId]).attr("visibility", "visible");
				d3.selectAll("#"+circs[Math.floor(circId/10)]).attr("visibility", "visible");
				d3.selectAll("#"+circs[circId%10]).attr("visibility", "visible");
				
				d3.select("#bar_"+circs[Math.floor(circId/10)]).attr("stroke", "#01cd01");
				d3.select("#bar_"+circs[circId%10]).attr("stroke", "#01cd01");
			} else {
				d3.selectAll("#"+circs[circId]).attr("visibility", "visible");
				d3.select("#bar_"+circs[circId]).attr("stroke", "#01cd01");
			}
		});
	}
}
{	//	Centers
	var centers = new Array();
	for (var key in objChart.centers) {
		if(ver==11)
			centers.push(objChart.centers[key].index[0]);
		else
			centers.push(objChart.centers[key].index[ord]);
	}

	svgCenters.selectAll("#coloured_centres")
		.selectAll(".center")
		.data(centers)
		.attr("visibility",  function(d) { return d==1 ? "visible" : "hidden";});
	if (ver==8 || ver==81) {	// not self
		svgCenters.select("#white_centres")
			.selectAll("path, rect, circle, polygon")
			.data(centers)
			.attr("fill",  function(d) { return d==1 ? "#FFFFFF" : "#FF7B00";})
			.attr("stroke", "none");
		var center_names = ["Root", "Sacral", "Spleen", "SolarPlexus", "Heart", "Self", "Throat", "Ajna", "Head"];
		svgCenters.select("#white_centres")
			.selectAll("path")
			.data(center_names)
			.attr("onclick", function(d) { return "javascript:playAudio('../TCS/NSTC-C-"+d+".mp3', 'Center: "+d+"');" })
			.attr("cursor", "pointer")
			.attr("stroke-width", "2");
	}
}
{	//	Planets
	var gates = [31, 8, 33, 7, 1, 13, 15, 2, 46, 5, 14, 29];
	var lines = [0, 0, 0, 0, 0, 0];

	if(bodyVisibvle){
		var dplan =	root.select("#Planets").select("#design")
			.selectAll(".planet")
			.data(objChart["bodyPlanets"]);

		dplan.select("#number")
			.text(function(d) {
						if(gates.indexOf(d[ord].Gate)>-1)
							lines[d[ord].Line-1]++;
						return d[ord].Gate+'.'+d[ord].Line; });
		dplan.filter(function(d) { return !d[ord].Active }).select("#background").selectAll("path").attr("fill", "#808080");
		dplan.select("#up_arrow")
			 .attr("visibility", function(d) { return d[ord].FixingState==1 ? "visible" : "hidden";});
		dplan.select("#down_arrow")
			 .attr("visibility", function(d) { return d[ord].FixingState==2 ? "visible" : "hidden";});
		dplan.select("#star")
			 .attr("visibility", function(d) { return d[ord].FixingState==3 ? "visible" : "hidden";});
		dplan.select("#retro")
			 .attr("visibility", function(d) { return d[ord].retrograde==1 && (ver==12 || ver==13) ? "visible" : "hidden";});
		if (ver==5) {
			dplan.select("#plate").attr("tooltipid", function(d) {
				return "FO11-GA-"+d[ord].Gate+"A"+
					  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
					  "+FO11-CO-B"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
					  "+FO11-TO-B"+d[ord].Tone+
					  "+FO11-BA-B"+d[ord].Base+
					  "+FO11-PL-B"+d[ord].Id+
					  "+FO11-GA-"+d[ord].Gate+"B";
			});
		}
		if (ver==13) {
			dplan.select("#plate").attr("tooltipid", function(d) {
				return "ASTRO"+ 
					  "+AN-P"+d[ord].Id+"-S"+d[ord].zodiacId+
					  "+AN-P"+d[ord].Id+"-H"+d[ord].house+
					  "+HD"+
					  "+FO11-GA-"+d[ord].Gate+"A"+
					  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
					  "+FO11-CO-B"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
					  "+FO11-TO-B"+d[ord].Tone+
					  "+FO11-BA-B"+d[ord].Base+
					  "+FO11-PL-B"+d[ord].Id+
					  "+FO11-GA-"+d[ord].Gate+"B";
			});
		}
		if (ver==10) {
			var circ_tt = {1:"CIRC-TS", 2:"CIRC-DS", 3:"CIRC-AS", 4:"CIRC-LS",
						 5:"CIRC-IE", 6:"CIRC-CS", 7:"CIRC-IS", 57:"CIRC-IEIS", 67:"CIRC-CSIS"};
			dplan.select("#plate").attr("tooltipid", function(d, i) {
				return  i<13 ? circ_tt[objChart.gates[d[ord].Gate][0].Circuit] : "";
			});
		}
	} else {
		root.select("#Planets").select("#design").attr("visibility","hidden");
		root.select("#Circles_Body").attr("visibility","hidden");
	}
	if(mindVisibvle){
		var pplan =	root.select("#Planets").select("#personality")
			.selectAll(".planet")
			.data(objChart["mindPlanets"]);

		pplan.select("#number")
			.text(function(d) {
						if(gates.indexOf(d[ord].Gate)>-1)
							lines[d[ord].Line-1]++;
						return ver==7 ? d[ord].Gate+'.'+d[ord].Line+'.'+d[ord].Color : d[ord].Gate+'.'+d[ord].Line; });
		pplan.select("#background").select("g").selectAll("path")
				.data(function(d) {
							if(d[ord].Id>1 && objChart["mindPlanets"][0][0].Color == d[ord].Color && ver==7)
								return ["#FFB206","#FFB206"];
							else 
								return ["#727272","#0763D3"];
						  } ).attr("fill", function(d) { return d; } );
		pplan.filter(function(d) { return !d[ord].Active }).select("#background").selectAll("path").attr("fill", "#808080");
		pplan.select("#up_arrow")
			 .attr("visibility", function(d) { return d[ord].FixingState==1 ? "visible" : "hidden";});
		pplan.select("#down_arrow")
			 .attr("visibility", function(d) { return d[ord].FixingState==2 ? "visible" : "hidden";});
		pplan.select("#star")
			 .attr("visibility", function(d) { return d[ord].FixingState==3 ? "visible" : "hidden";});
		pplan.select("#retro")
			 .attr("visibility", function(d) { return d[ord].retrograde==1 && ((ver==7 && d[ord].Id!=13) || ver==12 || ver==13) ? "visible" : "hidden";});
		if (ver==5) {
			pplan.select("#plate").attr("tooltipid", function(d) {
				return "FO11-GA-"+d[ord].Gate+"A"+
					  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
					  "+FO11-CO-M"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
					  "+FO11-TO-M"+d[ord].Tone+
					  "+FO11-BA-M"+d[ord].Base+
					  "+FO11-PL-M"+d[ord].Id+
					  "+FO11-GA-"+d[ord].Gate+"B";
			});
		}
		if (ver==7) {
			pplan.select("#plate").attr("tooltipid", function(d) {
				return "HD"+
					  "+FO11-GA-"+d[ord].Gate+"A"+
					  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
					  "+FO11-CO-M"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
					  "+FO11-TO-M"+d[ord].Tone+
					  "+FO11-BA-M"+d[ord].Base+
					  "+FO11-PL-M"+d[ord].Id+
					  "+FO11-GA-"+d[ord].Gate+"B"+
					  "+ASTRO"+ 
					  "+AN-P"+d[ord].Id+"-S"+d[ord].zodiacId+
					  "+AN-P"+d[ord].Id+"-H"+d[ord].house;
			});
		}
		if (ver==13) {
			pplan.select("#plate").attr("tooltipid", function(d) {
				return "ASTRO"+ 
					  "+AN-P"+d[ord].Id+"-S"+d[ord].zodiacId+
					  "+AN-P"+d[ord].Id+"-H"+d[ord].house+
					  "+HD"+
					  "+FO11-GA-"+d[ord].Gate+"A"+
					  "+FO11-LI-"+d[ord].Gate+"-"+d[ord].Line+"-"+d[ord].FixingState+
					  "+FO11-CO-M"+((d[ord].Id==3 || d[ord].Id==4) ? d[ord].Color+6 : d[ord].Color)+
					  "+FO11-TO-M"+d[ord].Tone+
					  "+FO11-BA-M"+d[ord].Base+
					  "+FO11-PL-M"+d[ord].Id+
					  "+FO11-GA-"+d[ord].Gate+"B";
			});
		}
		if (ver==10) {
			var circ_tt = {1:"CIRC-TS", 2:"CIRC-DS", 3:"CIRC-AS", 4:"CIRC-LS",
						 5:"CIRC-IE", 6:"CIRC-CS", 7:"CIRC-IS", 57:"CIRC-IEIS", 67:"CIRC-CSIS"};
			pplan.select("#plate").attr("tooltipid", function(d, i) {
				return i<13 ? circ_tt[objChart.gates[d[ord].Gate][0].Circuit] : "";
			});
		}
	} else {
		root.select("#Planets").select("#personality").attr("visibility","hidden");
		root.select("#Circles_Mind").attr("visibility","hidden");
	}

	if(objChart.chartProperties.viewId=="freeFoundAma1" || objChart.chartProperties.viewId=="freeFoundCH" || objChart.chartProperties.viewId=="freeSimple")
		root.select("#Planets").attr("transform", "matrix(1.145,0,0,1.145,-60,-85)")
	if(objChart.chartProperties.svcId=="freeBusiness") {
		root.selectAll("#planet_symbol").attr("opacity", 0)
		root.selectAll("#planet_letter").attr("opacity", "100")
	}
}
{	//	Chiron
	if (chironVisible){
		d3.select("#bodyPlanets").attr("transform", "matrix(0.95 0 0 0.95 -40 0)");
		d3.select("#mindPlanets").attr("transform", "matrix(0.95 0 0 0.95 70 0)");
		d3.selectAll(".chiron").attr("visibility","visible");
		d3.selectAll(".last3").attr("transform", "translate(0, 55)");
	}
}
{	//	Retro
	if(ver==7 || ver==12 || ver==13) {
		d3.select("#Planets").select("#design").selectAll("#retro").attr("transform","matrix(1 0 0 1 75 0)");
		d3.select("#Planets").select("#design").select(".chiron").select("#retro").attr("transform","matrix(1 0 0 1 45 0)");
		d3.select("#Planets").select("#personality").selectAll("#retro").attr("transform","matrix(1 0 0 1 -75 0)");
		d3.select("#Planets").select("#personality").select(".chiron").select("#retro").attr("transform","matrix(1 0 0 1 -45 0)");
	}
}

{	//	Lunar Phases
	if ((objChart.chartProperties.csvLvl>1 &&
		(objChart.chartProperties.viewId == "freeFound" ||
		 objChart.chartProperties.viewId == "freeFoundI" ||
		 objChart.chartProperties.viewId == "freeFoundM" ||
		 objChart.chartProperties.viewId == "freeFoundB" ||
		 (objChart.chartProperties.viewId == "freeFoundAdv" && ord==0) ||
		 objChart.chartProperties.viewId == "astroQuantum" ||
		 objChart.chartProperties.viewId == "astroQuantumI" ||
		 objChart.chartProperties.viewId == "astroTarot" ||
		 objChart.chartProperties.viewId == "astroTarotI" ||
		 objChart.chartProperties.viewId == "freeFoundCH" ||
		 objChart.chartProperties.viewId == "freeFoundK" ||
		 (objChart.chartProperties.viewId == "freeFoundQC" && ver==0) ||
		 (objChart.chartProperties.viewId == "freeFoundAma1" && ord==0) ||
		 (objChart.chartProperties.viewId == "freeFoundAma5" && ord==0) ||
		 (objChart.chartProperties.viewId == "freeFoundAma6" && ver!=8) ||
		 objChart.chartProperties.viewId == "freeDreamC" ||
		 (objChart.chartProperties.viewId == "freeTransit" && ver==4))) ||
		 objChart.chartProperties.viewId == "freeNowAstro" ||
		 objChart.chartProperties.viewId == "freeNowAstroP") {

		if (objChart.data.lunarPhaseD[ord])
			root.select("#LunarPhases").select("#design")
									   .select("#"+objChart.data.lunarPhaseD[ord].Name).attr("visibility", "visible")
									   .select("title").text(objChart.data.lunarPhaseD[ord].NameL);

		if (objChart.data.lunarPhaseP[ord])
			root.select("#LunarPhases").select("#personality")
									   .select("#"+objChart.data.lunarPhaseP[ord].Name).attr("visibility", "visible")
									   .select("title").text(objChart.data.lunarPhaseP[ord].NameL);
	}
}
{	//	CirclesArrows
	if (objChart["bodyPlanets"][0][ord]!=null && ver!=0 && ver!=4 && ver!=81 && ver!=8 && ver!=14 && objChart.chartProperties.csvLvl>0) {
		if (objChart["bodyPlanets"][0][ord].Tone < 4)
			root.select("#bsLeft")
			  .attr("visibility", "visible");
		else
			root.select("#bsRight")
			  .attr("visibility", "visible");
			  
		if (objChart["bodyPlanets"][3][ord].Tone < 4)
			root.select("#bcLeft")
			  .attr("visibility", "visible");
		else
			root.select("#bcRight")
			  .attr("visibility", "visible");
		if(objChart.chartProperties.csvLvl>1 && ver!=12){	  
			root.select("#bsTone").text(objChart["bodyPlanets"][0][ord].Tone);
			root.select("#bsColor").text(objChart["bodyPlanets"][0][ord].Color);
			root.select("#bcTone").text(objChart["bodyPlanets"][3][ord].Tone);
			root.select("#bcColor").text(objChart["bodyPlanets"][3][ord].Color);
			root.select("#bs").attr("visibility", "visible");
			root.select("#bc").attr("visibility", "visible");
		}
	}
	if (objChart["mindPlanets"][0][ord]!=null && ver!=0 && ver!=4 && ver!=81 && ver!=11 && ver!=14 && objChart.chartProperties.csvLvl>0) {
		if (objChart["mindPlanets"][0][ord].Tone < 4)
			root.select("#msLeft")
			  .attr("visibility", "visible");
		else
			root.select("#msRight")
			  .attr("visibility", "visible");
			  
		if (objChart["mindPlanets"][3][ord].Tone < 4)
			root.select("#mcLeft")
			  .attr("visibility", "visible");
		else
			root.select("#mcRight")
			  .attr("visibility", "visible");

		if(objChart.chartProperties.csvLvl>1 && ver!=12){
			root.select("#msTone").text(objChart["mindPlanets"][0][ord].Tone);
			root.select("#msColor").text(objChart["mindPlanets"][0][ord].Color);
			root.select("#msColorH").text((objChart["mindPlanets"][0][ord].Color+2)%6+1);
			root.select("#mcTone").text(objChart["mindPlanets"][3][ord].Tone);
			root.select("#mcColor").text(objChart["mindPlanets"][3][ord].Color);
			root.select("#mcColorH").text((objChart["mindPlanets"][3][ord].Color+2)%6+1);
			root.select("#ms").attr("visibility", "visible");
			root.select("#mc").attr("visibility", "visible");
		}
	}
	if (ver==5 || ver==13) {
		d3.select("#bs").attr("tooltipid", "FO11-VA-B1-"+objChart["bodyPlanets"][0][ord].Color+objChart["bodyPlanets"][0][ord].Tone);
		d3.select("#bc").attr("tooltipid", "FO11-VA-B2-"+objChart["bodyPlanets"][3][ord].Color+objChart["bodyPlanets"][3][ord].Tone);
		d3.select("#ms").attr("tooltipid", "FO11-VA-M1-"+objChart["mindPlanets"][0][ord].Color+objChart["mindPlanets"][0][ord].Tone);
		d3.select("#mc").attr("tooltipid", "FO11-VA-M2-"+objChart["mindPlanets"][3][ord].Color+objChart["mindPlanets"][3][ord].Tone);
	}
	if (ver==7) {
		d3.select("#ms").attr("tooltipid", "FO11-VA-M1-"+objChart["mindPlanets"][0][ord].Color+objChart["mindPlanets"][0][ord].Tone);
		d3.select("#mc").attr("tooltipid", "FO11-VA-M2-"+objChart["mindPlanets"][3][ord].Color+objChart["mindPlanets"][3][ord].Tone);
	}
}
{	//	Gates and Channels
	for (var key in objChart.gates) {
		if(objChart.gates[key][ord]!=null){
			root.select("#Gates").selectAll("#gate_"+key).attr("visibility", "visible");

			var gate = svgChannels.selectAll("#gate_"+key);
			gate.attr("visibility", "visible");
			if(objChart.gates[key][ord]["Activation"] == "P")
				gate.select("#pers").attr("visibility", "visible");
			else if(objChart.gates[key][ord]["Activation"] == "D")
				gate.select("#desi").attr("visibility", "visible");
			else if(objChart.gates[key][ord]["Activation"] == "J")
				gate.select("#juxt").attr("visibility", "visible");
			
			if (ver==14 && !(key == objChart["bodyPlanets"][0][ord].Gate || 
							 key == objChart["bodyPlanets"][1][ord].Gate ||
							 key == objChart["mindPlanets"][0][ord].Gate ||
							 key == objChart["mindPlanets"][1][ord].Gate)) {
				gate.select("circle").attr("visibility", "hidden");
				gate.select("text").attr("visibility", "hidden");
			}
		}
	}
		
	var myArray = {10:objChart.gates[10]!=null && objChart.gates[10][ord]!=null,
				   20:objChart.gates[20]!=null && objChart.gates[20][ord]!=null,
				   34:objChart.gates[34]!=null && objChart.gates[34][ord]!=null,
				   57:objChart.gates[57]!=null && objChart.gates[57][ord]!=null};
	if(objChart.chartProperties ? objChart.chartProperties.styles.channel==1 : objChart.styles.channel==1){
		if(myArray[10] && !myArray[34] && !myArray[57]){
			svgChannels.select("#stub_1020").attr("visibility", "visible");
		}
		if(!myArray[10] && !myArray[20] && myArray[34]){
			svgChannels.select("#stub_3457").attr("visibility", "visible");
		}
	}

	//	Channels (for interactive)
	if (ver==5 || ver==7) {
		for (var key in objChart.channels) {
			if(objChart.channels[key].index[ord]==1){
				svgChannels.select("#channels").select("#ch_"+key).attr("visibility", "visible");
			}
		}

		g10 = "10" in objChart.gates ? "10" : "";
		g20 = "20" in objChart.gates ? "20" : "";
		g34 = "34" in objChart.gates ? "34" : "";
		g57 = "57" in objChart.gates ? "57" : "";
		mchannel=g10+g20+g34+g57;
		if (mchannel.length > 4)
			svgChannels.select("#channels").select("#ch_"+mchannel).attr("visibility", "visible");

	}
}

{	//	Planet labels
	if(objChart.labels && objChart.labels.length>0){
		if(objChart.chartProperties.svcId == "freeMultidim"){
			var lblPers = objChart.labels.length-1;
			var lblDesi = (objChart.labels.length-10)+ord;
			if(ord==1 || ord==3 || ord==5 | ord==7){
				temp = lblPers;
				lblPers=lblDesi;
				lblDesi=temp;
			}
			root.select("#labelBody").text(objChart.labels[lblPers].lbl);
			root.select("#labelMind").text(objChart.labels[lblDesi].lbl);
		} else {
			root.select("#labelBody").text(objChart.labels[objChart.labels.length-2].lbl);
			root.select("#labelMind").text(objChart.labels[objChart.labels.length-1].lbl);
		}
	}
}
	});
}

function chartPenta(objChart, pColor){
	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/bgPenta.svg?v=0.16").then(data=> {
		d3.select("#chartPenta").node().append(data.documentElement);

		var isTransit = objChart.chartProperties.svcType == 'transit';
		var grpSize = isTransit ? objChart.data.birthTimeUtc.length-1 : objChart.data.birthTimeUtc.length;
		var colors = ["#4278E3", "#2A9627", "#FC065F", "#882BC6", "#F9A715"];

{	//	Init
	var root = d3.select("#chartPenta");
	var roots = setStyles1(objChart, root, objChart.advChart.typeId, "found");
	var svgCenters = roots[0];
	var svgChannels = roots[1];
}
{	//	Members
	if (objChart.chartProperties.svcType == 'transit') objChart.data.name.pop();
	var memSpan = d3.select("#persons")
					.select("text")
					.selectAll("tspan").data(objChart.data.name)
					.enter()
					.append("tspan");
	memSpan.text(function(d) { return d; })
			.attr("cursor", "pointer")
			.attr("x", "15")
			.attr("dy", "15");
	d3.select("#persons").selectAll("rect").data(objChart.data.name)
					.enter()
					.append("rect")
					.attr("transform", function(d, i) { return "matrix(1 0 0 1 0 "+ (7+i*15) +")"; })
					.attr("fill", function(d, i) { return colors[i]; })
					.attr("width", "10")
					.attr("height", "10");
}
{	//	Interactive
	d3.select("#persons").select("text").selectAll("tspan").on("mouseover",function(d, i){
		var e = d3.select("#persons").select("text").selectAll("tspan").nodes();
		var i = e.indexOf(this);
		var gates = d3.selectAll(".person"+i);
		gates.select(".half_channel").attr("stroke",colors[i]);
		gates.selectAll("circle").attr("fill",colors[i]);
	});

	d3.select("#persons").select("text").selectAll("tspan").on("mouseout",function(d, i){
		var e = d3.select("#persons").select("text").selectAll("tspan").nodes();
		var i = e.indexOf(this);
		var gates = d3.selectAll(".person"+i);
		gates.select(".half_channel").attr("stroke", pColor);
		gates.selectAll("circle").attr("fill","#C92711");
	});
	
	d3.selectAll(".gate").on("mouseover",function(d){
		if (d3.select(this).attr("class")=="gate") return;
		var gates = d3.selectAll("#" + d3.select(this).attr('id'));
		gates.select(".half_channel").attr("stroke","#CE3BFF");
		gates.selectAll("circle").attr("fill","#CE3BFF");
		
		var memSpan = d3.select("#persons")
						.select("text")
						.selectAll("tspan").data(objChart.gates[d3.select(this).attr("data-id")])
						.attr("fill", function(d) { return d ? "#CE3BFF" : "#000000"});
	});
	d3.selectAll(".gate").on("mouseout",function(d){
		if (d3.select(this).attr("class")=="gate") return;
		var gates = d3.selectAll("#" + d3.select(this).attr('id'));
		gates.select(".half_channel").attr("stroke", pColor);
		gates.selectAll("circle").attr("fill","#C92711");
		
		var memSpan = d3.select("#persons")
						.select("text")
						.selectAll("tspan")
						.attr("fill", "#000000");
	})
}
{	//	Gates
	var gates = [1, 2, 5, 7, 8, 13, 14, 15, 29, 31, 33, 46];

	for(k=0; k<12; k++){
		var i = gates[k];
		if(objChart.advChart.gates[i]){
			var gClass = "gate";
			for(j=0; j<grpSize; j++){
				if (objChart.gates[gates[k]][j])
					gClass = gClass + " person" + j;
			}
			var gate = svgChannels.selectAll("#gate_"+i).attr("visibility", "visible");
			gate.attr("class", gClass);
			gate.select("#half_channel").attr("fill", (isTransit && gClass=="gate") ? "#CE3BFF" : pColor);
			
			root.select("#Gates").selectAll("#gate_"+i).attr("visibility", "visible");
			root.select("#Gates").selectAll("#gate_"+i).attr("class", gClass);
		}
	}
}
{	//	Centers
	var channels = objChart.advChart.channels;
	var centrs = svgCenters.selectAll(".center").attr("visibility", "hidden"); 

	for(var i in channels){
		var ch = channels[i].Id;

		if(ch=='0108' || ch=='0731' || ch=='1333') {
			d3.select(centrs._groups[0][5]).attr("visibility", "visible");
			d3.select(centrs._groups[0][6]).attr("visibility", "visible");
		}

		if(ch=='0214' || ch=='0515' || ch=='2946'){
			d3.select(centrs._groups[0][5]).attr("visibility", "visible");
			d3.select(centrs._groups[0][1]).attr("visibility", "visible");
		}
	}
}
	});
}
function chartPenta64(objChart, pColor){
	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/bgPenta.svg?v=0.16").then(data=> {
		d3.select("#chartPenta").node().append(data.documentElement);

		var isTransit = objChart.chartProperties.svcType == 'transit';
		var grpSize = isTransit ? objChart.data.birthTimeUtc.length-1 : objChart.data.birthTimeUtc.length;
		var colors = ["#4278E3", "#2A9627", "#FC065F", "#882BC6", "#F9A715"];

{	//	Init
	var root = d3.select("#chartPenta");
	var roots = setStyles1(objChart, root, objChart.advChart.typeId, "found");
	var svgCenters = roots[0];
	var svgChannels = roots[1];
	root.selectAll(".penta_mask").attr("visibility", "hidden");
}
{	//	Members
	if (objChart.chartProperties.svcType == 'transit') objChart.data.name.pop();
	var memSpan = d3.select("#persons")
					.select("text")
					.selectAll("tspan").data(objChart.data.name)
					.enter()
					.append("tspan");
	memSpan.text(function(d) { return d; })
			.attr("cursor", "pointer")
			.attr("x", "15")
			.attr("dy", "15");
	d3.select("#persons").selectAll("rect").data(objChart.data.name)
					.enter()
					.append("rect")
					.attr("transform", function(d, i) { return "matrix(1 0 0 1 0 "+ (7+i*15) +")"; })
					.attr("fill", function(d, i) { return colors[i]; })
					.attr("width", "10")
					.attr("height", "10");
}
{	//	Interactive
	d3.select("#persons").select("text").selectAll("tspan").on("mouseover",function(d, i){
		var e = d3.select("#persons").select("text").selectAll("tspan").nodes();
		var i = e.indexOf(this);
		var gates = d3.selectAll(".person"+i);
		gates.select(".half_channel").attr("stroke",colors[i]);
		gates.selectAll("circle").attr("fill",colors[i]);
	});

	d3.select("#persons").select("text").selectAll("tspan").on("mouseout",function(d, i){
		var e = d3.select("#persons").select("text").selectAll("tspan").nodes();
		var i = e.indexOf(this);
		var gates = d3.selectAll(".person"+i);
		gates.select(".half_channel").attr("stroke", pColor);
		gates.selectAll("circle").attr("fill","#C92711");
	});
	
	d3.selectAll(".gate").on("mouseover",function(d){
		if (d3.select(this).attr("class")=="gate") return;
		var gates = d3.selectAll("#" + d3.select(this).attr('id'));
		gates.select(".half_channel").attr("stroke","#CE3BFF");
		gates.selectAll("circle").attr("fill","#CE3BFF");
		
		var memSpan = d3.select("#persons")
						.select("text")
						.selectAll("tspan").data(objChart.gates[d3.select(this).attr("data-id")])
						.attr("fill", function(d) { return d ? "#CE3BFF" : "#000000"});
	});
	d3.selectAll(".gate").on("mouseout",function(d){
		if (d3.select(this).attr("class")=="gate") return;
		var gates = d3.selectAll("#" + d3.select(this).attr('id'));
		gates.select(".half_channel").attr("stroke", pColor);
		gates.selectAll("circle").attr("fill","#C92711");
		
		var memSpan = d3.select("#persons")
						.select("text")
						.selectAll("tspan")
						.attr("fill", "#000000");
	})
}
{	//	Gates
	for(i=1; i<65; i++){
		if(objChart.advChart.gates[i]){
			var gClass = "gate";
			for(j=0; j<grpSize; j++){
				if (objChart.gates[i][j])
					gClass = gClass + " person" + j;
			}
			var gate = svgChannels.selectAll("#gate_"+i).attr("visibility", "visible");
			gate.attr("class", gClass);
			gate.select("#half_channel").attr("fill", (isTransit && gClass=="gate") ? "#CE3BFF" : pColor);
			
			root.select("#Gates").selectAll("#gate_"+i).attr("visibility", "visible");
			root.select("#Gates").selectAll("#gate_"+i).attr("class", gClass);
		}
	}

	var myArray = {10:objChart.advChart.gates[10]!=null,
				   20:objChart.advChart.gates[20]!=null,
				   34:objChart.advChart.gates[34]!=null,
				   57:objChart.advChart.gates[57]!=null};
	if(objChart.chartProperties.skinCenter==1){
		if(myArray[10] && !myArray[34] && !myArray[57]){
			d3.select("#stub_1020").attr("visibility", "visible");
		}
		if(!myArray[10] && !myArray[20] && myArray[34]){
			d3.select("#stub_3457").attr("visibility", "visible");
		}
	}
}
{	//	Centers
	var centers = objChart.advChart.centers;

	svgCenters.select("#coloured_centres")
		.selectAll(".center")
		.data(centers)
		.attr("visibility",  function(d) { return d>0 ? "visible" : "hidden";})
		.attr("stroke",  function(d, i) { return d>0 && ver==7 && objChart.centers[i].index[0]==0 ? "#29fe29" : "none";})
		.select("#border")
		.attr("visibility",  function(d) { return d==2 ? "visible" : "hidden";});
}
	});
}

function chartSleep(objChart, i){
	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/bgSleep.svg?v=0.21").then(data=> {
		d3.select("#chart"+i).node().append(data.documentElement);

{	//	Init
	var styles = null;
	if (objChart.chartProperties) {
		styles = objChart.chartProperties.styles;
	} else {
		styles = objChart.styles;
	}
}
{	//	Styles
	var root = d3.select("#chart"+i);
	setStyles(styles, root, objChart.chartProperties.viewId, "sleep");

	setBodyAura(styles, objChart.data.type[i].AuraColors, "sleep", root)
}
{	//	Centers
	var typeChart =  objChart.chartProperties.viewId;
	var centers = new Array();
	for (var key in objChart.centers) {
		centers.push(objChart.centers[key].index[i]);
		if (objChart.advChart!=null && objChart.chartProperties.svcId!="freeMultidim" && centers[key]==0 && objChart.advChart.centers[key]==1)
			centers[key] = -2;
	}

	setCenters(styles, centers, "sleep", root, typeChart);
}
{	//	GatesChannels
	var gates = {};
	for (var key in objChart.gates) {
		if(objChart.gates[key][i]!=null) {
			gates[key] = objChart.gates[key][i]["Activation"];

			if(typeChart=="talkSleep"){
				d3.select("#chart"+i).selectAll("#gate_"+key)
					.attr("visibility", "visible")
					.attr("cursor", "pointer")
					.attr("onclick", "javascript:playAudio('../TCSL/TCSL-GA-"+objChart.gates[key][i].Id+".mp3','"+objChart.gates[key][i].GateName+"')");

					d3.select("#grid1").selectAll("#gate_"+key)					
					.attr("cursor", "pointer")
					.on("click", function(d){ resetHighlights(); d3.select("#chart"+i).select("#Gates").selectAll("#"+d3.select(this).attr("id").replace("gate", "red")).attr("fill","#06BFF9"); })
					.attr("onclick", "javascript:playAudio('../TCSL/TCSL-GA-"+objChart.gates[key][i].Id+".mp3','"+objChart.gates[key][i].GateName+"')");

					d3.select("#grid2").selectAll("#gate_"+key)					
					.attr("cursor", "pointer")
					.on("click", function(d){ resetHighlights(); d3.select("#chart"+i).select("#Gates").selectAll("#"+d3.select(this).attr("id").replace("gate", "red")).attr("fill","#06BFF9"); })
					.attr("onclick", "javascript:playAudio('../TCSL/TCSL-GA-"+objChart.gates[key][i].Id+".mp3','"+objChart.gates[key][i].GateName+"')");

					d3.select("#grid3").selectAll("#gate_"+key)					
					.attr("cursor", "pointer")
					.on("click", function(d){ resetHighlights(); d3.select("#chart"+i).select("#Gates").selectAll("#"+d3.select(this).attr("id").replace("gate", "red")).attr("fill","#06BFF9"); })
					.attr("onclick", "javascript:playAudio('../TCSL/TCSL-GA-"+objChart.gates[key][i].Id+".mp3','"+objChart.gates[key][i].GateName+"')");
			}
			
		}
	}

	var channels = {};	
	for (var key in objChart.channels) {
		if (objChart.channels[key].index[i]==1)
			channels[key] = objChart.channels[key].details;
	}
	setChannels(styles, gates, channels, "sleep", root);
}
	});
}
function chartSleepAdv(objChart, ver){
	var root = d3.select(ver != null ? "#chartAdv"+ver : "#chartAdv");
	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/bgSleep.svg?v=0.21").then(data=> {
		root.node().append(data.documentElement);

{	//	Init
	if (ver != null)
		advChart = objChart.ChartAdvsStruct[ver];
	else
		advChart = objChart.advChart;
	
	var styles = null;
	if (objChart.chartProperties) {
		styles = objChart.chartProperties.styles;
	} else {
		styles = objChart.styles;
	}
}
{	//	Styles
	var typeChart =  objChart.chartProperties.viewId;
	setStyles(styles, root, objChart.chartProperties.viewId, "sleep");

	setBodyAura(styles, advChart.auraColors, "sleep", root)
}
{	//	Centers
	setCenters(styles, advChart.centers, "sleep", root, typeChart);
}
{	//	GatesChannels
	var advGates = advChart.gates;
	var gates = [];

	for (var key in advGates) {
		if (objChart.chartProperties && (objChart.chartProperties.svcId == "freeConnST" || objChart.chartProperties.svcId == "talkConnST")) {
			if(advGates[key] == "")
				gates[key] = "P";
			else if ((objChart.gates[key][2]!=null || objChart.gates[key][3]!=null) && objChart.gates[key][4]!=null)
				gates[key] = "J";
			else
				gates[key] = "D";
		} else if (objChart.chartProperties && objChart.chartProperties.svcId == "petConnST") {
			if(advGates[key] == "")
				gates[key] = "P";
			else if (objChart.gates[key][3]!=null)
				gates[key] = "J";
			else
				gates[key] = "D";
		} else {
			if(advGates[key] == (objChart.chartProperties && objChart.chartProperties.svcType=="transit" ? "T" : "B"))
				gates[key] = "P";
			else if(advGates[key] == "J")
				gates[key] = "J";
			else
				gates[key] = "D";
		}
	}

	var channels = {};
	for (var key in advChart.channels) {
		channels[advChart.channels[key].Id] = advChart.channels[key];
	}

	if (objChart.chartProperties.svcId == "talkSleepT" || objChart.chartProperties.svcId == "freeConnST" || objChart.chartProperties.svcId == "talkConnST" || objChart.chartProperties.svcId == "petConnST" || objChart.chartProperties.svcId == "freeDreamT") {
		setChannels(styles, gates, channels, "sleep", root, "#01CD01", "#CE3BFF");
	} else {
		setChannels(styles, gates, channels, "sleep", root, "#06BFF9", "#F96C03");
	}

	if(typeChart=="talkSleepT"){
		for (var key in objChart.gates) {
			var gateObj = objChart.gates[key][0]!=null ? objChart.gates[key][0] : objChart.gates[key][1];

			d3.select("#chartAdv").selectAll("#gate_"+key)
				.attr("cursor", "pointer")
				.attr("onclick", "javascript:playAudio('../TCSL/TCSL-GA-"+gateObj.Id+".mp3','"+gateObj.GateName+"')");

			d3.select("#grid1").selectAll("#gate_"+key)					
			.attr("cursor", "pointer")
			.on("click", function(d){ resetHighlights(); d3.select("#chartAdv").select("#Gates").selectAll("#"+d3.select(this).attr("id").replace("gate", "red")).attr("fill","#06BFF9"); })
			.attr("onclick", "javascript:playAudio('../TCSL/TCSL-GA-"+gateObj.Id+".mp3','"+gateObj.GateName+"')");

			d3.select("#grid2").selectAll("#gate_"+key)					
			.attr("cursor", "pointer")
			.on("click", function(d){ resetHighlights(); d3.select("#chartAdv").select("#Gates").selectAll("#"+d3.select(this).attr("id").replace("gate", "red")).attr("fill","#06BFF9"); })
			.attr("onclick", "javascript:playAudio('../TCSL/TCSL-GA-"+gateObj.Id+".mp3','"+gateObj.GateName+"')");

			d3.select("#grid3").selectAll("#gate_"+key)					
			.attr("cursor", "pointer")
			.on("click", function(d){ resetHighlights(); d3.select("#chartAdv").select("#Gates").selectAll("#"+d3.select(this).attr("id").replace("gate", "red")).attr("fill","#06BFF9"); })
			.attr("onclick", "javascript:playAudio('../TCSL/TCSL-GA-"+gateObj.Id+".mp3','"+gateObj.GateName+"')");
		}
	}
}
	});
}
function chartAnimal(objChart, i, animal){
	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/bgAnimal.svg?v=0.21").then(data=> {
		d3.select("#chart"+i).node().append(data.documentElement);

{	//	Init
	var styles = null;
	if (objChart.chartProperties) {
		styles = objChart.chartProperties.styles;
	} else {
		styles = objChart.styles;
	}
}
{	//	Styles
	var root = d3.select("#chart"+i);
	setStyles(styles, root, objChart.chartProperties.viewId, "animal");

	setBodyAura(styles, objChart.data.type[i].AuraColors, "animal", root, animal)
}
{	//	Centers
	var centers = new Array();
	for (var key in objChart.centers) {
		centers.push(objChart.centers[key].index[i]);
		if (objChart.advChart!=null && objChart.chartProperties.svcId!="freeMultidim" && centers[key]==0 && objChart.advChart.centers[key]==1)
			centers[key] = -2;
	}
	setCenters(styles, centers, "animal", root);
}
{	//	GatesChannels
	var gates = {};
	for (var key in objChart.gates) {
		if(objChart.gates[key][i]!=null) {
			gates[key] = objChart.gates[key][i]["Activation"];
		}
	}

	var channels = {};	
	for (var key in objChart.channels) {
		if (objChart.channels[key].index[i]==1)
			channels[key] = objChart.channels[key].details;
	}
	setChannels(styles, gates, channels, "animal", root);
}
	});
}
function chartAnimalAdv(objChart, animal){
	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/bgAnimal.svg?v=0.21").then(data=> {
		d3.select("#chartAdvA").node().append(data.documentElement);

{	//	Init
	var styles = null;
	if (objChart.chartProperties) {
		styles = objChart.chartProperties.styles;
	} else {
		styles = objChart.styles;
	}
}
{	//	Styles
	var root = d3.select("#chartAdvA");
	setStyles(styles, root, objChart.chartProperties.viewId, "animal");

	setBodyAura(styles, objChart.advChart.sauraColors, "animal", root, animal)
}
{	//	Centers
	if (objChart.chartProperties.svcId=="petTransit" || objChart.chartProperties.svcId=="petConnA" || objChart.chartProperties.svcId=="petConnAT") {
		setCenters(styles, objChart.advChart.SleepCenters, "animal", root);
	} else {
		setCenters(styles, objChart.advChart.centers, "animal", root);
	}
}
{	//	GatesChannels
	var advGates = objChart.advChart.gates;
	var gates = [];
	for (var key in advGates) {
		if (objChart.chartProperties.svcId == "petConnT") {
			if(advGates[key] == "")
				gates[key] = "D";
			else if (objChart.gates[key][2]!=null)
				gates[key] = "J";
			else
				gates[key] = "P";
		} else if (objChart.chartProperties.svcId == "petConnST") {
			if(advGates[key] == "")
				gates[key] = "D";
			else if (objChart.gates[key][3]!=null)
				gates[key] = "J";
			else
				gates[key] = "P";
		} else {
			if(advGates[key] == "B" || advGates[key] == "D")
				gates[key] = "P";
			else if(advGates[key] == "J")
				gates[key] = "J";
			else
				gates[key] = "D";
		}
	}
	var chnls ={"0108":"#dAlpha", "0515":"#dMetamorphosis", "2057":"#dAlpha", "2838":"#dTerritory", "2750":"#dMetamorphosis", "4253":"#dTerritory"}
	var channels = {};
	for (var key in objChart.advChart.channels) {
		channels[objChart.advChart.channels[key].Id] = objChart.advChart.channels[key];
	}

	if (objChart.chartProperties.svcId == "petConnAT" || objChart.chartProperties.svcId == "petConnST" || objChart.chartProperties.svcId == "petConnT" || objChart.chartProperties.svcId == "petTransit") {
		setChannels(styles, gates, channels, "animal", root, "#CE3BFF", "#01CD01");
	} else {
		setChannels(styles, gates, channels, "animal", root, "#06BFF9", "#F96C03");
	}
}
	});
}

async function chartPet(objChart, i){
	var root = d3.select("#chart"+i);
	const data = await d3.svg("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/bg" + objChart.data.psType[i] + ".svg?v=47");
	root.node().append(data.documentElement);
	var animal = objChart.data.bdType[i];
{	//	Init
	var styles = null;
	if (objChart.chartProperties) {
		styles = objChart.chartProperties.styles;
	} else {
		styles = objChart.styles;
	}
	setBodyAura(styles, objChart.data.type[i].AuraColors, "animal", root, animal)
}
{	//	Centers
	var centers = new Array();
	for (var key in objChart.centers) {
		centers.push(objChart.centers[key].index[i]);
	}
	root.select("#coloured_centres")
		.selectAll("#center")
		.data(centers)
		.attr("visibility",  function(d) { return d=="1" ? "visible" : "hidden";});
}
{	//	GatesChannels
	for (var key in objChart.gates) {
		if(objChart.gates[key][i]!=null){
			if (objChart.data.gatesSet[i] == "Insect") {
				if(key==10 && objChart.gates[20]!=null && objChart.gates[20][i]!=null){
					var gate = root.selectAll("#gate_20-10");
					gate.attr("visibility", "visible");
					if(objChart.gates[key][i].Activation == "D")
						gate.select("#Desi").attr("visibility", "visible");
					else if(objChart.gates[key][i].Activation == "J")
						gate.select("#Juxt").attr("visibility", "visible");
				} else if (key==57 && objChart.gates[34]!=null && objChart.gates[34][i]!=null){
					var gate = root.selectAll("#gate_34-57");
					gate.attr("visibility", "visible");
					if(objChart.gates[key][i].Activation == "D")
						gate.select("#Desi").attr("visibility", "visible");
					else if(objChart.gates[key][i].Activation == "J")
						gate.select("#Juxt").attr("visibility", "visible");
				}
			}

			var gate = root.selectAll("#gate_"+key);
			gate.attr("visibility", "visible");
			if(objChart.gates[key][i].Activation == "D")
				gate.select("#Desi").attr("visibility", "visible");
			else if(objChart.gates[key][i].Activation == "J")
				gate.select("#Juxt").attr("visibility", "visible");
		}
	}
}
}
function chartPlant(objChart, i){
	d3.xml("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/bgPlant.svg?v=46").then(data=> {
		d3.select("#chart"+i).node().append(data.documentElement);

	if(objChart.chartProperties.styles.aura)
		d3.select("#chart"+i).select("#aura_"+objChart.data.type[i].Id).attr("visibility", "visible");
{	// Centers
		var centers = new Array();
		for (var key in objChart.centers) {
			centers.push(objChart.centers[key].index[i]);
		}
		d3.select("#chart"+i).select("#coloured_centres")
			.selectAll("#center")
			.data(centers)
			.attr("visibility",  function(d) { return d=="1" ? "visible" : "hidden";});
}
{	// GatesChannels
		for (var key in objChart.gates) {
			if(objChart.gates[key][i]!=null){
				if(key==10 && objChart.gates[34]!=null && objChart.gates[34][i]!=null){
					var gate = d3.select("#chart"+i).selectAll("#gate_34-10");
					gate.attr("visibility", "visible");
					if(objChart.gates[key][i].Activation == "D")
						gate.select("#Desi").attr("visibility", "visible");
					else if(objChart.gates[key][i].Activation == "J")
						gate.select("#Juxt").attr("visibility", "visible");
				} else if (key==57 && objChart.gates[34]!=null && objChart.gates[34][i]!=null){
					var gate = d3.select("#chart"+i).selectAll("#gate_34-57");
					gate.attr("visibility", "visible");
					if(objChart.gates[key][i].Activation == "D")
						gate.select("#Desi").attr("visibility", "visible");
					else if(objChart.gates[key][i].Activation == "J")
						gate.select("#Juxt").attr("visibility", "visible");
				}

				var gate = d3.select("#chart"+i).selectAll("#gate_"+key);
				gate.attr("visibility", "visible");
				if(objChart.gates[key][i].Activation == "D")
					gate.select("#Desi").attr("visibility", "visible");
				else if(objChart.gates[key][i].Activation == "J")
					gate.select("#Juxt").attr("visibility", "visible");
			}
		}
}
	});
}

async function chartPetAdv(objChart, animalType, animal){
	var root = d3.select("#chartAdvA");
	const data = await d3.svg("/wp-content/themes/geneticmatrix/assets/svg/bodygraphs/bg"+animalType+".svg?v=45");
	root.node().append(data.documentElement);
		
{	//	Init
	advChart = objChart.advChart;

	var styles = null;
	if (objChart.chartProperties) {
		styles = objChart.chartProperties.styles;
	} else {
		styles = objChart.styles;
	}
	setBodyAura(styles, advChart.sauraColors, "animal", root, animal)
}
{	//	Centers
	if (objChart.chartProperties.svcId=="petTransit1" || objChart.chartProperties.svcId=="petTransitP" ||
		objChart.chartProperties.svcId=="petConnA" || objChart.chartProperties.svcId=="petConnAP" || 
		objChart.chartProperties.svcId=="petConnS" || objChart.chartProperties.svcId=="petConnSP") {
		d3.select("#chartAdvA").select("#coloured_centres")
			.selectAll("#center")
			.data(objChart.advChart.SleepCenters)
			.attr("visibility",  function(d) { return d==1 ? "visible" : "hidden";});
	} else {
		d3.select("#chartAdvA").select("#coloured_centres")
			.selectAll("#center")
			.data(objChart.advChart.SleepCenters)
			.attr("visibility",  function(d) { return d==1 ? "visible" : "hidden";});
	}
}
{	//	GatesChannels
		if (objChart.chartProperties.svcId == "petTransit" || objChart.chartProperties.svcId == "freePetCAT" || objChart.chartProperties.svcId == "freePetCST" || objChart.chartProperties.svcId == "freePetCT") {
			d3.select("#chartAdvA").selectAll("#black_gate").attr("fill","#CE3BFF");		// purple
			d3.select("#chartAdvA").selectAll("#red_gate").attr("fill","#01CD01");		// green
		} else {
			d3.select("#chartAdvA").selectAll("#red_gate").attr("fill","#F96C03");
			d3.select("#chartAdvA").selectAll("#black_gate").attr("fill","#06BFF9");
		}
		for (var key in objChart.advChart.gates) {
			if (objChart.chartProperties.svcId == "freePetCAT" || objChart.chartProperties.svcId == "freePetCT") {
				var gate = d3.select("#chartAdvA").selectAll("#gate_"+key);
				gate.attr("visibility", "visible");
				if(objChart.advChart.gates[key] == "")
					gate.select("#Desi").attr("visibility", "visible");
				else if (objChart.gates[key][2]!=null)
					gate.select("#Juxt").attr("visibility", "visible");
			} else if (objChart.chartProperties.svcId == "freePetCST") {
				var gate = d3.select("#chartAdvA").selectAll("#gate_"+key);
				gate.attr("visibility", "visible");
				if(objChart.advChart.gates[key] == "")
					gate.select("#Desi").attr("visibility", "visible");
				else if (objChart.gates[key][3]!=null)
					gate.select("#Juxt").attr("visibility", "visible");
			} else {
				var gate = d3.select("#chartAdvA").selectAll("#gate_"+key);
				gate.attr("visibility", "visible");
				if(objChart.advChart.gates[key] == "B")
					gate.select("#Desi").attr("visibility", "visible");
				else if(objChart.advChart.gates[key] == "J")
					gate.select("#Juxt").attr("visibility", "visible");
			}
		}
}
}
