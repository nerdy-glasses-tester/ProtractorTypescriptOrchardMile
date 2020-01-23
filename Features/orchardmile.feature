Feature: As a customer, I want to browse and search for products on the OrchardMile ecommerce webapp store, so I can add them to the shopping cart.

@AddtoCart
Scenario: Able to add a product to cart

Given I hover over the accessories category and click on the keychains subcategory link
When I select a product from the category page 
And is taken to the product details page and I click on add to bag
Then the product is added to my bag page and it will display with the same brand, product, price, and quantity
And the subtotal will be tallied correctly

@Search
Scenario Outline: Search for products

Given I will click search field
When I enter "<keyword>"
Then the search results returned will display "<keyword>" products

Examples:
| keyword |
| Wallet |
| Sneakers |

@BrowseByCategory
Scenario Outline: Browse by category

Given I will hover over a category header to bring up the subcategories popup
When I select a subcategory
Then the products displayed will show "<subcategory>" name in the description text
And the left side menu will have the "<category>" and the "<subcategory>" actively open
And the results page displayed will show the "<subcategoryheader>" header 

Examples:
| subcategory | category | subcategoryheader |
| Sandals | Shoes | SANDALS |


@FilterByCriteria
Scenario Outline: Filter Makeup Further By Criteria

Given I hover over the beauty link and click on makeup link
When I scrolled down and check concealer and check Clinique from designers section
Then the makeup product results will filter to display "<brand>" "<makeupcategory>"

Examples:
| brand | makeupcategory |
| Clinique | concealer |

@Sale50PercentOff
Scenario: View sale items that are 50 percent off

Given I clicked on sales category
When I scroll down and click on 50 percent off or more link to filter further
Then all products returned have prices that are 50 percent off or more

@RemovefromCart
Scenario: Remove product from cart

Given I add a keychain product and a haircare product to bag
When I navigate to my bag and click to remove the haircare product
Then the product will be removed from my bag page
And the total items will be retallied correctly
And the subtotal will be retallied correctly

@BrowseByDesigner
Scenario Outline: Browse by designer

Given I hover over the designers link and click on View All
When I click on Y link and the designer in the Y section
Then the designer products displayed will show "<designer>" name in the description text
And the results page displayed will show the "<designer>" in the header

Examples:
| designer |
| Yumi Kim |