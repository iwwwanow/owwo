<script>
  import BaseLayout from "../layouts/base.layout.svelte";
</script>

<BaseLayout>
  <div class="grid">
    <h4>
      TODO если элементы со страницы кончились, предлагать перейти на следующую
      страницу
    </h4>
    <h4>
      TODO ДЕЛАЙ ФИКСИРОВАННУЮ ШИРИНУ КАРТОЧЕК. Это сильно упростит верстку,
      потом ты сможешь с ней побаловаться
    </h4>
  </div>

  <div class="element-content">
    <h1>element on the center of the page</h1>
    <h3>CENTER OF THE SCREEN</h3>
    <h3>full screen mode button</h3>
    <h3>w100, 100vh-min</h3>
  </div>

  <div class="grid">
    <span>
      <h5>element-text html (markdown in db)</h5>
      <h5>root page</h5>
      <h5>other pages???</h5>
    </span>
    <h5>username + dates</h5>
  </div>

  <div class="grid">
    <h5>BACK ASCII ICON</h5>
    <h5>PREV-ELEMENT-COVER</h5>
    <h5>ОПИСАНИЕ "ЭЛЕМЕНТА"</h5>
    <h5>СЛЕДУЮЩИЙ ЭЛЕМЕНТ</h5>
    <h5>NEXT-ELEMENT-COVER</h5>
    <h5>NEXT ASCII ICON</h5>
  </div>

  <div class="grid">
    <h5>TODO Зависит от количества колонок в сетке (от разрешения)</h5>
    <h5>TODO одна строчка</h5>
    <h5>RANDOM USER ELEMENTS</h5>
  </div>

  <div class="grid">
    <h5>OWWO RANDOM ELEMENTS</h5>
    <h5>RANDOM VERTICAL ELEMENT CARD FROM OWWO</h5>
    <h5>RANDOM SQUARE ELEMENT CARD FROM OWWO</h5>
    <h5>RANDOM HORIZONTAL ELEMENT CARD FROM OWWO</h5>
    <h5>RANDOM VERTICAL ELEMENT CARD FROM OWWO</h5>
    <h5>RANDOM SQUARE ELEMENT CARD FROM OWWO</h5>
    <h5>RANDOM HORIZONTAL ELEMENT CARD FROM OWWO</h5>
    <h5>RANDOM VERTICAL ELEMENT CARD FROM OWWO</h5>
    <h5>RANDOM SQUARE ELEMENT CARD FROM OWWO</h5>
    <h5>RANDOM HORIZONTAL ELEMENT CARD FROM OWWO</h5>
  </div>

  <h1>HEADER, WO FOOTER</h1>
</BaseLayout>

<style>
  .element-content {
    width: 100%;
  }
</style>
