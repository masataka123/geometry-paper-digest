---
layout: paper
title: On constructibility of klt type varieties and simple $D$-module
title_ja: klt型の族と微分作用素加群の単純性
authors: Donghyeon Kim
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  In this paper, we prove that the combination of dense klt type and $\mathcal{D}$-simplicity property establishes the klt type property. The result paves the way to connect the theory of algebraic differential operators with the area of birational geometry.
topic: algebraic-geometry
tags:
- singularities
- birational-geometry
- moduli
- multiplier-ideals-extension
arxiv_id: 2610.08334v1
arxiv_url: https://arxiv.org/abs/2610.08334v1
arxiv_submitted: '2026-10-06'
arxiv_updated: '2026-10-06'
summary: |-
  正規多様体のアフィン族で、稠密な閉ファイバーがklt型であるときに幾何学的一般ファイバーもklt型になるかを扱う。その構造層が微分作用素の層に関して単純であるという追加仮定の下で、これを示す。ファイバー上の境界を全空間へ持ち上げる難しさを、一様な特異性の評価によって回避する結果である。
abstract_en: |-
  In this paper, we prove that the combination of dense klt type and $\mathcal{D}$-simplicity property establishes the klt type property. The result paves the way to connect the theory of algebraic differential operators with the area of birational geometry.
summary_en: ''
abstract_ja: |-
  klt型の特異点が族の中でどのように振る舞うかという双有理幾何の問題に、代数的微分作用素を用いて取り組む。稠密な閉ファイバーがklt型であり、幾何学的一般ファイバーの構造層が微分作用素加群として単純なら、その幾何学的一般ファイバーはklt型になると証明する。二つの既存予想に現れる条件を組み合わせた定理であり、それぞれの予想全体を解決したという主張ではない。
abstract_source_url: https://arxiv.org/abs/2610.08334v1
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.08334v1](https://arxiv.org/abs/2610.08334v1)
- **著者:** Donghyeon Kim
- **初回投稿日:** 2026-10-06
- **最終更新日:** 2026-10-06
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

klt型は、$K_X$ 自体が $\mathbf Q$-Cartierでない場合にも、適切な有効境界を補うことでklt対を得られるという考え方である。本論文は、この性質をもつ閉ファイバーが族の中に稠密に存在するとき、幾何学的一般ファイバーにも同じ性質が現れるかを調べる。

主定理は、幾何学的一般ファイバーの構造層が、その上の代数的微分作用素の層に関して単純である場合に肯定的な結論を与える。ここで稠密なklt型ファイバーの存在と微分作用素加群の単純性は、ともに必要な仮定として課されている。

従来の難しさは、個々のファイバーをkltにする境界因子を全空間へ単純には持ち上げられないことである。Introductionの証明方針は、微分作用素から特異性を測る閾値の一様下限を引き出し、この持ち上げを直接行わずに一般ファイバーのklt型性へ進むというものである。

## 背景と問題設定

通常のklt条件には対数標準因子の $\mathbf Q$-Cartier性が含まれる。klt型は、ある有効 $\mathbf Q$-Weil境界 $\Delta$ を選んで $(X,\Delta)$ をkltにできるという、境界の選択も含めた性質である。そのため、通常のklt条件の構成可能性からklt型の族での振る舞いを直ちに導くことはできない。

IntroductionのConjecture 1.1は、正規多様体のアフィン族 $X\to S$ のZariski稠密な閉点でファイバーがklt型なら、幾何学的一般ファイバーもklt型であると予想する。Conjecture 1.2はMalloryの予想で、lc型のアフィン多様体について、構造層の $\mathcal D_X$-単純性からklt型性を予想する。本論文は前者の族の条件と後者の微分作用素の条件を結び付ける。

## 主結果

### 主定理：幾何学的一般ファイバーのklt型性（Theorem 1.3）

定理の結論は $X_{\bar\eta}$ がklt型になることである。$X\to S$ は正規多様体のアフィン族、$\eta$ は $S$ の一般点、$\bar\eta$ はその幾何学的点とする。さらに、Zariski稠密な閉点集合 $S'\subseteq S$ に対してすべての $X_s$ がklt型であり、

<div>
$$
\mathcal O_{X_{\bar\eta}}
\text{ は }\mathcal D_{X_{\bar\eta}}\text{-単純}
$$
</div>

であると仮定する。このとき、幾何学的一般ファイバー上で有効境界を選び、klt対を作ることができる。

$\mathcal D$-単純性は、構造層を微分作用素で作用させた加群として見たときに、非自明な部分加群がないという条件である。双有理幾何の特異点の存在条件に、微分作用素の作用による制約を加えることが定理の新しい接点となる。

この定理から、追加条件を課さないConjecture 1.1や、稠密なklt型ファイバーを仮定しないConjecture 1.2がそのまま従うわけではない。タイトルの構成可能性に関する一般問題に対し、二種類の条件を併用した場合を解決する結果である。

## 証明の見取り図

Introductionでは、反標準因子と $\mathbf Q$-線形同値な有効因子に関する、de Fernex–Hacon型の対数標準閾値を利用する。これはアフィンな設定でTianの $\alpha$-不変量に似た役割を果たす量であり、ファイバーに一様な正の下限が得られれば、Lazarsfeldの議論を通じて幾何学的一般ファイバーのklt型性に到達する。

微分作用素加群の単純性は、対象となる局所的なデータを $1$ に送る微分作用素 $P$ を得るために使われる。著者はXu–Zhuangの議論を適用し、Introductionで述べられる $1/\operatorname{ord}P$ 型の下限を閾値評価へつなげる。重要なのは、そこで用いる補助定数が閉点 $s$ に依存しないことである。

各ファイバーで選んだ境界そのものを全空間に持ち上げる代わりに、その特異性を一様に抑える量を運ぶ。このために、微分作用素の理論が双有理幾何の族の問題に働く。Introductionは証明の概略を述べるにとどまるため、局所関数の取り方や閾値の形式的定義の詳細を補ってはいない。

## 原論文との対応

- **確認箇所:** Abstract、Introduction（PDF 1–2頁、Section 2の前まで）。
- **主結果:** Theorem 1.3。比較対象のConjectures 1.1、1.2は予想として区別した。
- **記法:** 主定理の対象は $X_\eta$ ではなく幾何学的一般ファイバー $X_{\bar\eta}$ であることをPDFで確認した。
- **証明方針:** Introductionにある閾値の一様評価と微分作用素の役割を要約した。後続の補題や証明は検証していない。
- **確認ライセンス:** CC BY 4.0。
- **source_scope:** Abstract and Introduction。
