	$(document).ready(function() {
		$('.slider').slick({
			arrows: true, //показывает стрелки или нет
			dots: false, //показывает точки или нет
			adaptiveHeight: true,  //адаптивная высота оболочки под высоты слайда
			slidesToShow: 4, //количество показывающих слайдов
			slidesToScroll: 1, //прокрутка за один раз слайдов
			speed: 500, //скорость прокрутки в миллисекундах
			cssEase: 'linear', // тип CSS анимации 
			infinite: false, //будет ли слайд бесконечно прокручиваться (повторяться)
			initialSlide: 0, //стартовый слайд
			autoplay: false, //автопрокрутка
			autoplaySpeed: 1000, //скорость автопрокрутки в миллисекундах
			pauseOnFocus: true, //пауза при автопрокрутке при фокусе слайда
			pauseOnHover: true, //пауза при автопрокрутке при ховере слайда
			pauseOnDotsHover: true, //пауза при автопрокрутке при ховере точки
			draggable: true, // перелистовать с помощью мыши и зажатой кнопки
			swipe: true, //перелистовать плавно пальцем на телефоне
			tuchThreshold: 5, // на сколько частей делится слайд и сколько надо прослайдить, чтобы перейти на следующий слайд
			touchMove: true, //плавное движение слайдов при перелистывании мышкой или пальцем
			waitForAnimate: true, //при кликанье на стрелку не запускается новая прокрутка пока не выполнится предыдущая (быстро кликать на стрелку, а скорость прокрутки постоянная)
			centerMode: false, //главный слайд становится по центру и на него навешивается дополнительный класс, с помощью которого можно стилизовать центральный слайд (сделать непрозрачным, увеличенным и т.д.)
			variableWidth: false, //скрывает расстояние между слайдами и при изменении размеров экрана всегда обрезает правый край слайдов
			rows: 1, //количество рядов в слайдере
			slidesPerRow: 1, //количество сладов в рядах
			vertical: false, //вертикальные слайды (горизонтальный слайдер работает корректнее)
			verticalSwiping: false, //вертикальная прокрутка слайдов
			asNavFor: ".sliderbig",//связывает два слайдера, чтоб синхронно прокручивались
			responsive:[ //(адаптивность) позволяет менять свойства слайдера в зависимости от брейкпоинта (ширины) экрана
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3 //любое свойство можно менять
				}
			},{
				breakpoint: 800,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 440,
				settings: {
					slidesToShow: 1
				}
			}
			],
			mobileFirst: false, // меняет значение breakpoint с max-width на min-width
			//appendArrows: $(".className"), //перемещает стрелки в указанный блок с классом className
			//appendDots: $(".className"), //перемещает точки в указанный блок с классом className


		});	


		$('.sliderbig').slick({
			arrows: false, //показывает стрелки или нет
			dots: false, //показывает точки или нет
			fade: true, //при смене слайдов, они не листаются, а заменяются (используют для автослайдера)
			asNavFor: ".slider",//связывает два слайдера, чтоб синхронно прокручивались			//связывает два слайдера (сверху покрупнее или видоизмененнее)

		});	

//события, вызов слайда
		// Выводит в консоль номер предыдущего перед активным слайда  
		$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			//console.log(currentSlide);
		});

		// Выводит в консоль номер следуещего после активного слайда  
		$('.slider').on('afterChange', function(event, slick, currentSlide){
			//console.log(currentSlide);
		});
//методы
		$('.slider').slick('setPosition'); //метод для перезагрузки (встряхивания) слайдера, если вдпуг что-то не так с размерами и т.д.

		$('.slider').slick('goTo', 0); //метод для перехода на конкретный слайд
		$('.slider').slick('slickPrev'); //метод для перехода на предыдущий слайд
		$('.slider').slick('slickNext'); //метод для перехода на следующий слайд


		$('.link_l').click(function(event){
			$('.slider').slick('slickPrev');
		}) //Пример использования, при клике на ссылку слайдер влево

		$('.link_r').click(function(event){
			$('.slider').slick('slickТуче');
		}) //Пример использования, при клике на ссылку слайдер вправо

		$('.link').click(function(event){
			$('.slider').slick('goTo', 3);
		}) //Пример использования, при клике на ссылку переход на 3-ий слайд

		$('.link__play').click(function(event){
			$('.slider').slick('slickPlay');
		}) //Пример использования, при клике на ссылку автоплей слайдов

		$('.link__pause').click(function(event){
			$('.slider').slick('slickPause');
		}) //Пример использования, при клике на ссылку стоп автоплея слайдов

		$('.link__add').click(function(event){
			$('.slider').slick('slickAdd','<div class="newslide">123</div>');
			return false;
		}) //Пример использования, при клике на ссылку добавить слайд в слайдер

		$('.link__remove').click(function(event){
			$('.slider').slick('slickRemove',0);
			return false;
		}) //Пример использования, при клике на ссылку удалить слайд из слайдера по номеру

		//Фильтрование, вывести 2-й и 4-й элементы
		var filtered = false;

		$('.link__filter').on('click', function(){
			if (filtered === false) {
				$('.slider').slick('slickFilter','.filter');
				$(this).text('Убрать фильтр');
				filtered = true;
			} else {
				$('.slider').slick('slickUnfilter');
				$(this).text('Фильтровать');
				filtered = false;
			}
			return false;
		});

//Получить значение количество активных слайдов
var s=$('.slider').slick('slickGetOption', 'slidesToShow');
console.log (s);

//Переназначим количество активных слайдов
//var s=$('.slider').slick('slickSetOption', 'slidesToShow', 2);

//$('.slider').slick('unslick');  //Отключить плагин

	})