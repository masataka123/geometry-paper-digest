---
layout: paper
title: Seshadri functions on surfaces
title_ja: 曲面上のSeshadri関数の微分可能性と最大性領域
authors: Cyril J. Jacob
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We study the Seshadri function on the ample cone of a smooth complex projective surface at a fixed point. At a submaximal class, we show that the function is differentiable if and only if there is a unique Seshadri curve. At a maximal class $L$, differentiability is equivalent to every curve $C$ computing the Seshadri constant satisfying $\frac{[C]}{{\rm mult}_x C}=\frac{[L]}{\sqrt{L^{2}}}$. We also prove that the non-differentiability locus is nowhere dense. For the blow-up of $\mathbb P^{2}$ at $r\ge 9$ very general points, assuming the $(-1)$-curves conjecture for the blow-up at $r+1$ very general points, we construct a non-empty open subset of the ample cone on which the Seshadri function at a very general point equals $\sqrt{L^{2}}$. Consequently, this function is not piecewise linear. Under the assumption of the Strong SHGH conjecture, we obtain a common non-empty open subset on which maximality holds at every point when $r\ge36$.
topic: algebraic-geometry
tags:
- positivity
- birational-geometry
arxiv_id: 2611.01138v1
arxiv_url: https://arxiv.org/abs/2611.01138
arxiv_submitted: '2026-10-31'
arxiv_updated: '2026-10-31'
summary: 曲面の豊富錐上でSeshadri定数を関数として捉え、その微分可能性を値を計算する曲線で特徴づける。非微分可能点は疎であり、平面の非常に一般の点での爆発についてはSHGH型予想を仮定して最大値を取る開領域を構成する。
abstract_en: ''
summary_en: The paper relates local positivity on a surface to the regularity of a function on its ample cone. Curves attaining the Seshadri constant provide precise differentiability tests. A topological result strengthens almost-everywhere differentiability by ruling out a dense exceptional locus. For blow-ups of the plane, conjectural control of negative curves produces open regions where the upper quadratic bound is attained.
abstract_ja: 滑らかな複素射影曲面の一点を固定したSeshadri関数について、最大値未満の類ではSeshadri曲線の一意性が微分可能性と同値になる。最大値を取る類では、それを計算するすべての曲線の正規化された数値類が指定の類に一致することが同値条件となる。非微分可能な類の集合は豊富錐でnowhere denseである。平面の多点爆発では、SHGH型の予想のもとで最大性を満たす非空開集合と無理数のSeshadri定数を得る。
abstract_source_url: https://arxiv.org/abs/2611.01138
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.01138v1](https://arxiv.org/abs/2611.01138)
- **著者:** Cyril J. Jacob
- **初回投稿日:** 2026-10-31
- **最終更新日:** 2026-10-31
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Seshadri定数は、線束が一点の近くでどの程度正であるかを測る。点を固定して線束の数値類を動かすと、豊富錐上の関数となる。本論文はそのグラフの滑らかさと、定数を計算する曲線の関係を調べる。

最大値に達しない類では、関数が微分可能であることはSeshadri曲線が一意であることと同値になる。最大値に達する場合には、交点形式に由来する別の数値条件が現れる。非微分可能点の集合は測度零であるだけでなく、nowhere denseである。

平面の非常に一般の多点での爆発については、SHGH型予想を仮定して最大性領域に内部があることを示す。この部分は条件付きの結果であり、予想を無条件に証明したものではない。

## 背景と問題設定

$X$ を滑らかな複素射影曲面、$x\in X$ とする。nefな実数値類 $L$ のSeshadri定数は

$$
\varepsilon(X,L,x)=\inf\_{C\ni x}\frac{L\cdot C}{\operatorname{mult}\_xC},
\qquad 0\leq\varepsilon(X,L,x)\leq\sqrt{L^2}
$$

である。下限は $x$ を通る被約既約曲線にわたる。下限を達成する曲線をSeshadri曲線と呼び、上界に等しい類をmaximal、厳密に小さい類をsubmaximalと呼ぶ。

$\varepsilon\_x(L)=\varepsilon(X,L,x)$ は線形関数の下限として現れる。他方、最大性の上界は交点形式の平方根であり、曲線による線形的な記述と二次形式の幾何が交差する。

## 主結果

### 微分可能性を決める曲線

submaximalな豊富類では、$\varepsilon\_x$ が微分可能であることとSeshadri曲線が一意であることは同値である。maximalな豊富類 $L$ では、値を計算するすべての曲線 $C$ が

$$
\frac{[C]}{\operatorname{mult}\_x C}=\frac{[L]}{\sqrt{L^2}}
$$

を満たすことが微分可能性と同値になる。特に、どの曲線も値を計算しないmaximalな類では微分可能である。序論はこの判定を説明するが、その段落には独立の定理番号を付けていない。

### 非微分可能集合の疎性（Theorem 1.2）

任意の点 $x$ に対して

$$
N\_x=\lbrace L\in\operatorname{Amp}\_{\mathbb R}(X):\varepsilon\_x\text{ が }L\text{ で微分可能でない}\rbrace
$$

は豊富錐でnowhere denseである。すなわちその閉包は内部を持たない。局所Lipschitz性から得るほとんど至る所の微分可能性だけでは、この位相的結論は従わない。

### 平面爆発上の最大性領域（Theorem 1.3）

$X\_r$ を $\mathbb P^2$ の非常に一般の $r\geq9$ 点での爆発とする。$X\_{r+1}$ について論文のConjecture 2.9を仮定する。Abstractではこれを $(-1)$-曲線の予想、序論ではWeak SHGHの仮定として説明している。

このとき非常に一般の点 $x\in X\_r$ に対し、非空開集合 $U\_x\subset\operatorname{Amp}\_{\mathbb R}(X\_r)$ が存在して

$$
\varepsilon(X\_r,L,x)=\sqrt{L^2}\quad(L\in U\_x)
$$

となる。従って関数は区分線形ではない。$U\_x$ はSeshadri定数が無理数となる整豊富線束の数値類も含む。

### すべての点に共通する領域

序論はさらに、$r\geq36$ かつ $X\_r$ に対するStrong SHGH予想のもとで、すべての $x\in X\_r$ に対して同時に上の等式を満たす非空開集合 $U$ を得ると述べる。非常に一般の一点についての結論から、全点で共通の領域への強化である。

## 証明の見取り図

豊富錐上で関数の凹性と局所Lipschitz性を示し、値を達成する曲線の線形寄与から微分可能性を調べる。最大な類では上界の微分と曲線の寄与を比較する必要がある。

平面爆発の部分では、負曲線の制御に関する予想を用いて、Seshadri定数が上界より小さくなる障害を除く。序論は構成により、互いに比例しない無限個の整豊富類で無理数の定数も得ると説明する。後続節の具体的構成や証明全体はここでは検証していない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.01138)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.01138v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Definition 1.1; Theorems 1.2, 1.3; Introductionの微分可能性判定とStrong SHGH下の結果
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.01138v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
