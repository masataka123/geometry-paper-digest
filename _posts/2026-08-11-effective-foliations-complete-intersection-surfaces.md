---
layout: paper
title: "Effective Results about Foliations on Smooth Projective Complete Intersection Surfaces"
title_ja: "滑らかな射影完全交叉曲面上の葉層に対する有効結果"
authors: "Jorge Olivares, Daniel Posada-Buriticá"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2608.09877v1"
arxiv_url: "https://arxiv.org/abs/2608.09877"
arxiv_submitted: "2026-08-10"
arxiv_updated: "2026-08-10"
summary: >-
  滑らかな射影完全交叉曲面を不変にする正則葉層について、許される次数を完全に決定する。これによりPoincaré問題の明示的境界を得るとともに、十分大きな次数では孤立特異点スキームを含む別の葉層が接束の大域自己準同型からちょうど生じることを示す。
abstract_en: ""
summary_en: >-
  This paper treats polynomial vector fields tangent to a smooth complete-intersection surface in projective space. It identifies the exact degree range in which the induced one-dimensional foliations exist, producing effective bounds for the Poincaré problem. Above a second explicit threshold, containment between isolated singular schemes is characterized by global endomorphisms of the surface tangent bundle. The result also explains when the singular scheme recovers the foliation uniquely.
abstract_ja: >-
  射影空間内の滑らかな完全交叉曲面を不変にする正則葉層を扱い、そのような葉層が存在する次数を正確に決定する。その帰結として、滑らかな射影完全交叉曲面に対する古典的Poincaré問題の新しい境界を与え、特に $\mathbb P^3$ 内の滑らかな超曲面について既知の境界が最適であることを示す。さらに孤立特異点を持つ葉層について、明示的境界を超える次数では、特異点スキームの包含が接束の大域自己準同型による作用と同値になる。
abstract_source_url: "https://arxiv.org/abs/2608.09877"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.09877](https://arxiv.org/abs/2608.09877)
- **著者:** Jorge Olivares, Daniel Posada-Buriticá
- **初回投稿日:** 2026年8月10日
- **最終更新日:** 2026年8月10日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクト複素多様体上の1次元正則葉層については、どの直線束が葉層の接層として現れるか、また葉層の特異点スキームが葉層そのものをどこまで決めるか、という二つの基本問題がある。本論文は、射影空間内の滑らかな完全交叉曲面に対象を定め、両方に明示的な答えを与える。

曲面 $X\subset\mathbb P^n$ を定義する方程式の次数を $d_1,\ldots,d_c$ とすると、接層が $\mathcal O_X(1-d)$ である葉層の存在範囲は $d_i$ と $n$ だけで記述できる。この必要十分な次数条件から、完全交叉曲面を不変にする射影空間上の葉層に対するPoincaré問題の新しい境界が従う。

さらに、孤立特異点を持つ切断 $s$ の特異点スキームを含む切断 $s'$ は、次数がもう一つの明示的境界を超えれば、接束の大域自己準同型 $\varphi$ による $s'=\varphi(s)$ という形に限る。したがって接束がsimpleなら自己準同型はスカラーだけとなり、特異点スキームが葉層を一意に決める。

この記述は、完全交叉K3曲面についての先行結果を包含する。とくに非常に一般の完全交叉曲面では、少数の例外を除いてPicard数が1であるため、存在定理が可能な葉層接層をすべて決める。

## 背景と問題設定

$X=V(f_1,\ldots,f_c)\hookrightarrow\mathbb P^n$ を型 $(d_1,\ldots,d_c)$ の滑らかな完全交叉曲面とし、$2\le d_1\le\cdots\le d_c$ とする。論文が扱うのは

$$
L_d=\mathcal O_X(1-d),\qquad
s\in H^0(X,\Theta_X\otimes L_d^\vee)
$$

で定まる葉層である。これは、$\mathbb P^n$ 上の次数 $d$ の斉次多項式ベクトル場が $X$ の各点で $X$ に接することと対応する。$s$ の零点が定めるスキームを $Z_s$ と書く。

射影空間ではEuler列により存在範囲が知られ、特異点が葉層を決定する問題にも古典的結果がある。一方、完全交叉曲面については、存在条件を決めることが、与えられた次数の葉層に不変な部分多様体の次数を抑えるPoincaré問題へ直接つながる。

## 主結果

### 存在次数の完全決定（Theorem A）

Introductionの主定理とその直後の説明によれば、接層 $L_d$ を持つ葉層が存在するための必要十分条件は

$$
d\ge \sum_{i=1}^{c}d_i-n+2
$$

である。これは単なる漸近的存在ではなく、型 $(d_1,\ldots,d_c)$ から最小次数を具体的に読む判定である。その系として完全交叉曲面に対するPoincaré問題の境界を与え、$\mathbb P^3$ 内の滑らかな曲面では従来の境界が必要でもある、すなわち最適であることが分かる。

### 特異点スキームによる決定（Theorem B）

$d\ge\sum_i d_i-n+2$ とし、$s\in H^0(X,\Theta_X\otimes L_d^\vee)$ が非零で孤立特異点を持つとする。さらに

$$
d>\sum_{i=1}^{c}d_i-n+d_c
$$

なら、非零切断 $s'$ に対して

$$
Z_{s'}\supset Z_s
\quad\Longleftrightarrow\quad
s'=\varphi(s)\ \text{ for some }\varphi\in H^0(X,\operatorname{End}(\Theta_X))
$$

が成り立つ。一般には特異点スキームだけで葉層が一意になるとは限らず、その曖昧さを接束の大域自己準同型が正確に測る。とくに $\Theta_X$ がsimpleなら $\varphi$ はスカラー倍なので、$[s]$ は $Z_s$ により一意に決まる。

## 証明の見取り図

Introductionが示す論理の中心はコホモロジー計算である。まずKoszul分解、法束列、Euler列とBott公式を組み合わせ、$H^0(X,\Theta_X\otimes\mathcal O_X(d-1))$ の次元を計算する。その非消滅範囲がTheorem Aの境界を与え、同じ計算がPoincaré問題へ移される。

Theorem Bでは、孤立零点を持つ切断に付随するKoszul型の情報から、$Z_s$ 上で消える切断を接束の自己準同型へ持ち上げる。次数の強い不等式は、この持ち上げを妨げるコホモロジーを消す役割を果たす。Introductionによれば、接束の大域自己準同型そのものは論文のSection 5で別途調べられる。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.09877](https://arxiv.org/abs/2608.09877)
- **Introduction:** unnumbered Introduction, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem A, Theorem B
- **論文構成の説明:** Introduction, p. 2
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
