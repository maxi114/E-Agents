import React, { useEffect, useRef } from 'react';
import "./css/material-dashboard.css?v=3.1.0";
import Chart from 'chart.js/auto';

const Evaluation = ({ evaluation }) => {
  const chartBarsRef = useRef(null);
  const chartLineRef = useRef(null);
  const chartLineTasksRef = useRef(null);

  useEffect(() => {
    let chartBars = null;
    let chartLine = null;
    let chartLineTasks = null;

    const ctxBars = chartBarsRef.current.getContext('2d');
    const ctxLine = chartLineRef.current.getContext('2d');
    const ctxLineTasks = chartLineTasksRef.current.getContext('2d');

    const initializeCharts = () => {
      if (chartBars) chartBars.destroy();
      if (chartLine) chartLine.destroy();
      if (chartLineTasks) chartLineTasks.destroy();

      chartBars = new Chart(ctxBars, {
        type: "bar",
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          datasets: [{
            label: "Sales",
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "rgba(255, 255, 255, .8)",
            data: [50, 20, 10, 22, 50, 10, 40],
            maxBarThickness: 6
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            }
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
          scales: {
            y: {
              grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
                color: 'rgba(255, 255, 255, .2)'
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 500,
                beginAtZero: true,
                padding: 10,
                font: {
                  size: 14,
                  weight: 300,
                  family: "Roboto",
                  style: 'normal',
                  lineHeight: 2
                },
                color: "#fff"
              },
            },
            x: {
              grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
                color: 'rgba(255, 255, 255, .2)'
              },
              ticks: {
                display: true,
                color: '#f8f9fa',
                padding: 10,
                font: {
                  size: 14,
                  weight: 300,
                  family: "Roboto",
                  style: 'normal',
                  lineHeight: 2
                },
              }
            },
          },
        },
      });

      chartLine = new Chart(ctxLine, {
        type: "line",
        data: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "Mobile apps",
            tension: 0,
            borderWidth: 0,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255, 255, 255, .8)",
            pointBorderColor: "transparent",
            borderColor: "rgba(255, 255, 255, .8)",
            borderWidth: 4,
            backgroundColor: "transparent",
            fill: true,
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
            maxBarThickness: 6
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            }
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
          scales: {
            y: {
              grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
                color: 'rgba(255, 255, 255, .2)'
              },
              ticks: {
                display: true,
                color: '#f8f9fa',
                padding: 10,
                font: {
                  size: 14,
                  weight: 300,
                  family: "Roboto",
                  style: 'normal',
                  lineHeight: 2
                },
              }
            },
            x: {
              grid: {
                drawBorder: false,
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                borderDash: [5, 5]
              },
              ticks: {
                display: true,
                color: '#f8f9fa',
                padding: 10,
                font: {
                  size: 14,
                  weight: 300,
                  family: "Roboto",
                  style: 'normal',
                  lineHeight: 2
                },
              }
            },
          },
        },
      });

      chartLineTasks = new Chart(ctxLineTasks, {
        type: "line",
        data: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "Mobile apps",
            tension: 0,
            borderWidth: 0,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255, 255, 255, .8)",
            pointBorderColor: "transparent",
            borderColor: "rgba(255, 255, 255, .8)",
            borderWidth: 4,
            backgroundColor: "transparent",
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            }
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
          scales: {
            y: {
              grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
                color: 'rgba(255, 255, 255, .2)'
              },
              ticks: {
                display: true,
                padding: 10,
                color: '#f8f9fa',
                font: {
                  size: 14,
                  weight: 300,
                  family: "Roboto",
                  style: 'normal',
                  lineHeight: 2
                },
              }
            },
            x: {
              grid: {
                drawBorder: false,
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                borderDash: [5, 5]
              },
              ticks: {
                display: true,
                color: '#f8f9fa',
                padding: 10,
                font: {
                  size: 14,
                  weight: 300,
                  family: "Roboto",
                  style: 'normal',
                  lineHeight: 2
                },
              }
            },
          },
        },
      });
    };

    initializeCharts();

    // Cleanup on unmount
    return () => {
      if (chartBars) chartBars.destroy();
      if (chartLine) chartLine.destroy();
      if (chartLineTasks) chartLineTasks.destroy();
    };
  }, []);

  return (
    <div>
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">house</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Cost</p>
                    <h4 className="mb-0">$53k</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0"><span className="text-success text-sm font-weight-bolder"></span>Investment estimate</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">house</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">C-Value</p>
                    <h4 className="mb-0">$5K</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0"><span className="text-success text-sm font-weight-bolder"> </span>Estimated current value</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">house</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">F-value</p>
                    <h4 className="mb-0">$100K</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0"><span className="text-danger text-sm font-weight-bolder"></span>Estimated Final value</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-header p-3 pt-2">
                  <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                    <i className="material-icons opacity-10">house</i>
                  </div>
                  <div className="text-end pt-1">
                    <p className="text-sm mb-0 text-capitalize">Net profit</p>
                    <h4 className="mb-0">$47K</h4>
                  </div>
                </div>
                <hr className="dark horizontal my-0" />
                <div className="card-footer p-3">
                  <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+ </span> Estimated Net Profit</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-7 mb-lg-0 mb-4">
              <div className="card z-index-2">
                <div className="card-header p-3">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas id="chart-bars" ref={chartBarsRef} className="chart-canvas" height="170"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0">Investment Interest</h6>
                  <p className="text-sm">investors interested in this property</p>
                  <hr className="dark horizontal" />
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">schedule</i>
                    <p className="mb-0 text-sm"> Estimated state updated 2 hours ago </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card z-index-2">
                <div className="card-header p-3">
                  <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas id="chart-line" ref={chartLineRef} className="chart-canvas" height="170"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0"> ROI </h6>
                  <p className="text-sm"> (<span className="font-weight-bolder">+15%</span>) Return on investment. </p>
                  <hr className="dark horizontal" />
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">schedule</i>
                    <p className="mb-0 text-sm"> updated 4 min ago </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-5 mb-lg-0 mb-4">
              <div className="card z-index-2">
                <div className="card-header p-3">
                  <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1">
                    <div className="chart">
                      <canvas id="chart-line-tasks" ref={chartLineTasksRef} className="chart-canvas" height="170"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h6 className="mb-0">Completed Tasks</h6>
                  <p className="text-sm">Last Campaign Performance</p>
                  <hr className="dark horizontal" />
                  <div className="d-flex ">
                    <i className="material-icons text-sm my-auto me-1">schedule</i>
                    <p className="mb-0 text-sm">just updated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Evaluation;
