---
layout: paper
title: Fano 4-folds with $b_2>12$ are products of surfaces
title_ja: 第二Betti数が12を超えるFano四次元多様体の積構造
authors: Cinzia Casagrande
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: 'Let X be a smooth, complex Fano 4-fold, and rho(X) its Picard number. We show that if rho(X)>12, then X is a product of del Pezzo surfaces. The proof relies on a careful study of divisorial elementary contractions f: X->Y such that the image S of the exceptional divisor is a surface, together with the author''s previous work on Fano 4-folds. In particular, given f: X->Y as above, under suitable assumptions we show that S is a smooth del Pezzo surface with -K_S given by the restriction of -K_Y.'
topic: algebraic-geometry
tags:
- fano-varieties
- birational-geometry
- minimal-model-program
arxiv_id: 2301.11953v2
arxiv_url: https://arxiv.org/abs/2301.11953v2
arxiv_submitted: '2023-01-27'
arxiv_updated: '2024-01-12'
summary: 滑らかな複素Fano四次元多様体は、Picard数が12を超えると二つのdel Pezzo曲面の積になることを示す。例外因子を曲面へ縮約する素収縮を解析し、収縮先の曲面をdel Pezzoと認識することでPicard数の上界へ結び付ける。
abstract_en: 'Let X be a smooth, complex Fano 4-fold, and rho(X) its Picard number. We show that if rho(X)>12, then X is a product of del Pezzo surfaces. The proof relies on a careful study of divisorial elementary contractions f: X->Y such that the image S of the exceptional divisor is a surface, together with the author''s previous work on Fano 4-folds. In particular, given f: X->Y as above, under suitable assumptions we show that S is a smooth del Pezzo surface with -K_S given by the restriction of -K_Y.'
summary_en: ''
abstract_ja: 滑らかな複素Fano四次元多様体のPicard数が12を超えるなら、それはdel Pezzo曲面の積である。証明は例外因子の像が曲面となる素因子的収縮の精密な研究と、著者の従来のFano四次元多様体の結果に基づく。特に適切な仮定のもとで、収縮先の曲面が滑らかなdel Pezzo曲面であり、その反標準類が収縮先多様体の反標準類の制限であることを示す。積の分類から、すべての滑らかなFano四次元多様体のPicard数は18以下となる。
abstract_source_url: https://arxiv.org/abs/2301.11953v2
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2301.11953v2](https://arxiv.org/abs/2301.11953v2)
- **著者:** Cinzia Casagrande
- **初回投稿日:** 2023-01-27
- **最終更新日:** 2024-01-12
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Fano多様体のPicard数は、数値的に独立な因子類の数を表す。四次元では全分類が難しい一方、Picard数が大きいと幾何が強く制限される。本論文は12を超える範囲で、滑らかな複素Fano四次元多様体が二つのdel Pezzo曲面の積に限られることを示す。

その帰結としてPicard数の普遍的な上界18を得る。主結果の境界12が最良であるとは主張されていない。この版のIntroductionによれば、曲面の積でない既知の例はPicard数9以下であり、その間の可能性は別の問題として残る。

証明の中心は、三次元の例外因子を曲面へ写す型$(3,2)$の素収縮である。収縮先の曲面は初めから滑らかとは限らないが、複数の収縮の交わりを調べることでdel Pezzo曲面として認識する。この曲面上の曲線類の制限が、全空間のPicard数の上界へ伝わる。

## 背景と問題設定

$X$を滑らかな複素Fano四次元多様体とし、$\rho\_X$をPicard数とする。この場合$\rho\_X=b\_2(X)$である。連結ファイバーを持つ全射$f:X\to Y$が素収縮であるとは$\rho\_X-\rho\_Y=1$という意味であり、型$(3,2)$とは例外因子$E$の像$S=f(E)$が曲面である因子的素収縮をいう。

閉部分集合$Z\subset X$に対し、$N\_1(Z,X)$は$Z$内の曲線の数値類が$N\_1(X)$に張る部分空間である。論文は

$$
\delta\_X=\max\_{D\subset X\text{ 素因子}}\operatorname{codim}N\_1(D,X)
$$

というLefschetz defectを使い、因子内の曲線が全体の曲線類をどこまで捉えるかを測る。$\delta\_X\geq3$の場合の既知の分類を除けば、すべての素因子について余次元は高々2となる。

## 主結果

### 大きなPicard数からの積分解（Theorem 1.1）

主定理は

$$
\rho\_X>12\quad\Longrightarrow\quad X\cong S\_1\times S\_2,
\qquad S\_i\text{ はdel Pezzo曲面}
$$

という分類である。仮定は滑らかさ、複素数体上、Fano性、次元4であり、特異Fano多様体や一般次元への無条件の主張ではない。数値的不変量の大きさから具体的な積構造を復元する点に意味がある。

### Picard数の普遍的上界（Corollary 1.2）

すべての滑らかなFano四次元多様体について

$$
\rho\_X\leq18
$$

が成り立つ。実際、$\rho\_X\leq12$なら明らかであり、それを超えると主定理を適用して

$$
\rho\_{S\_1\times S\_2}=\rho\_{S\_1}+\rho\_{S\_2}\leq9+9=18
$$

を得る。Introductionは三次元でPicard数が5を超えるとdel Pezzo曲面と$\mathbb P^1$の積になるMori–Mukaiの既知の結果を比較対象として挙げるが、これは本論文の新定理ではない。

### 収縮先の曲面を認識する中核結果

Introductionは、型$(3,2)$の収縮$f:X\to Y$に対し、$\dim N\_1(E,X)\geq4$と、他の三つの型$(3,2)$の収縮の例外因子・収縮曲線の特定の交点条件を課すと、$S=f(E)$が滑らかなdel Pezzo曲面となり

$$
-K\_S=(-K\_Y)|\_S
$$

を満たすと説明する（Propositions 3.8, 3.10）。この同定は任意の型$(3,2)$収縮で無条件に成り立つわけではない。追加条件を満たす収縮を、主定理の残された場合に実際に用意することが必要となる。

## 証明の見取り図

$S$の最小特異点解消$\mu:S'\to S$を取り、$L=\mu^\ast ((-K\_Y)|\_S)$と置く。まず$K\_{S'}+L$の半豊富性を示す。他の収縮の例外因子との交わりから、$S'$上の三つの$(-1)$曲線$C\_i'$を構成し

$$
(K\_{S'}+L)\cdot C\_i'=0
$$

を得る。これらの交わり方により、$K\_{S'}+L$が定める収縮は双有理でも曲線への収縮でもなく、$K\_{S'}+L\equiv0$へ至る。さらに双対化層を比較して$S$の滑らかさとdel Pezzo性を結論する。

全空間の議論では、既知のLefschetz defectの分類により$\delta\_X\leq2$へ帰着する。ファイバー型や例外因子の像が1次元以下の収縮、小収縮が存在する場合は、Introductionで説明される既知の結果や補題で上界を得る。残るすべての素収縮が型$(3,2)$の場合に、上の曲面の解析を適用する。

$\rho\_X\geq8$の残された場合に$S$がdel Pezzoと分かれば

$$
\dim N\_1(E,X)=\dim N\_1(S,Y)+1\leq10,
\qquad\rho\_X\leq10+2=12
$$

となる。これが、曲面の積でない場合の上界を与える論理である。Section 2で準備、Section 3で収縮の解析、Section 4で主定理の証明を行う構成であり、この記事はそのIntroductionの説明に基づく。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2301.11953v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/2301.11953v2) — Section 1, pp. 1–4（§1.1の記号説明の直前まで）; requested\_version v2
- **Introduction中で言及された主要結果:** Theorem 1.1, Corollary 1.2; Theorems 1.3–1.6は引用される既知の結果
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2301.11953v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
