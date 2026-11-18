---
layout: paper
title: Intersection theory and Chern classes on normal varieties II
title_ja: 正規多様体上の反射層のChern類と判別式
authors: Adrian Langer
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove a uniform bound linear in the rank for the local correction terms in the Riemann--Roch formula for reflexive sheaves on normal surfaces over algebraically closed fields of arbitrary characteristic. We also establish the usual tensor and symmetric-power formulas for second Chern characters and prove Wahl's asymptotic Riemann--Roch conjecture and its higher-rank generalization. These results yield second Chern classes of reflexive sheaves on arbitrary normal projective varieties, compatible with pullback by finite surjective morphisms. We characterize their discriminants as infima of normalized discriminants of compatible vector bundles on smooth alterations. As applications we prove Bogomolov's inequality, effective restriction and boundedness theorems on normal projective varieties, a Miyaoka-type inequality, and a Segre-class criterion for bigness of reflexive sheaves on normal surfaces.
topic: algebraic-geometry
tags:
- chern-classes
- vector-bundles-sheaves
- singularities
- stability
- positivity
arxiv_id: 2611.21118v1
arxiv_url: https://arxiv.org/abs/2611.21118
arxiv_submitted: '2026-11-16'
arxiv_updated: '2026-11-16'
summary: 正規多様体上の反射層に対し、第二Chern類を有限射と整合的に扱う理論を構成する。正規曲面のRiemann–Roch補正項を階数に比例して一様に抑える評価を出発点とし、判別式のalterationによる特徴づけとBogomolov型不等式へ結び付ける。
abstract_en: ''
summary_en: Singularities complicate the passage from reflexive sheaves to numerical intersection invariants. The paper controls this difficulty through rank-dependent estimates on surface Riemann–Roch corrections. It then builds a higher-dimensional second-Chern-class theory and compares discriminants through smooth alterations. This framework supports applications to semistability, restriction, and positivity.
abstract_ja: 特異点を持つ空間では、反射層の局所的な振る舞いがEuler標数とChern類の関係に補正を生む。本論文はその補正を階数に関して一様に制御し、正規射影多様体一般で第二Chern類の交点数を定義する。滑らかなalteration上の束を介して判別式を比較できることが、安定性や正値性に関する応用の基礎となる。
abstract_source_url: https://arxiv.org/abs/2611.21118
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.21118v1](https://arxiv.org/abs/2611.21118)
- **著者:** Adrian Langer
- **初回投稿日:** 2026-11-16
- **最終更新日:** 2026-11-16
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

滑らかな多様体のベクトル束では、Chern類はEuler標数、交点数、安定性を結ぶ基本的な量である。正規多様体上の反射層では、特異点の局所補正が加わるため、この関係をそのまま使うことはできない。

本論文の出発点は、正規曲面のRiemann–Roch公式に現れる局所補正項を、層の階数に比例する量で一様に抑えることである。この評価はWahlの漸近Riemann–Roch予想とその高階数版につながり、高次元の正規射影多様体上で第二Chern類を構成するための基礎となる。

新しい第二Chern類は有限全射による反射的引き戻しと整合し、判別式は滑らかなalteration上の対応する束の判別式の下限として特徴づけられる。これにより、滑らかな場合の安定性不等式を特異空間へ運ぶ道筋が得られる。ただし、より高い次数のChern類について同じ性質がすべて成立すると主張する論文ではない。

## 背景と問題設定

Wahlは複素曲面特異点の解消上で階数2の束の相対Chern類を導入した。Langerの先行研究は階数と標数を拡張したが、局所補正の一様線形評価と、標数0で任意の正規多様体を扱う一般論が課題として残っていた。

以下で $\mathcal E$ は階数 $r$ の反射層であり、反射的引き戻しと対称冪を $f^{[\ast]}\mathcal E=(f^\ast\mathcal E)^{\ast\ast}$、$\operatorname{Sym}^{[m]}\mathcal E=(\operatorname{Sym}^m\mathcal E)^{\ast\ast}$ と書く。第二Chern類は、とくに高次元では線束との交点数を与える多重線形形式として扱われる。

## 主結果

### Riemann–Roch補正の一様評価（Theorem 0.1）

代数閉体上の正規固有曲面 $X$ に対し、$X$ だけに依存する定数 $C$ が存在し、任意の階数 $r$ の反射層について

$$
\left|\chi(X,\mathcal E)-\left(\frac12c\_1(\mathcal E)\cdot(c\_1(\mathcal E)-K\_X)-\int\_Xc\_2(\mathcal E)+r\chi(X,\mathcal O\_X)\right)\right|\le Cr
$$

が成り立つ。鍵となる局所評価は $|a(x,\mathcal E)|\le C\_xr$ である。定数を層ごとに選ぶのでなく、特異点と階数によって統一的に制御できる点が重要である。

### 高次元の第二Chern類（Theorem 0.2）

任意の代数閉体上の $n\ge2$ 次元正規射影多様体に対し、$\int\_Xc\_2(\mathcal E)$ は $\operatorname{Pic}(X)^{n-2}$ 上の対称な $\mathbb Z$ 多重線形形式として定義される。束の場合には通常の交点数と一致し、代数閉体拡大および十分一般の超平面切断と整合する。

さらに正規射影多様体からの有限全射 $\pi:Y\to X$ について

$$
\int\_Yc\_2(\pi^{[\ast]}\mathcal E)\pi^\ast L\_1\cdots\pi^\ast L\_{n-2}
=\deg(\pi)\int\_Xc\_2(\mathcal E)L\_1\cdots L\_{n-2}
$$

が成り立つ。先行理論の標数や余次元2の特異点に関する制約を取り除く結果である。

### 対称冪の漸近公式（Theorem 0.3）

任意の線束 $L\_1,\ldots,L\_{n-2}$ に対して、原論文の $K$ 理論的な $c\_1(L\_i)$ の作用を用いると

$$
\chi\bigl(X,c\_1(L\_1)\cdots c\_1(L\_{n-2})\cdot\operatorname{Sym}^{[m]}\mathcal E\bigr)
=\frac{m^{r+1}}{(r+1)!}\left(c\_1(\mathcal E)^2\cdot L\_1\cdots L\_{n-2}-\int\_Xc\_2(\mathcal E)L\_1\cdots L\_{n-2}\right)+O(m^r)
$$

となる。これは反射的対称冪のEuler標数の主要項によって、第二Chern類を数値的に捉える式である。

### 判別式のalterationによる特徴づけ（Theorem 0.4）

$L\_i$ をnefとし、$\Delta(\mathcal E)=2r c\_2(\mathcal E)-(r-1)c\_1(\mathcal E)^2$ と書くと

$$
\int\_X\Delta(\mathcal E)L\_1\cdots L\_{n-2}
=\inf\_{f,\mathcal F}\frac{\int\_Z\Delta(\mathcal F)f^\ast L\_1\cdots f^\ast L\_{n-2}}{\deg f}.
$$

ここで $f:Z\to X$ は滑らかな射影多様体からのalterationを動き、そのStein分解 $Z\xrightarrow gY\xrightarrow hX$ に対して $g\_{[\ast]}\mathcal F\simeq h^{[\ast]}\mathcal E$ を満たすベクトル束 $\mathcal F$ を取る。$g\_{[\ast]}$ は押し出し後の二重双対である。

Introductionは、この特徴づけから（強）傾斜半安定層のBogomolov不等式、標数0での制限定理と有界性、Miyaoka型不等式が得られると説明する。応用の詳細な追加仮定や式はIntroductionに完全には掲げられていないため、ここでは一般的な言及にとどめる。

## 証明の見取り図

局所Riemann–Roch補正の線形評価を確立し、相対Chern指標のテンソル積・対称冪公式から漸近公式へ進む。曲面上のChern指標を環準同型として扱えることを基盤に、高次元での交点数と有限射への整合性を構成する。

次に滑らかなalteration上の束によって判別式を近似・比較し、既知の安定性不等式を正規多様体へ移す。Introductionは最後に、高次の漸近Riemann–Roch公式と通常の双対公式には、階数1の反射層ですら両立しない場合があることを指摘する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.21118)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.21118v1) — Introduction, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 0.1–0.4; 応用としてCorollaries 4.9, 5.11に言及
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.21118v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
