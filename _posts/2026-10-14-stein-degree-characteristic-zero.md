---
layout: paper
title: Stein degree over fields of characteristic zero
title_ja: 標数零の任意の体上におけるStein次数の一様有界性
authors: Caucher Birkar, Santai Qu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We show that the Stein degree of horizontal divisors on generalised log Calabi-Yau fibrations or certain vertical divisors of Fano type fibrations over arbitrary fields of characteristic zero is bounded by constants that are independent on the ground field.
topic: algebraic-geometry
tags:
- calabi-yau-geometry
- fano-varieties
- singularities
- birational-geometry
- minimal-model-program
arxiv_id: 2610.16205v1
arxiv_url: https://arxiv.org/abs/2610.16205
arxiv_submitted: '2026-10-12'
arxiv_updated: '2026-10-12'
summary: 一般化log Calabi–Yauファイブレーションの境界因子について、Stein次数を基礎体によらず一様に抑える。水平成分とFano型の垂直成分を扱い、境界係数の下限と相対次元による評価から、特異点を持つ閉点の剰余次数の制約も得る。
abstract_en: ''
summary_en: Over a nonclosed field, the finite part of a Stein factorization carries information not captured by working only over an algebraic closure. This paper gives field-independent bounds for that finite degree on specified boundary components of generalized log Calabi–Yau fibrations. The horizontal and vertical cases are linked by induction on relative dimension. A consequence controls residue-field degrees of closed points satisfying a fixed singularity threshold.
abstract_ja: 標数零の任意の体上で、一般化log Calabi–Yauファイブレーションの水平境界因子と、Fano型ファイブレーションの一定の垂直境界因子のStein次数が一様に有界であることを示す。上限は相対次元と境界係数の下限に依存するが、基礎体には依存しない。log Calabi–Yau対の閉点については、最小log discrepancyが1未満の固定値以下なら剰余次数にも一様な上限が得られる。
abstract_source_url: https://arxiv.org/abs/2610.16205
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.16205v1](https://arxiv.org/abs/2610.16205)
- **著者:** Caucher Birkar, Santai Qu
- **初回投稿日:** 2026-10-12
- **最終更新日:** 2026-10-12
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

射をStein分解すると、連結なファイバーを持つ部分と有限な部分に分かれる。その有限部分の次数を、ファイブレーションの幾何からどこまで一様に抑えられるかが本論文の問題である。特に代数閉でない体上では、基礎体による算術的な複雑さを含めて扱う必要がある。

著者らは一般化log Calabi–Yauファイブレーションの水平境界成分に対し、相対次元と境界係数の正の下限だけでStein次数を評価する。垂直成分についても、全空間が相対的にFano型で、底での像が因子となる場合に同様の評価を得る。基礎体を変えても同じ定数でよい点が、代数閉体上の先行結果からの強化である。

応用として、log Calabi–Yau対の閉点の剰余次数が特異性によって制約されることを示す。これはすべての閉点の次数を一様に抑える主張ではなく、最小log discrepancyに1未満の上限を置いた点についての結果である。

## 背景と問題設定

<p>整スキーム間の射影全射 $S\to Z$ のStein分解を $S\to V\to Z$ とすると、$\operatorname{sdeg}(S/Z)=\deg(V/Z)$ と定義する。基礎体 $k$ は任意の標数零の体であり、代数閉とは限らない。</p>

<p>一般化log Calabi–Yauファイブレーション $(X,B+M)\to Z$ では、一般化対がgeneralised lcで、</p>

<div>
$$
K_X+B+M_X\sim_{\mathbb R}0/Z
$$
</div>

<p>を満たす。水平因子は底を支配し、垂直因子の像は底の真部分集合となる。定理は境界 $B$ の成分を対象とし、その係数が小さくなり過ぎないという仮定を置く。</p>

## 主結果

### 水平成分のStein次数（Theorem 1.1）

<p>相対次元 $d\in\mathbb N$ と $t\in(0,1]$ を固定すると、$d,t$ のみに依存する整数 $N_h(d,t)$ が存在する。任意の標数零の体上の一般化log Calabi–Yauファイブレーションで、係数が $t$ 以上の水平既約境界成分 $S$ は</p>

<div>
$$
\operatorname{sdeg}(S^{\mathrm{nor}}/Z)\le N_h(d,t)
$$
</div>

を満たす。正規化を取った因子のStein次数を評価しており、定数に基礎体や底の次元は含まれない。

### 垂直成分のStein次数（Theorem 1.2）

<p>同じ $d,t$ に対し、相対的にFano型である一般化log Calabi–Yauファイブレーションを考える。係数が $t$ 以上の垂直既約成分 $S$ の像 $T\subset Z$ が余次元1なら、</p>

<div>
$$
\operatorname{sdeg}(S^{\mathrm{nor}}/T)\le N_v(d,t)
$$
</div>

が成り立つ。こちらにはFano型性と像の余次元の仮定が必要であり、一般の垂直成分への無条件な評価ではない。水平の場合と併せ、相対的な境界の有限被覆部分を統一的に制御する。

### 閉点の剰余次数（Theorem 1.3）

<p>$d\in\mathbb N$ と $t\in[0,1)$ を固定する。標数零の体 $k$ 上の幾何学的整な射影log Calabi–Yau対 $(X,B)$ が次元 $d$、$K_X+B\sim_{\mathbb R}0$ を満たすとする。閉点 $x$ で $\operatorname{mld}_x(X,B)\le t$ なら、</p>

<div>
$$
[k(x):k]\le R(d,t)
$$
</div>

<p>となる。最小log discrepancyは、中心が $x$ である上方の素因子のlog discrepancyの下限であり、点の特異性を測る量である。境界係数に下限を置く前二定理とは異なり、ここでは最小log discrepancyに1未満の上限を課す。</p>

## 証明の見取り図

Introductionは、水平次数の有界性と垂直次数の有界性を相対次元について相互に組み合わせる帰納法を説明する。垂直の場合は水平の場合の証明に不可欠な一段階であり、技術的にも中心となる。代数閉体上の先行研究で主要な役割を果たしたtoroidal geometryには依存しない。

底を基礎体のスペクトルとした場合、水平成分の定理はlog Calabi–Yau対についての予想を解く。閉点への応用もこの定理から導かれる。非代数閉体上でのMMP、数体上の有限型データへの降下、complementの有界性が論文の各段階を構成するが、ここではIntroductionが述べる役割の範囲にとどめる。

## 原論文との対応

- **Abstractページ:** [Stein degree over fields of characteristic zero](https://arxiv.org/abs/2610.16205)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.16205v1) — Section 1, pp. 1–3（Section 2より前）。
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.3。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.16205v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
