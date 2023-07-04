@extends('layouts.app')

@section('content') 
	<div class="main" style="background-image: url(assets/images/banner.png);">
		 <div id="particles-js"></div>  
 	  	<div class="mainBanner">
	  		<div class="container">
	  			<div class="banner_cont">
	  				<a href="{{url('signup-login')}}"><h5>Join Create Your Own:</h5></a>
	  				<p>Album, Village, Community, City, Country, State/Region.  Country, Continent, World</p>
	  			</div>
	  			<div class="row"> 
	  				<div class="col-md-9">
			  			<div class="member_wrapper">
			  				<div class="memberCont member01">
			  					<a href="coming-soon.php">
			  						<img src="assets/images/06.png" alt="">
			  					    <div style="background-image:url(assets/images/member-bg.png)">
			  							<h6>Country</h6>
			  							<span>2k Followers</span>
			  					    </div>
			  					</a>
			  				</div>
			  				<div class="memberCont member02">
			  					<a href="eddies-city.php">
			  						<img src="assets/images/eddie.png" alt="">
			  					    <div style="background-image:url(assets/images/member-bg.png)">
			  							<h6>Eddie City Owner</h6>
			  							<span>1k residents 2k Followers</span>
			  					    </div>
			  					</a>
			  				</div>
			  				<div class="memberCont member03">
			  					<a href="coming-soon.php">
			  						<img src="assets/images/03.png" alt="">
			  					    <div style="background-image:url(assets/images/member-bg.png)">
			  							<h6>County/Subregions</h6>
			  							<span>800 Followers</span>
			  					    </div>
			  					</a>
			  				</div>
			  				<div class="memberCont member04">
			  					<a href="coming-soon.php">
			  						<img src="assets/images/04.png" alt="">
			  					    <div style="background-image:url(assets/images/member-bg.png)">
			  							<h6>Village</h6>
			  							<span>2k Followers</span>
			  					    </div>
			  					</a>
			  				</div>
			  				<div class="memberCont member05">
			  					<a href="coming-soon.php">
			  						<img src="assets/images/05.png" alt="">
			  					    <div style="background-image:url(assets/images/member-bg.png)">
			  							<h6>State</h6>
			  							<span>2k Followers</span>
			  					    </div>
			  					</a>
			  				</div>
			  				<div class="memberCont member06">
			  					<a href="social-album.php">
			  						<img src="assets/images/01.png" alt="">
			  					    <div style="background-image:url(assets/images/member-bg.png)">
			  							<h6>Abi Album</h6>
			  							<span>500 Followers</span>
			  					    </div>
			  					</a>
			  				</div>
			  				<div class="memberCont member07">
			  					<a href="coming-soon.php">
			  						<img src="assets/images/07.png" alt="">
			  					    <div style="background-image:url(assets/images/member-bg.png)">
			  							<h6>Continent</h6>
			  							<span>2k Followers</span>
			  					    </div>
			  					</a>
			  				</div>
			  				<div class="memberCont member08">
			  					<a href="social-album.php">
			  						<img src="assets/images/08.png" alt="">
			  					    <div style="background-image:url(assets/images/member-bg.png)">
			  							<h6>World</h6>
			  							<span>2k Followers</span>
			  					    </div>
			  					</a>
			  				</div>
			  				<div class="memberCont member09">
			  					<a href="coming-soon.php">
			  						<img src="assets/images/09.png" alt="">
			  					    <div style="background-image:url(assets/images/member-bg.png)">
			  							<h6>Community</h6>
			  							<span>2k Followers</span>
			  					    </div>
			  					</a>
			  				</div>
			  			</div>
	  				</div>
	  			</div>
	  			<div class="careerWrapper">
	  				<div class="row">
		  				<!-- <div class="col-md-4">
		  					<div class="newsWrapper" style="background-image: url(assets/images/career-bg.png);">
		  						<h5><span>MyCreet bulletin board</span></h5>
		  						<ul>
		  							<li>
		  								<a href="social-album.php">
		  									<div class="sLogo"><img src="assets/images/s-logo.png" alt=""></div>
		  									<div>
		  										<p>Lorem ipsum dolor sit amet consectetur.  Praesent aliquam sed in in sed fringilla risus</p>
		  										<span>Posted: 22 April 2023</span>
		  									</div>
		  								</a>
		  							</li>
		  							<li>
		  								<a href="social-album.php">
		  									<div class="sLogo"><img src="assets/images/s-logo.png" alt=""></div>
		  									<div>
		  										<p>Lorem ipsum dolor sit amet consectetur.  Praesent aliquam sed in in sed fringilla risus</p>
		  										<span>Posted: 22 April 2023</span>
		  									</div>
		  								</a>
		  							</li>
		  						</ul>
		  					</div>
		  				</div> -->
		  				 
		  				<div class="col-md-6 d-flex justify-content-end">
		  					<div class="newsWrapper" style="background-image: url(assets/images/career-bg.png);">
		  						<h5><span>MyCreet news</span></h5>
		  						<ul>
		  							<li>
		  								<a href="contact.php">
		  									<div class="sLogo"><img src="assets/images/s-logo.png" alt=""></div>
		  									<div>
		  										<p>What is MyCreet? A platform that allows people around the world. Create their own</p>
		  										<!-- <span>Posted: 22 April 2023</span> -->
		  									</div>
		  								</a>
		  							</li>
		  							<li>
		  								<a href="contact.php">
		  									<div class="sLogo"><img src="assets/images/s-logo.png" alt=""></div>
		  									<div>
		  										<p>Want to know how? Contact us info@mycreat.com for detail how we can help you create you own MyCreet connects from the deepest part of jungle to most advance city of worl</p>
		  										<!-- <span>Posted: 22 April 2023</span> -->
		  									</div>
		  								</a>
		  							</li>
		  						</ul>
		  					</div>
		  				</div>
	  				</div>
	  			</div>
	  		</div>
	  	</div>
  	</div>
	  
@endsection

@section('javascript')

  @if ($settings->earnings_simulator == 'on')
  <script type="text/javascript">

  function decimalFormat(nStr)
  {
    @if ($settings->decimal_format == 'dot')
     var $decimalDot = '.';
     var $decimalComma = ',';
     @else
     var $decimalDot = ',';
     var $decimalComma = '.';
     @endif

     @if ($settings->currency_position == 'left')
     var currency_symbol_left = '{{$settings->currency_symbol}}';
     var currency_symbol_right = '';
     @else
     var currency_symbol_right = '{{$settings->currency_symbol}}';
     var currency_symbol_left = '';
     @endif

      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? $decimalDot + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
          var x1 = x1.replace(rgx, '$1' + $decimalComma + '$2');
      }
      return currency_symbol_left + x1 + x2 + currency_symbol_right;
    }

    function earnAvg() {
      var fee = {{ $settings->fee_commission }};
      @if($settings->currency_code == 'JPY')
       $decimal = 0;
      @else
       $decimal = 2;
      @endif

      var monthlySubscription = parseFloat($('#rangeMonthlySubscription').val());
      var numberFollowers = parseFloat($('#rangeNumberFollowers').val());

      var estimatedFollowers = (numberFollowers * 5 / 100)
      var followersAndPrice = (estimatedFollowers * monthlySubscription);
      var percentageAvgFollowers = (followersAndPrice * fee / 100);
      var earnAvg = followersAndPrice - percentageAvgFollowers;

      return decimalFormat(earnAvg.toFixed($decimal));
    }
   $('#estimatedEarn').html(earnAvg());

   $("#rangeNumberFollowers, #rangeMonthlySubscription").on('change', function() {

     $('#estimatedEarn').html(earnAvg());

   });
  </script>
@endif

@if (session('success_verify'))
  <script type="text/javascript">

	swal({
		title: "{{ trans('general.welcome') }}",
		text: "{{ trans('users.account_validated') }}",
		type: "success",
		confirmButtonText: "{{ trans('users.ok') }}"
		});
    </script>
	 @endif

	 @if (session('error_verify'))
   <script type="text/javascript">
	swal({
		title: "{{ trans('general.error_oops') }}",
		text: "{{ trans('users.code_not_valid') }}",
		type: "error",
		confirmButtonText: "{{ trans('users.ok') }}"
		});
    </script>
	 @endif

@endsection
