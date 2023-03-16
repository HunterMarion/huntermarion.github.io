import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


class Home extends React.Component {

     render() {
          return (
                  <>
                  <div className='menuHero'></div>
              
                        <p className="menuOpener text-center justify-content-center"><strong>Morning Snack</strong> is a full-service, comfort-focused brunch restaurant situated in
                        the heart of Dallas. Enjoy breakfast, lunch, or in-between inside a renovated
                        Uptown bodega bathed in natural light. Our menu focuses on fresh, locally sourced
                        ingredients; our delicious bread is baked in-house every morning
                        before opening; and our famous mimosas are always available.</p>


                  {/*<div class="row">
                        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                              <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt="Boat on Calm Water"
                              />

                              <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt="Wintry Mountain Landscape"
                              />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                              <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt="Mountains in the Clouds"
                              />

                              <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt="Boat on Calm Water"
                              />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                              <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt="Waves at Sea"
                              />

                              <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                                    class="w-100 shadow-1-strong rounded mb-4"
                                    alt="Yosemite National Park"
                              />
                        </div>
          </div>*/}


                  <h1 className="pageHeader text-center">BRUNCH MENU</h1>

                  <p className="dailyTimes text-center"><strong>DAILY 11 AM - 5 PM</strong></p>

                  <div className="menuSelection1 container-md">
                  <Container>
                        <Row>
                              <Col className="menuCategory"><strong><u>APPETIZERS</u></strong></Col>
                              <Col></Col>
                              <Col className="menuCategory"><strong><u>SOUPS & SALADS</u></strong></Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col>PASTRY BOARD</Col>
                              <Col>15</Col>
                              <Col>CAESAR</Col>
                              <Col>5</Col>
                        </Row>
                        
                        <Row>
                              <Col>assortment of danishes, cinnamon rolls, baklava, muffins, and canolies</Col>
                              <Col></Col>
                              <Col>romaine lettuce, garlic croutons, and a creamy dressing</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col>SEASONED FRIES</Col>
                              <Col>8</Col>
                              <Col>COBB</Col>
                              <Col>5</Col>
                        </Row>

                        <Row>
                              <Col>spicy cajun-seasoned steak fries</Col>
                              <Col></Col>
                              <Col>romaine lettuce, crumbled blue cheese, chicken, and bacon</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col>WAFFLE BOARD</Col>
                              <Col>20</Col>
                              <Col>SOUTHWESTERN</Col>
                              <Col>6</Col>
                        </Row>

                        <Row>
                              <Col>combination of belgian, potato,
                              bubble, and egg waffles</Col>
                              <Col></Col>
                              <Col>corn, black beans, tortilla strips, and a creamy southwest dressing</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col>CHEESE BOARD</Col>
                              <Col>15</Col>
                              <Col>SOUP OF THE DAY</Col>
                              <Col>7</Col>
                        </Row>

                        <Row>
                              <Col>charcuterie of seasonal cheeses, sliced meats, pickled vegetables, and fresh fruit</Col>
                              <Col></Col>
                              <Col>tomato, french onion, tortilla, or
                              seasonal choice</Col>
                              <Col></Col>
                        </Row>
                  </Container>
                  </div>

                  <hr></hr>

                  <div className="menuSelection2 container-md">
                  <Container>
                        <Row>
                              <Col className="menuCategory"><strong><u>SANDWICHES</u></strong></Col>
                              <Col></Col>
                              <Col className="menuCategory"><strong><u>ENTREES</u></strong></Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col>BLT</Col>
                              <Col>13</Col>
                              <Col>FRENCH TOAST</Col>
                              <Col>14</Col>
                        </Row>
                        
                        <Row>
                              <Col>...</Col>
                              <Col></Col>
                              <Col>...</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col>GRILLED CHEESE</Col>
                              <Col>10</Col>
                              <Col>PANCAKES</Col>
                              <Col>16</Col>
                        </Row>

                        <Row>
                              <Col>...</Col>
                              <Col></Col>
                              <Col>...</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col>BREAKFAST BAGEL</Col>
                              <Col>9</Col>
                              <Col>EGGS BENEDICT</Col>
                              <Col>15</Col>
                        </Row>

                        <Row>
                              <Col>...</Col>
                              <Col></Col>
                              <Col>...</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col>VEGGIE</Col>
                              <Col>10</Col>
                              <Col>POKE BOWL</Col>
                              <Col>17</Col>
                        </Row>

                        <Row>
                              <Col>...</Col>
                              <Col></Col>
                              <Col>...</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col></Col>
                              <Col></Col>
                              <Col>SALMON</Col>
                              <Col>25</Col>
                        </Row>

                        <Row>
                              <Col></Col>
                              <Col></Col>
                              <Col>...</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col></Col>
                              <Col></Col>
                              <Col>BRUNCH BURGER</Col>
                              <Col>15</Col>
                        </Row>
                  </Container>
                  </div>

                  <hr></hr>

                  <div className="menuSelection3 container-md">
                  <Container>
                        <Row>
                              <Col className="menuCategory"><strong><u>DESSERTS</u></strong></Col>
                              <Col></Col>
                              <Col className="menuCategory"><strong><u>DRINKS</u></strong></Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col>CHEESECAKE</Col>
                              <Col>7</Col>
                              <Col>COFFEE</Col>
                              <Col>5</Col>
                        </Row>
                        
                        <Row>
                              <Col>...</Col>
                              <Col></Col>
                              <Col>...</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col>CINNAMON ROLLS</Col>
                              <Col>9</Col>
                              <Col>TEA</Col>
                              <Col>3</Col>
                        </Row>

                        <Row>
                              <Col>...</Col>
                              <Col></Col>
                              <Col>...</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col>SUNDAE</Col>
                              <Col>8</Col>
                              <Col>FRUIT JUICE</Col>
                              <Col>3</Col>
                        </Row>

                        <Row>
                              <Col>...</Col>
                              <Col></Col>
                              <Col>...</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col></Col>
                              <Col></Col>
                              <Col>FOUNTAIN DRINK</Col>
                              <Col>3</Col>
                        </Row>

                        <Row>
                              <Col></Col>
                              <Col></Col>
                              <Col>...</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col></Col>
                              <Col></Col>
                              <Col>MIMOSA</Col>
                              <Col>8</Col>
                        </Row>

                        <Row>
                              <Col></Col>
                              <Col></Col>
                              <Col>...</Col>
                              <Col></Col>
                        </Row>

                        <Row>
                              <Col></Col>
                              <Col></Col>
                              <Col>BLOODY MARY</Col>
                              <Col>8</Col>
                        </Row>
                  </Container>
                  </div>

                  <hr></hr>

                  </>
            )  
     }
}

export default Home;