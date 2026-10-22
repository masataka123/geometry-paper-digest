---
layout: paper
title: Mixed Chern curvature on complete flags
title_ja: 完全旗多様体における一定混合Chern曲率の非存在
authors: Yuqin Guo, Dongmei Zhang
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: We prove that the complete flag manifold SU(m)/T m-1, with m >= 3 and its standard complex structure, admits no invariant Hermitian metric with constant mixed Chern curvature when the coefficient of the holomorphic sectional curvature is nonzero. This extends the preceding nonexistence result for a particular Wallach metric on SU(3)/T2 to all invariant Hermitian metrics and to complete type-A flags of arbitrary dimension. Curvature evaluations on holomorphic root spheres contradict a necessary trace identity, covering both Kahler and non-Kahler invariant metrics and excluding both zero and nonzero curvature constants.
topic: differential-geometry
tags:
- curvature
- chern-classes
arxiv_id: 2610.25864v3
arxiv_url: https://arxiv.org/abs/2610.25864
arxiv_submitted: '2026-10-19'
arxiv_updated: '2026-10-21'
summary: 標準複素構造をもつ完全旗多様体SU(m)/Tの不変Hermitian計量について、正則断面曲率の係数が非零の混合Chern曲率は一定にならないことを示す。mが三以上ならKähler・非Kählerの両方、曲率定数が零の場合も含み、特定のWallach計量についての既知結果を一般化する。
abstract_en: We prove that the complete flag manifold SU(m)/T m-1, with m >= 3 and its standard complex structure, admits no invariant Hermitian metric with constant mixed Chern curvature when the coefficient of the holomorphic sectional curvature is nonzero. This extends the preceding nonexistence result for a particular Wallach metric on SU(3)/T2 to all invariant Hermitian metrics and to complete type-A flags of arbitrary dimension. Curvature evaluations on holomorphic root spheres contradict a necessary trace identity, covering both Kahler and non-Kahler invariant metrics and excluding both zero and nonzero curvature constants.
summary_en: ''
abstract_ja: mが三以上の完全旗多様体SU(m)/Tの標準複素構造上では、正則断面曲率に非零係数を掛けた混合Chern曲率が一定となる不変Hermitian計量は存在しない。本結果はSU(3)/T²上の特定のWallach計量について知られていた非存在を、すべての不変Hermitian計量と任意次元のtype-A完全旗多様体へ広げる。正則root球面の曲率値と必要なトレース恒等式の矛盾を用い、Kählerの場合も非Kählerの場合も、零・非零いずれの曲率定数も排除する。
abstract_source_url: https://arxiv.org/abs/2610.25864
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.25864v3](https://arxiv.org/abs/2610.25864)
- **著者:** Yuqin Guo, Dongmei Zhang
- **初回投稿日:** 2026-10-19
- **最終更新日:** 2026-10-21
- **主分類・副分類:** math.DG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

等質空間で計量が群作用に不変でも、曲率がすべての接方向について同じとは限らない。本論文はこの違いを完全旗多様体で具体化し、第一Chern Ricci曲率と正則断面曲率を混合しても、後者の係数が非零なら一定曲率を実現できないことを示す。

対象は一つの標準計量ではなく、標準複素構造に適合するすべての不変Hermitian計量である。したがってKähler計量だけでなく非Kähler計量を含み、一定値が零の場合も排除する。

証明では曲率テンソルの全成分を計算しない。rootに対応する正則球面に沿った方向の曲率と、球面平均から得られるトレース条件を突き合わせる。この方法によって、SU(3)の旗多様体上の特定のWallach計量に対する先行結果を、任意のtype-A完全旗多様体へ拡張する。

## 背景と問題設定

Kähler計量では一定正則断面曲率の分類は複素空間形に帰着する。一方、一般のHermitian計量のChern曲率には同じ対称性がなく、正則断面曲率だけから全曲率を復元できない。Introductionはこの分類問題と、第一Chern Ricci曲率に正則断面曲率を組み合わせる混合曲率の問題を背景に置く。

本論文の多様体は

$$
F\_m=\operatorname{SU}(m)/T^{m-1},\qquad
\dim\_{\mathbb C}F\_m=\frac{m(m-1)}2
$$

である。ここで $T^{m-1}$ は対角極大トーラスで、複素構造は $\mathbb C^m$ の完全旗の空間から得られる標準のものを固定する。Introductionは $C\_{1,0}=\operatorname{Ric}$、$C\_{0,1}=H$ とし、$C\_{\alpha,\beta}$ をこの二種類の方向曲率の実線形結合として扱う。係数の正負は制限しない。

## 主結果

### すべての不変Hermitian計量に対する非存在（Theorem 1.1）

$m\geq3$ とし、$g$ を $F\_m$ 上の $\operatorname{SU}(m)$-不変Hermitian計量とする。このとき $\beta\neq0$ を満たす実数 $\alpha,\beta,c$ で

$$
C\_{\alpha,\beta}(X)=c\qquad
\text{すべての }0\neq X\in T^{1,0}F\_m
$$

となるものは存在しない。同じ定数が各点だけでなくすべての非零接方向に共通であるという条件である。特に $c=0$ も排除される。

$m\geq3$ は鋭い限定で、$F\_2=\mathbb P^1$ では不変Hermitian計量は一定混合曲率をもつ。また $\beta=0$ を除く必要もある。完全旗多様体の不変Kähler–Einstein計量は一定の第一Ricci曲率をもつためである。

本結果は、不変性を仮定しない一般のHermitian多様体に関する混合曲率予想を解決するものではない。Introductionもその一般問題を未解決として区別している。

## 証明の見取り図

各root直線は正則に埋め込まれた球面に接する。rootの二倍がrootにならないことから、等方表現を使ってその球面のChern第二基本形式の消滅を得る。単位rootベクトル $e\_{ij}$ と球面の計量尺度 $x\_{ij}>0$ に対して、Introductionに示される方向値は

$$
H(e\_{ij})=\frac2{x\_{ij}},\qquad
\operatorname{Ric}^{(1)}(e\_{ij},\overline e\_{ij})=\frac{2(j-i)}{x\_{ij}}.
$$

第一式は球面の正則断面曲率、第二式は反標準次数を使う計算である。続いて球面平均でパラメータ $\alpha,c$ を消去すると、非負項の和の中に厳密に正の項が残り、一定曲率の必要条件と矛盾する。この方向値の利用が、全テンソル成分を求める計算を避ける要点である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.25864)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.25864v3) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorem 1.1；Conjectures 1, 2は背景として区別
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.25864v3
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
