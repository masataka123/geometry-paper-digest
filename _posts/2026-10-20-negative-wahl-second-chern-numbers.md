---
layout: paper
title: Negative Values of Wahl's Second Chern Number for Normal Surface Singularities
title_ja: 正規曲面特異点のWahl第二Chern数の負値と下方非有界性
authors: Rong Du
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We disprove Wahl's 1993 vanishing conjecture, open for more than thirty years, which asserts that $c_2^w(X)=0$ for every nonquotient normal surface singularity. Let $C$ be a smooth projective curve with a nontrivial involution having $r>0$ fixed points, and put $d=2g(C)-2$. If $d>r$, the union of the diagonal and the graph of the involution in $C\times C$ has negative definite intersection matrix and can be analytically contracted to a normal surface singularity $(X,o)$. A direct relative Chern-class computation and Wahl's residue formula give $c_2^w(X)=-r(d+r)/(d-r)$. An explicit curve of genus four gives $c_2^w(X)=-4$. Branched double covers of a fixed curve of genus two yield examples with $c_2^w(X_m)=-2m(m+1)$, so these values are unbounded below. We give the construction and intersection calculations in detail, as well as a line-bundle filtration realizing the negative value.
topic: algebraic-geometry
tags:
- chern-classes
- singularities
- vector-bundles-sheaves
arxiv_id: 2610.25606v1
arxiv_url: https://arxiv.org/abs/2610.25606
arxiv_submitted: '2026-10-19'
arxiv_updated: '2026-10-19'
summary: 非商正規曲面特異点のWahl第二Chern数が零になるという予想に、曲線の積から構成する反例を与える。対角線と対合のグラフの収縮により負値を計算し、その値が下に有界でないことも示す。
abstract_en: ''
summary_en: Wahl’s relative Chern invariant is tested on singularities obtained by contracting curves inside a product surface. The construction turns the calculation into explicit data of a curve and an involution. It produces nonquotient singularities with negative values, including a sequence with no uniform lower bound, contrary to the proposed vanishing statement.
abstract_ja: 著者は、Wahlが定義した局所的な第二Chern数について、非商特異点では消滅するという予想が成り立たないと示す。固定点を持つ曲線の対合から、曲線の積内の二つのグラフを収縮する構成を使い、種数と固定点数による明示公式を得る。種数4の例では値は−4となり、さらに負値が際限なく小さくなる族を構成する。
abstract_source_url: https://arxiv.org/abs/2610.25606
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.25606v1](https://arxiv.org/abs/2610.25606)
- **著者:** Rong Du
- **初回投稿日:** 2026-10-19
- **最終更新日:** 2026-10-19
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

曲面特異点の解消近傍では、通常の絶対的な第二Chern類だけでは必要な局所情報を捉えられない。Wahlは相対交点理論を使って束の第二Chern数を定め、対数余接束に適用した値が良い解消の選択によらないことを示した。

既知の重み付き斉次特異点やcusp特異点の計算を背景に、非商特異点ではこの数が零になると予想されていた。本論文は、その消滅が成立しない明示的な構成を与える。

鍵は、曲線の積の中で対角線と対合のグラフを同時に収縮することである。得られる特異点は非商で、そのWahl第二Chern数は負となる。さらに固定点数を変えることで、負値が下に有界でないことまで分かる。

## 背景と問題設定

良い解消$\pi:(U,E)\to(X,o)$の被約例外因子を$E$とする。対象は
$$
c\_2^{\mathrm W}(X):=c\_2^{\mathrm W}\bigl(\Omega\_U^1(\log E)\bigr)
$$
というWahlの相対第二Chern数であり、コンパクト曲面の通常のChern数と同一視してはいけない。その定義には、固有な生成有限引き戻し後の直線束filtrationの相対交点数の下限が使われる。

Introductionに引用された既知の計算では、重み付き斉次特異点について
$$
c\_2^{\mathrm W}(X)=-\frac1{|\pi\_1(\partial X)|}
$$
となり、linkの基本群が無限なら右辺を零と解釈する。非商重み付き斉次特異点とcusp特異点での消滅が、一般の非商正規曲面特異点での消滅予想につながった。

## 主結果

### 対合から得られる負値（Theorem 1.1）

滑らかな連結射影複素曲線$C$と非自明な対合$\sigma$を取り、
$$
r=\operatorname{card}\left(\operatorname{Fix}(\sigma)\right)>0,\qquad d=2g(C)-2>r
$$
を仮定する。$C\times C$内の対角線$\Delta\_C$とグラフ$\Gamma\_\sigma$の和は解析的に収縮でき、非商正規曲面特異点$(X,o)$を与える。この特異点について
$$
c\_2^{\mathrm W}(X)=-\frac{r(d+r)}{d-r}<0
$$
が成立する。従って非商であることは消滅を保証しない。

Introductionには、
$$
y^2=\prod\_{j=1}^{5}(x^2-j),\qquad \sigma(x,y)=(-x,y)
$$
で与えられる曲線の滑らかな射影モデルが明示される。この場合$g(C)=4$、$r=2$であり、$c\_2^{\mathrm W}(X)=-4$となる。

### 下方非有界性（Corollary 1.2）

全ての整数$m\geq1$について、非商複素解析的正規曲面特異点$(X\_m,o\_m)$で
$$
c\_2^{\mathrm W}(X\_m)=-2m(m+1)
$$
を満たすものが存在する。Abstractでは固定した種数2の曲線の分岐二重被覆を用いる族として説明される。反例が一つ存在するだけでなく、非商特異点の範囲で一様な下界も存在しないことを意味する。

## 証明の見取り図

曲線の積では通常の余接束が二つの直線束の直和に分かれるため、相対Chern数を計算しやすい。対角線と対合のグラフが負定値交点行列を持つことから収縮を行い、通常の余接束と対数余接束を比較するWahlの公式によって目的の値へ移る、という方針がIntroductionに示される。

本論文の反証対象はWahlの消滅予想であり、別の主要予想である漸近Riemann–Roch公式と区別される。著者はその公式を仮定せずに計算し、今回用いる束についてはむしろ同公式が成立すると説明している。

## 原論文との対応

- **Abstractページ:** [Negative Values of Wahl's Second Chern Number for Normal Surface Singularities](https://arxiv.org/abs/2610.25606)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.25606v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1; Corollary 1.2; Wahl Conjecture 2.12は反証対象
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.25606v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
