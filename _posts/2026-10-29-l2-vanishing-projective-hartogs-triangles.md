---
layout: paper
title: Vanishing theorems for $L^2$ Dolbeault cohomology groups of projective Hartogs triangles
title_ja: 射影Hartogs三角形のL2 Dolbeaultコホモロジーの消滅
authors: Jian Chen
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: In this note, using J.-P. Demailly's $L^2$ existence theorem for possibly incomplete K\"ahler metrics, we establish $L^2$ estimates and vanishing theorems for a class of domains in $\mathbb P^n$ without any boundary regularity assumptions. In particular, we give an affirmative answer to M.-C. Shaw's question concerning the vanishing of the $L^2$ Dolbeault cohomology groups of projective Hartogs triangles.
topic: several-complex-variables
tags:
- l2-methods
- curvature
- stein-geometry
arxiv_id: 2610.37572v1
arxiv_url: https://arxiv.org/abs/2610.37572
arxiv_submitted: '2026-10-27'
arxiv_updated: '2026-10-27'
summary: 境界の滑らかさを仮定せず、射影空間の領域上でFubini–Study計量に関するL2 Dolbeaultコホモロジーの消滅を示す。射影Hartogs三角形のShawの問題に答え、消滅する正則次数の範囲が最良であることも示す。
abstract_en: ''
summary_en: The paper concerns square-integrable Dolbeault cohomology measured by the ambient projective metric on domains with potentially singular boundaries. A bounded plurisubharmonic weight supplies the positive curvature needed for a boundary-independent existence theorem. This yields a solution estimate on projective Hartogs triangles and settles the stated vanishing question. An injection from a Bergman space shows that the allowed range of holomorphic degrees cannot in general be enlarged.
abstract_ja: 射影空間内の領域に制限したFubini–Study計量は非完備でもよいとし、DemaillyのL2存在定理によってDolbeaultコホモロジーの消滅を導く。補助的な完備Kähler計量の存在と、有界な多重劣調和重みの正のLevi方向を仮定し、境界の正則性を要求しない。射影Hartogs三角形では(1,q)次数の消滅を示し、Bergman空間からの単射により一般の次数範囲の最良性を確認する。
abstract_source_url: https://arxiv.org/abs/2610.37572
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.37572v1](https://arxiv.org/abs/2610.37572)
- **著者:** Jian Chen
- **初回投稿日:** 2026-10-27
- **最終更新日:** 2026-10-27
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射影Hartogs三角形はStein領域であるが、射影空間から制限したFubini–Study計量は完備ではなく、境界にはLipschitzですらない点がある。このため、滑らかな境界やLipschitz境界を使う既存の$L^2$消滅定理をそのまま適用することはできない。

本論文は、境界の正則性を要求しないDemaillyの存在定理を用いる。領域が別の完備Kähler計量を持つことと、有界な多重劣調和関数に一様に正のLevi方向があることを組み合わせ、もとのFubini–Study計量に関する解の評価を得る。

射影Hartogs三角形では一つの正のLevi方向だけで$(1,q)$次数の消滅が導かれ、Shawの問題に肯定的に答える。さらに、次数を一つ上げると無限次元のコホモロジーが現れる例を与え、消滅範囲の制約が不可欠であることを示す。

## 背景と問題設定

正規化した計量は$\omega\_{\mathrm{FS}}=\sqrt{-1}\partial\bar\partial\log(1+|\zeta|^2)$である。$\bar\partial$は分布の意味で定義する最大実現を用い、$H^{p,q}\_{(2)}$はその核を像で割った商である。像の閉包で割る定義ではない。

射影Hartogs三角形は

$$
H\_n^+=\lbrace [Z\_0:\cdots:Z\_n]\in\mathbb P^n:|Z\_{n-1}|<|Z\_n|\rbrace ,\qquad H\_n^+\simeq\mathbb C^{n-1}\times\mathbb D
$$

であり、逆の不等号による$H\_n^-$も同様である。Stein性から補助的な完備計量は得られるが、調べる$L^2$ノルムはあくまで制限されたFubini–Study計量による。

## 主結果

### 境界条件なしの消滅と解の評価（Theorem 1.2）

$\Omega\subset\mathbb P^n$、$n\geq2$が完備Kähler計量を持つとする。有界な滑らかな多重劣調和関数$\varphi$があり、そのLevi固有値を$\lambda\_1\geq\cdots\geq\lambda\_n\geq0$とすると、ある$1\leq r\leq n$と$a>0$について$\lambda\_j\geq a$が$j\leq r$で一様に成立すると仮定する。

このとき$1\leq p\leq r$、$1\leq q\leq n$の任意の$\bar\partial$閉な$L^2$形式$f$には$\bar\partial u=f$となる解があり、

$$
\Vert u\Vert ^2\leq\frac{n+1-p+a}{qa(r-p+1)}\exp\bigl(\sup\_\Omega\varphi-\inf\_\Omega\varphi\bigr)\Vert f\Vert ^2
$$

を満たす。従って$H^{p,q}\_{(2)}(\Omega)=0$である。ここでノルムもLevi固有値も$\omega\_{\mathrm{FS}}$に関して測る。

### 有界方向とHartogs三角形（Corollaries 1.3、1.4）

標準アフィン座標$\mathbb C\_z^{n-r}\times\mathbb C\_w^r$内の擬凸領域で$|w|<R$なら、同じ次数範囲で

$$
\Vert u\Vert ^2\leq\frac{n+2-p}{q(r-p+1)}e^{R^2}\Vert f\Vert ^2
$$

となる。$H\_n^+$では$r=1$として

$$
H^{1,q}\_{(2)}(H\_n^+)=0,\qquad \Vert u\Vert ^2\leq\frac{(n+1)e}{q}\Vert f\Vert ^2\quad(1\leq q\leq n)
$$

を得る。特に$n=2$、$(p,q)=(1,1)$のHausdorff性と消滅を問うShawの問題が解決される。

### 次数範囲の最良性（Theorem 1.5）

$1\leq r<n$とし、$\mathbb C^{n-r}\times\mathbb D^r$を$\mathbb P^n$の領域として計量を制限する。このときEuclid計量に関するBergman空間からの単射

$$
A^2(\mathbb D^r)\longrightarrow H^{r+1,1}\_{(2)}(\mathbb C^{n-r}\times\mathbb D^r),\qquad h\longmapsto[h(w)\omega\_{n-r}(z)\wedge dw\_1\wedge\cdots\wedge dw\_r]
$$

がある。ここで$\omega\_{n-r}=\sqrt{-1}\partial\bar\partial\log(1+|z|^2)$である。従って右辺は無限次元であり、一般には$p\leq r$を広げられない。積計量でのKünneth公式による結果とは計量が異なることに注意が必要である。

## 証明の見取り図

$(p,q)$形式を$K\_{\mathbb P^n}^{-1}\otimes\Omega\_{\mathbb P^n}^p$に値を持つ$(n,q)$形式とみなす。元の束の曲率はNakano半正値にとどまるが、有界な重みの正のLevi方向を使って一様な正値性を得る。Demaillyの定理を適用し、重みの有界性で非加重ノルムへ戻す。非消滅側では上の具体的な形式からBergman空間を埋め込み、解の存在を妨げる方向を示す。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.37572)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.37572v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorem 1.2、Corollaries 1.3、1.4、Theorem 1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.37572v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
