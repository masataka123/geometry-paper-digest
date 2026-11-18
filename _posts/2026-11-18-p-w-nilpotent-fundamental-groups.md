---
layout: paper
title: P = W conjectures for varieties with nilpotent fundamental group
title_ja: 冪零基本群を持つ多様体のP=Wと双対複体
authors: Barbara Bolognese, Camilla Felisetti, Andreas Gross, Alex Küronya, GyeongHyeon Nam, Martin Ulirsch
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
- math.RT
arxiv_abstract: 'We prove the cohomological and the geometric $P=W$ conjectures for the moduli spaces of $G$-Higgs bundles and $G$-local systems on any smooth complex projective variety $X$ with nilpotent fundamental group, and any connected complex reductive group $G$. To the best of our knowledge, our results provide the first instances of $P=W$ conjectures beyond curves and abelian varieties. Finally, we provide examples of our theorem for classical groups: as a byproduct of this analysis we investigate when symplectic resolutions of the corresponding character varieties exist.'
topic: algebraic-geometry
tags:
- higgs-nonabelian-hodge
- hodge-theory
- moduli
- fundamental-groups
- singularities
arxiv_id: 2611.21437v1
arxiv_url: https://arxiv.org/abs/2611.21437
arxiv_submitted: '2026-11-16'
arxiv_updated: '2026-11-16'
summary: 滑らかな複素射影多様体の基本群が冪零である場合に、Betti・Dolbeaultモジュライの自明成分でP=Wを証明する。トーラスの有限商による記述から、境界双対複体のホモトピー型とシンプレクティック特異点・解消の性質も導く。
abstract_en: 'We prove the cohomological and the geometric $P=W$ conjectures for the moduli spaces of $G$-Higgs bundles and $G$-local systems on any smooth complex projective variety $X$ with nilpotent fundamental group, and any connected complex reductive group $G$. To the best of our knowledge, our results provide the first instances of $P=W$ conjectures beyond curves and abelian varieties. Finally, we provide examples of our theorem for classical groups: as a byproduct of this analysis we investigate when symplectic resolutions of the corresponding character varieties exist.'
summary_en: ''
abstract_ja: 非可換Hodge対応はBettiモジュライとDolbeaultモジュライを位相的に結ぶが、その自然なフィルトレーションの一致は別の深い問題である。本論文は基礎多様体の基本群が冪零のとき、自明表現を含む成分に対象を絞ってP=Wを確立する。正規化を可換群とWeyl群の作用で記述し、高次元基礎多様体の例、境界の位相、シンプレクティック解消への応用を与える。
abstract_source_url: https://arxiv.org/abs/2611.21437
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.21437v1](https://arxiv.org/abs/2611.21437)
- **著者:** Barbara Bolognese, Camilla Felisetti, Andreas Gross, Alex Küronya, GyeongHyeon Nam, Martin Ulirsch
- **初回投稿日:** 2026-11-16
- **最終更新日:** 2026-11-16
- **主分類・副分類:** math.AG（主分類）; math.DG, math.RT
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

非可換Hodge対応は、基本群の表現を扱うBettiモジュライとHiggs束を扱うDolbeaultモジュライの間に同相を与える。P=Wは、その同相がHitchin型写像のperverseフィルトレーションと混合Hodge構造のweightフィルトレーションを一致させるという主張である。

本論文は、滑らかな複素射影多様体 $X$ の基本群が冪零の場合を扱う。群 $G$ は任意の連結複素簡約群でよいが、モジュライ全体ではなく、自明表現・自明Higgs束を含む連結成分に限定する。この成分を可換群の表現空間とWeyl群の有限商で記述することが、フィルトレーション比較を可能にする。

さらに境界双対複体のホモトピー型をスペクトルデータの基底と比較し、正規化したモジュライが持つシンプレクティック特異点と解消可能性を調べる。基礎多様体は曲線や非球面的なものに限られず、一般型の高次元多様体にも例がある。

## 背景と問題設定

$\mathcal M\_{\mathrm B}$ と $\mathcal M\_{\mathrm{Dol}}$ はそれぞれ自明対象を含む成分を表す。高次元の $X$ では、通常のHitchin写像の見かけの標的全体へ全射になるとは限らない。そこでスペクトルデータの像を用い、その正規化を

$$
\widetilde B=(H^0(X,\Omega\_X^1)\otimes\_{\mathbb Z}N)/W
$$

と記述する。$N$ は $G$ の極大トーラスの余指標格子、$W$ はWeyl群である。Dolbeault側の正規化も、$\operatorname{Pic}^0(X)$ と $H^0(X,\Omega\_X^1)$ の積に格子を組み合わせた有限商で表される。

## 主結果

### P=Wの一致（Theorem A）

$X$ が滑らかな複素射影多様体で $\pi\_1(X)$ が冪零、$G$ が連結複素簡約群なら、非可換Hodge対応による同定のもとで

$$
P\_kH^\ast (\mathcal M\_{\mathrm{Dol}},\mathbb Q)
=W\_{2k}H^\ast (\mathcal M\_{\mathrm B},\mathbb Q)
=W\_{2k+1}H^\ast (\mathcal M\_{\mathrm B},\mathbb Q)
$$

が成り立つ。ここで左辺は適切なスペクトルデータへの固有写像に伴うperverseフィルトレーションである。任意の基本群や、表現空間の全成分についての定理ではない。

### 高次元の一般型の例（Corollary B）

任意の次元 $n\ge2$ で、一般型かつ非asphericalな滑らかな射影多様体にこの定理を適用できる例が存在する。Abel多様体の完全交叉を用いて構成し、基礎多様体の高次ホモトピーが消えなくてもP=Wが成立することを示す。

### 境界双対複体（Theorem C）

正規化したBettiモジュライのdltモデルの境界双対複体 $\Delta$ は、原点を除くスペクトル基底とホモトピー同値になる。$2g$ を自由Abel化の階数、$r=\operatorname{rank}G$ とすると、その型は

$$
\Delta\simeq\widetilde B\setminus\lbrace 0\rbrace
\simeq S^{2gr-1}/W
$$

である。非可換Hodge対応と境界・スペクトル方向の比較もホモトピーの意味で整合する。Weyl群の商が入るため、一般に単なる球面だと結論することはできない。

### 特異点とシンプレクティック解消（Corollary D）

$g\ge1$ で $G$ がトーラスでない場合、Betti側・Dolbeault側の正規化はシンプレクティック特異点を持ち、特に有理Gorenstein特異点となる。

$g\ge2$ ではシンプレクティック解消が存在しない。$g=1$ では $\operatorname{GL}\_n,\operatorname{SL}\_n,\operatorname{Sp}\_{2n},\operatorname{SO}\_{2n+1}$ に対し、点のHilbertスキームやそのファイバーを使って解消が得られる。一方、根系に $A,B,C$ 以外の成分があれば射影的シンプレクティック解消は存在しない。これらの肯定例だけから、すべての同型群・中心商を一括して分類したと読み替えてはならない。

## 証明の見取り図

冪零基本群の表現の自明成分では、半単純化された表現が自由Abel化を通じて記述される。この可換化とWeyl群による有限商によって、複雑なモジュライをトーラス型のモデルへ還元する。

perverseフィルトレーションの有限商に関する関手性と、可換なモデル上のweight計算を比較してTheorem Aを得る。境界の位相にはトーリックなコンパクト化を利用し、特異点と解消には有限商としてのシンプレクティック構造を用いる。これらは同じモデル記述から生じるが、フィルトレーションの一致と解消の存在は別の結論である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.21437)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.21437v1) — Introduction, pp. 1–5（節番号なし）
- **Introduction中で言及された主要結果:** Theorem A; Corollary B; Theorem C; Corollary D
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.21437v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
