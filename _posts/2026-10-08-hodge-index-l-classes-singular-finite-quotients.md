---
layout: paper
title: On the conjectural Hodge index theorem for finite quotient spaces of singular varieties
title_ja: 特異多様体の有限商に対するHodge指数類予想
authors: Mohammadali Aligholi
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AT
arxiv_abstract: |-
  We study the conjectural characteristic class analogue of the Hodge index theorem for singular complex algebraic varieties, formulated by Brasselet-Sch\"urmann-Yokura which expresses the Goresky-MacPherson homology $L$-classes in terms of suitable Hodge-theoretic $L$-classes, for quotient spaces $X/G$, where $G$ is a finite group and $X$ is a pure-dimensional complex projective variety. Assuming that an equivariant $K$-theoretical version of the conjecture holds for $X$, we show that the characteristic class conjecture holds for $X/G$. Without assuming the equivariant $K$-theoretical version, we show that the characteristic class conjecture holds for $X/G$, provided that it holds for all fixed point sets $X^g$ and that a suitable normally nonsingular inclusion assumption is satisfied. Our approach is to work in equivariant analytic $K$-homology and equivariant algebraic $G$-theory and to identify the corresponding localized classes. On the analytic side, we identify the Banagl-Zagier equivariant $L$-classes with localized Chern character of the equivariant $K$-homology class of the signature operator defined by Banagl-Leichtnam-Piazza. On the algebraic side, we compute the localization of the equivariant motivic Hodge-Chern class transformation of the intersection Hodge module.
topic: algebraic-geometry
tags:
- hodge-theory
- singularities
- chern-classes
arxiv_id: 2610.09171v1
arxiv_url: https://arxiv.org/abs/2610.09171v1
arxiv_submitted: '2026-10-06'
arxiv_updated: '2026-10-06'
summary: |-
  特異射影多様体の有限商について、位相的L類とHodge理論的特性類が一致するための条件を与える。同変K理論版の予想を仮定する方法と、固定点集合での予想および正常非特異性条件を仮定する方法を区別する。鍵は署名作用素の同変Kホモロジー類と代数的局所化の比較である。
abstract_en: |-
  We study the conjectural characteristic class analogue of the Hodge index theorem for singular complex algebraic varieties, formulated by Brasselet-Sch\"urmann-Yokura which expresses the Goresky-MacPherson homology $L$-classes in terms of suitable Hodge-theoretic $L$-classes, for quotient spaces $X/G$, where $G$ is a finite group and $X$ is a pure-dimensional complex projective variety. Assuming that an equivariant $K$-theoretical version of the conjecture holds for $X$, we show that the characteristic class conjecture holds for $X/G$. Without assuming the equivariant $K$-theoretical version, we show that the characteristic class conjecture holds for $X/G$, provided that it holds for all fixed point sets $X^g$ and that a suitable normally nonsingular inclusion assumption is satisfied. Our approach is to work in equivariant analytic $K$-homology and equivariant algebraic $G$-theory and to identify the corresponding localized classes. On the analytic side, we identify the Banagl-Zagier equivariant $L$-classes with localized Chern character of the equivariant $K$-homology class of the signature operator defined by Banagl-Leichtnam-Piazza. On the algebraic side, we compute the localization of the equivariant motivic Hodge-Chern class transformation of the intersection Hodge module.
summary_en: ''
abstract_ja: |-
  特異複素代数多様体に対するHodge指数定理の特性類版は、Goresky–MacPhersonのL類と交叉Hodge加群から作るHirzebruch類の一致を予想する。本論文は有限群による商を対象とし、上の多様体で同変K理論版が成り立てば商で特性類版が成り立つことを示す。別の十分条件として、各固定点集合での特性類版と、埋め込みの同変的なnice normally nonsingular条件を用いる。解析側の署名作用素と代数側のHodge–Chern変換を固定点集合へ局所化して比較することが、両方の議論を結びつける。
abstract_source_url: https://arxiv.org/abs/2610.09171v1
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.09171v1](https://arxiv.org/abs/2610.09171v1)
- **著者:** Mohammadali Aligholi
- **初回投稿日:** 2026-10-06
- **最終更新日:** 2026-10-06
- **主分類・副分類:** math.AG（主分類）、math.AT（副分類）
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかな多様体では、署名に由来する位相的不変量とHodge理論に由来する不変量を特性類として比較できる。特異点がある場合、この一致を交叉ホモロジーと交叉Hodge加群で定式化したものがBrasselet–Schürmann–Yokuraの予想である。本論文は、有限群の作用があるときにその予想を商空間へ伝える仕組みを調べる。

主結果には二つの条件付きの経路がある。一つは、商を取る前の空間で同変K理論版の予想を仮定する経路である。もう一つは、各群要素の固定点集合で元の特性類予想を仮定し、固定点集合の埋め込みに適切な正常非特異性を課す経路である。従って任意の特異多様体について予想全体を証明したという主張ではない。

この還元を可能にするのが局所化である。位相的に定義された同変L類を、署名作用素の解析的Kホモロジー類から作る局所化Chern指標と同定する。さらに代数側でも交叉Hodge加群のHodge–Chern類を局所化し、同じ固定点集合上で比較できるようにする。

## 背景と問題設定

<p>
純次元のコンパクト複素代数多様体 $X$ に対し、比較する予想は次の等式である。
</p>

<div>
$$
L_*(X)=IT_{1*}(X).
$$
</div>

左辺はGoresky–MacPhersonのホモロジーL類、右辺は交叉Hodge加群から定めるHirzebruch類をパラメータ1で評価したものである。滑らかな場合などには既知であるが、一般の特異空間では異なる構成の類を直接比較するのが難しい。

<p>
有限群 $G$ が作用すると、商の類を各固定点集合 $X^g$ 上の局所化類の平均として表せる。IntroductionのTheorems 1.3、1.4は、この平均公式に関する先行研究の結果である。今回の新しい比較は、その平均に現れる解析側と代数側の類を結ぶ。
</p>

## 主結果

### 同変L類と局所化署名類（Theorem 1.5）

<p>
$X$ をコンパクト・向き付けられた偶数次元の三角形分割されたWitt擬多様体とし、有限群 $G$ が向きを保つ単体的写像で作用するとする。固定点集合の包含を $i:X^g\to X$ とすると、
</p>

<div>
$$
L_*(X,g)=i_*\bigl(\Psi_2(L_*^{\mathrm{an}}(X,g))\bigr),\qquad
L_*^{\mathrm{an}}(X,g)=\operatorname{Ch}([D_X^{\mathrm{sign},G}],g).
$$
</div>

<p>
右辺のChern指標は、署名作用素の同変解析的Kホモロジー類を $g$ で局所化したものから作る。$\Psi_2$ は論文の正規化に用いる作用である。この等式によって、もとの定義からは明らかでない同変L類の固定点集合への支持が具体化される。
</p>

### 同変K理論版を仮定する還元（Theorem 1.7）

<p>
$X$ は純次元の複素射影多様体、$G$ は代数的自己同型で作用する有限群とする。$X$ に対しConjecture 1.6、すなわち同変K理論で
</p>

<div>
$$
(\lambda_c^G\circ\alpha^G)\bigl([\operatorname{MHC}_1^G(IC_X^{\prime H})]\bigr)
=[D_X^{\mathrm{sign},G}]
$$
</div>

<p>
が成り立つと仮定すれば、$L_*(X/G)=IT_{1*}(X/G)$ が成り立つ。左辺の比較写像は代数的なcoherent層の理論と解析的Kホモロジーを結ぶ。仮定の等式自体はこの定理の結論ではない。
</p>

### 固定点集合からの還元（Theorem 1.8）

<p>
同じ $X,G$ について、全ての $g\in G$ で $X^g$ に特性類予想が成り立ち、包含 $X^g\hookrightarrow X$ が $\langle g\rangle$-nicely normally nonsingularであれば、商にも予想が成り立つ。
</p>

Introductionによれば、この条件は通常の位相的なnormal nonsingularityより強く、代数的・位相的法束の整合性と横断性を含む。正確な定義はDefinition 5.10に置かれており、ここでは単に「固定点集合が滑らか」などの弱い条件で代用しない。

### 代数側の局所化公式（Theorem 1.9）

<p>
$G=\langle g\rangle$ が巡回群で、上記のnice normally nonsingular条件が成り立つとする。余法束を $N_g^\vee=N_{X^g/X}^\vee$ と書くと、局所化されたHodge–Chern類は
</p>

<div>
$$
L_g\bigl(\operatorname{MHC}_1^G(IC_X^{\prime H})_g\bigr)
=\lambda_1(N_g^\vee)_g\otimes
\bigl(\lambda_{-1}(N_g^\vee)_g\bigr)^{-1}\otimes
\operatorname{MHC}_1^G(IC_{X^g}^{\prime H})_g
$$
</div>

<p>
と表される。$\lambda_{\pm1}$ は外冪から作るK理論の類であり、添字 $g$ は局所化を表す。余法束の補正因子を明示するこの公式が、固定点集合上の予想と商の予想をつなぐ。
</p>

## 証明の見取り図

解析側では署名作用素の同変Kホモロジー類を局所化し、Banagl–Zagier型のL類と同定する。代数側では交叉Hodge加群の同変Hodge–Chern変換を局所化し、比較写像とChern指標・Todd変換の可換性を用いる。

Theorem 1.7では同変K理論内の一致を仮定し、自然性と既知の平均公式を通して商へ移す。Theorem 1.8では代わりに正常非特異性の下で両局所化類を明示し、余法束の因子を比較する。二つの経路は必要な仮定が異なるが、同じ局所化の枠組みを共有する。

## 原論文との対応

- **Abstractページ:** https://arxiv.org/abs/2610.09171v1
- **Introduction:** Section 1、pp. 2–6。Abstractはp. 1。
- **主要定理:** Theorems 1.5、1.7、1.8、1.9。Conjectures 1.1、1.2、1.6と先行研究のTheorems 1.3、1.4を区別した。
- **論文構成:** Sections 3–4に比較と解析側、Section 5に局所化公式、Section 6に商空間への応用を配置する。
- **確認バージョン:** v1。後続の証明やDefinition 5.10の全条件を新たに再構成していない。
- **確認ライセンス:** CC BY 4.0。
- **source_scope:** Abstract and Introduction
