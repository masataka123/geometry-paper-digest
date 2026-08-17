---
layout: paper
title: "Notes on the deformed Hermitian-Yang-Mills equations and the large scaling limits of stability conditions"
title_ja: "変形Hermitian–Yang–Mills方程式と安定性条件の大スケール極限"
authors: "Yu-Wei Fan"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.DG
arxiv_abstract: >-
  In this short note, we show that, assuming a conjecture of Arcara and Miles, a line bundle on a
  smooth complex projective surface admits a deformed Hermitian-Yang-Mills metric if and only if it is
  stable in the ``large scaling limit" with respect to a generic Kähler form. The same statement for
  toric surfaces was recently proved by Stoppa. The purpose of this note is to remark that this
  equivalence holds for arbitrary smooth projective surfaces.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - stability
  - toric-geometry
arxiv_id: "2604.22246v1"
arxiv_url: "https://arxiv.org/abs/2604.22246"
arxiv_submitted: "2026-04-24"
arxiv_updated: "2026-04-24"
summary: >-
  滑らかな射影曲面上の線束について、dHYM計量の存在とBridgeland安定性の「大スケール極限」を比較する。Arcara–Miles予想を仮定し、一般のKähler類では両者が同値となることを、toric曲面に限られていた観察から任意の射影曲面へ広げる。
abstract_en: ""
summary_en: >-
  The note compares solvability of the deformed Hermitian–Yang–Mills equation for a line bundle on a smooth projective surface with Bridgeland stability after simultaneous large tensor and Kähler scaling. Stability at all sufficiently large scales implies dHYM semistability. Conversely, conditional on a conjecture of Arcara and Miles, dHYM semistability gives Bridgeland stability at every positive integral scale. For a generic Kähler class, semistability and stability coincide, yielding the advertised equivalence beyond the previously treated toric case.
abstract_ja: >-
  滑らかな複素射影曲面上の線束について、変形Hermitian–Yang–Mills計量を持つことと、一般のKähler形式に関して大スケール極限で安定であることの関係を調べる。Arcara–Miles予想の下で、toric曲面について知られていた同値性が任意の滑らかな射影曲面でも成り立つことを示す。
abstract_source_url: "https://arxiv.org/abs/2604.22246"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2604.22246v1](https://arxiv.org/abs/2604.22246v1)
- **著者:** Yu-Wei Fan
- **初回投稿日・最終更新日:** 2026年4月24日（v1）
- **主分類・副分類:** math.AG（主分類）、math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

変形Hermitian–Yang–Mills（dHYM）方程式は、鏡映対称性の下で特殊Lagrange部分多様体に対応すると期待される線束の計量問題である。他方、導来圏にはBridgeland安定性があるが、通常のBridgeland安定性とdHYM可解性はそのままでは同値でない。

差の一つはスケール不変性にある。線束 $L$ が $\omega$ に関してdHYM安定なら $L^{\otimes k}$ は $k\omega$ に関して同じ性質を持つが、Bridgeland安定性には一般にこの振る舞いがない。そこで、全ての十分大きい $k$ で $L^{\otimes k}$ が安定になる「大スケール極限」を比較対象とする。

本論文は、大スケール極限での安定性からdHYM半安定性が従うことを無条件に示す。逆向きはArcara–Miles予想を仮定して示され、しかも十分大きい $k$ だけでなく全ての $k\ge1$ で安定となる。一般のKähler類では半安定と安定が一致するため、dHYM計量の存在との同値性が得られる。

## 背景と問題設定

定義上、$L$ が $\omega$ に関して大スケール極限で安定とは、ある $k_0$ が存在して全ての $k\ge k_0$ について $L^{\otimes k}$ が安定性条件 $\sigma_{k\omega}$ で安定になることをいう。解析側では、曲面上のdHYM可解性は全ての曲線 $C\subset X$ に対する位相の不等式

$$
\operatorname{Im}\left(\frac{Z_C(L)}{Z_X(L)}\right)>0
$$

と同値であり、$\ge0$ に緩めたものをdHYM半安定性と呼ぶ。一般の $\omega$ では等号の壁を避けるので両者は一致する。

## 主結果

### 大スケール安定性とdHYM半安定性（Theorem 1.3）

$X$ を滑らかな複素射影曲面、$\omega$ を豊富な因子類、$L$ を線束とする。

1. $L$ が $\omega$ に関して大スケール極限で安定なら、$L$ は $\omega$ に関してdHYM半安定である。
2. Arcara–Miles予想を仮定すると、$L$ がdHYM半安定なら、全ての $k\ge1$ について $L^{\otimes k}$ は $\sigma_{k\omega}$-安定である。

従って一般の $\omega$ では、dHYM安定性、dHYM半安定性、大スケール極限での安定性が一致する。一般性の仮定は本質的で、Introductionは任意のスケールで安定だがdHYM安定でない非一般的な例を予告している。

## 証明の見取り図

曲面のdHYM方程式に対する曲線ごとの明示的数値判定と、幾何的Bridgeland安定性条件の中心電荷を比較する。スケール $k$ に関する漸近的安定性からdHYMの非負不等式を抽出し、逆向きではArcara–Miles予想が潜在的な不安定化部分対象を制御する。議論は $B$-field を含む捩れた設定で行い、$B=0$ としてIntroductionの定理を回収する。

## 原論文との対応

- **Abstractページ:** [arXiv:2604.22246v1](https://arxiv.org/abs/2604.22246v1)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中の主要結果:** Definition 1.1, Definition 1.2, Theorem 1.3, Remark 1.4
- **論文構成:** Section 2で捩れた定式化と証明
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
