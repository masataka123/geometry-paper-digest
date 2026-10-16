---
layout: paper
title: The volume of foliated surfaces with geometric genus one
title_ja: 正の幾何種数を持つ葉層曲面の鋭い体積下界
authors: Zhiming Guo, Bokai Hu, Xin Lü
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove the sharp volume bound $\mathrm{vol}(\mathcal{F})\ge 1/6$ for complex foliated surfaces of general type with positive geometric genus. We also study the equality case and apply the bound to the algebraic integrability and finiteness of small volumes on irregular surfaces.
topic: algebraic-geometry
tags:
- foliations
- birational-geometry
- positivity
arxiv_id: 2610.19788v1
arxiv_url: https://arxiv.org/abs/2610.19788
arxiv_submitted: '2026-10-14'
arxiv_updated: '2026-10-14'
summary: 一般型の複素葉層曲面で幾何種数が正なら、体積は1/6以上となることを示す。等号の標準因子の構造を調べ、非正則曲面上の小体積葉層の代数的可積分性と、曲面の体積を固定した場合の有限性へ応用する。
abstract_en: ''
summary_en: The paper addresses the smallest possible volumes of general-type foliations when a canonical section exists. Its new lower bound covers geometric genus one, where the canonical-map method used for larger genus is unavailable. The proof studies intersections with the nef part of the foliated canonical divisor. Equality and the small-volume regime on irregular surfaces lead to additional structural conclusions.
abstract_ja: 一般型の葉層曲面で正の幾何種数を持つ場合に、鋭い体積下界1/6を証明する。標準因子のZariski分解のnef部分と不変曲線との正の交点数にも同じ下界を得る。等号の場合を二つの型に分け、非正則曲面上で体積が1/6未満ならAlbaneseファイブレーション由来になることを示す。曲面の体積を上から抑えると、この小体積範囲の可能値は有限となる。
abstract_source_url: https://arxiv.org/abs/2610.19788
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.19788v1](https://arxiv.org/abs/2610.19788)
- **著者:** Zhiming Guo, Bokai Hu, Xin Lü
- **初回投稿日:** 2026-10-14
- **最終更新日:** 2026-10-14
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

一般型の葉層曲面の体積に、一様な正の下界が存在するかという分類論の問題を扱う。幾何種数が2以上の場合は標準写像を使った既知の不等式があるが、幾何種数1では非定数の標準写像がなく、別の方法が必要となる。

本論文は、幾何種数が正なら体積が$1/6$以上となることを示す。この値を実現する例も構成されるため、下界は鋭い。証明では有効標準因子の成分と、Zariski分解のnef部分との交点数を調べる。

さらに等号の場合の標準因子の構造を記述し、非正則曲面上で体積が$1/6$未満となる葉層はAlbaneseファイブレーションから生じることを示す。曲面自体の体積に上限を置けば、その小体積範囲で可能な葉層体積の値は有限個となる。全ての一般型葉層に対する無条件の一様下界まで証明するものではない。

## 背景と問題設定

$S$を滑らかな複素射影曲面、$\mathcal F$を飽和可逆部分層$T\_{\mathcal F}\subset T\_S$による葉層とする。reduced model $(X,\mathcal G)$上で

$$
p\_g(\mathcal F)=h^0(X,K\_{\mathcal G}),\qquad
\operatorname{vol}(\mathcal F)=\limsup\_{m\to\infty}
\frac{h^0(X,mK\_{\mathcal G})}{m^2/2}
$$

と定める。これらはモデルの選択によらない双有理不変量である。体積が正であることが一般型を意味する。

Lü–Tanの既知の結果は$p\_g(\mathcal F)\ge2$なら$\operatorname{vol}(\mathcal F)\ge1/2$を与える。本論文の新たな焦点は$p\_g=1$であり、葉の種数にも依存しない任意の一般型葉層の一様下界は、Introductionで未解決問題として区別されている。

## 主結果

### 体積の下界（Theorem 1.1）

一般型の葉層曲面で$p\_g(\mathcal F)>0$なら

$$
\operatorname{vol}(\mathcal F)\ge\frac16
$$

が成立する。原論文Section 7の二つの例が$p\_g=1$、体積$1/6$を実現するため、定数を改善することはできない。

### 不変曲線との交点数（Proposition 1.2）

reduced葉層曲面で$K\_{\mathcal F}$がpseudo-effectiveとし、Zariski分解を$K\_{\mathcal F}=P+N$と書く。任意の$\mathcal F$不変既約曲線$A$について

$$
P\cdot A=0\quad\text{または}\quad P\cdot A\ge\frac16
$$

となり、この定数も最適である。この命題には幾何種数の仮定はない。ただし曲線の不変性は不可欠であり、非不変曲線では正の交点数がゼロへ近づく例がある。

### 等号の場合（Theorem 1.3）

相対極小で$p\_g(\mathcal F)>0$、$\operatorname{vol}(\mathcal F)=1/6$なら$p\_g(\mathcal F)=1$である。一意な有効標準因子を$D$、そのZariski分解を$D=P+N$とすると、次のいずれか一方が成立する。

1. $D$の全成分は葉層不変で、その正規化は有理曲線であり、$q(S)=0$となる。
2. $D$のうち$\operatorname{Supp}(N)$の外の部分は、一つの滑らかな曲線$C$である。$C$は至る所で葉層に横断的で、$D$内の係数はちょうど1となる。

両方の型が有理曲面上に現れる。Introductionが参照する後続の詳細な配置分類を、ここで追加して再構成することはしない。

### 小体積と代数的可積分性（Corollary 1.4）

$q(S)>0$の曲面上の一般型葉層で

$$
\operatorname{vol}(\mathcal F)<\frac16
$$

なら、$p\_g(\mathcal F)=0$であり、$\mathcal F$は$S$のAlbaneseファイブレーションから誘導される。特に有理第一積分を持ち、代数的に可積分となる。単に体積が小さいだけでなく、台の非正則性がこの結論の仮定である。

### 曲面体積を制限した有限性（Theorem 1.5）

正整数$c$を固定すると、$\operatorname{vol}(S)\le c$を満たす滑らかな射影非正則曲面上の一般型葉層に対し、$c$に依存する$\varepsilon\_c>0$が存在して

$$
\operatorname{vol}(\mathcal F)\ge\varepsilon\_c
$$

となる。同時に、範囲$(0,1/6)$に属する体積の可能値は有限個である。ここで上限を置く$\operatorname{vol}(S)$と、結論で評価する$\operatorname{vol}(\mathcal F)$は別の量である。

## 証明の見取り図

有効標準因子の成分$A$に対する$P\cdot A$を調べる。不変成分には一様交点数評価を使い、非不変成分には接触公式と負の鎖に沿う係数の整数性を用いる。これによって標準写像が使えない幾何種数1の状況を処理する。

非正則曲面の小体積範囲では、葉層をAlbaneseファイブレーションへ帰着する。曲面の体積制限から一般葉の種数を抑え、既知の代数的可積分葉層の体積の離散性と、論文で得る共通分母の制御を組み合わせて有限性を導く。

## 原論文との対応

- **Abstractページ:** [The volume of foliated surfaces with geometric genus one](https://arxiv.org/abs/2610.19788)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.19788v1) — Section 1, pp. 1–3（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3, 1.5; Proposition 1.2; Corollary 1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.19788v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
