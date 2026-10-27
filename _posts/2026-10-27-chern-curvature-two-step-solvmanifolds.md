---
layout: paper
title: Constant Chern holomorphic sectional curvature on two-step solvmanifolds
title_ja: 二段可解solvmanifoldの定Chern正則断面曲率
authors: Shanlin Guan, Yuqin Guo
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: Let $M=\Gamma\backslash G$ be a compact solvmanifold with a left-invariant Hermitian structure whose Lie algebra is two-step solvable. If the Chern holomorphic sectional curvature is constant, then the derived algebra is $J$-invariant and the Chern connection is flat. At the Lie-algebra level, we also prove that constant Chern holomorphic sectional curvature is impossible for a unimodular two-step solvable Hermitian Lie algebra of mixed Freibert-Swann type.
topic: differential-geometry
tags:
- curvature
arxiv_id: 2610.34820v1
arxiv_url: https://arxiv.org/abs/2610.34820
arxiv_submitted: '2026-10-26'
arxiv_updated: '2026-10-26'
summary: 二段可解Lie群のコンパクト商に左不変Hermitian計量を入れ、Chern正則断面曲率が一定となる場合を調べる。曲率の一定性が導来代数の複素構造不変性を強制し、Chern接続全体が平坦になることを示す。
abstract_en: Let $M=\Gamma\backslash G$ be a compact solvmanifold with a left-invariant Hermitian structure whose Lie algebra is two-step solvable. If the Chern holomorphic sectional curvature is constant, then the derived algebra is $J$-invariant and the Chern connection is flat. At the Lie-algebra level, we also prove that constant Chern holomorphic sectional curvature is impossible for a unimodular two-step solvable Hermitian Lie algebra of mixed Freibert-Swann type.
summary_en: ''
abstract_ja: 二段可解Lie代数を持つコンパクトsolvmanifoldの左不変Hermitian計量を研究する。Chern正則断面曲率が一定なら導来代数は複素構造で不変となり、Chern曲率全体が零になる。格子の存在を仮定しないLie代数の段階でも、unimodularでFreibert–Swannのmixed typeに属する場合には定曲率が不可能であることを示す。
abstract_source_url: https://arxiv.org/abs/2610.34820
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.34820v1](https://arxiv.org/abs/2610.34820)
- **著者:** Shanlin Guan, Yuqin Guo
- **初回投稿日:** 2026-10-26
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Kähler計量では正則断面曲率が曲率テンソル全体を決めるが、一般のHermitian計量ではそうではない。本論文は、左不変計量を持つコンパクトsolvmanifoldという設定で、Chern正則断面曲率の一定性からどこまで剛性を導けるかを調べる。

Lie代数が二段可解なら、一定曲率という仮定だけで導来代数が複素構造により不変となる。その結果、既知の定理と組み合わせてChern接続が平坦であることが従う。断面曲率の定数も必ず零となる。

さらに格子の存在を使わないLie代数レベルで、unimodularなmixed typeには一定のChern正則断面曲率が存在しないことを示す。ここでの二段可解とは導来代数が可換であることであり、二段冪零というより強い条件とは異なる。一般のコンパクトHermitian多様体への剛性を主張するものではない。

## 背景と問題設定

Hermitian多様体のChern曲率を $R$ とすると、Chern正則断面曲率は

$$
H(X)=\frac{R\_{X\bar X X\bar X}}{|X|^4},\qquad
0\ne X\in T^{1,0}M
$$

である。一般のHermitian計量では、この量は曲率テンソルの正則・反正則添字でそれぞれ対称化した部分のみを捉える。Introductionは高次元で $H=0$ でも $R\ne0$ となる既知の例を挙げ、追加の幾何的仮定の必要性を説明している。

$M=\Gamma\backslash G$、$\mathfrak g=\operatorname{Lie}(G)$ とし、$\mathfrak g'=[\mathfrak g,\mathfrak g]$ が可換であると仮定する。格子を持つことからLie代数はunimodularとなる。先行するHuang–Zhengの定理は $J\mathfrak g'=\mathfrak g'$ を仮定していたが、本論文はその仮定を曲率の一定性から導く。

## 主結果

### 二段可解コンパクト商の平坦性（Theorem 1.1）

$M=\Gamma\backslash G$ が上記のコンパクトLie–Hermitian solvmanifoldで、左不変Hermitian計量のChern正則断面曲率が一定なら

$$
J\mathfrak g'=\mathfrak g',\qquad H\equiv0,\qquad R=0
$$

が成り立つ。最後の等号はChern接続全体の平坦性であり、正則断面曲率だけの消滅より強い結論である。Riemann計量のLevi–Civita接続まで平坦であると読み替えることはできない。

### mixed typeの代数的障害（Theorem 1.2）

導来代数を用いて

$$
\mathfrak h=\mathfrak g'\cap J\mathfrak g',\quad
V=\mathfrak g'\cap\mathfrak h^\perp,\quad
W=(\mathfrak g'+J\mathfrak g')^\perp
$$

と置くと、Freibert–Swann分解は

$$
\mathfrak g=\mathfrak h\oplus(V\oplus JV)\oplus W,
\qquad \mathfrak g'=\mathfrak h\oplus V
$$

となる。$V$ と $JV$ の間を除き各成分は直交する。unimodularな二段可解Hermitian Lie代数で $\mathfrak h,V,W$ が全て非零、すなわちmixed typeなら、Chern正則断面曲率は一定にならない。この定理にはコンパクト商や格子の存在そのものは不要である。

## 証明の見取り図

導来代数の $J$ 不変性に反する $V\ne0$ の場合を三つに分ける。pure type Iではunimodular性から可換結合代数の冪零性を得て、非可換な元のLie代数における曲率条件と矛盾させる。pure type IIIでは対応する商代数の $A^2=A$ という性質を曲率の跡公式と組み合わせる。mixed typeでは同じ跡の議論から冪零性を導き、さらに曲率恒等式で $V$ を排除する。こうして得た導来代数の不変性に既存の平坦性定理を適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.34820)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.34820v1) — Section 1, pp. 1–2（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.34820v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
