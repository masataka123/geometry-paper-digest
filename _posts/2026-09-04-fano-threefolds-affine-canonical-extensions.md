---
layout: paper
title: "Fano threefolds with affine canonical extensions"
title_ja: "アフィン標準拡大をもつファノ三次元多様体"
authors: "Andreas Höring, Thomas Peternell"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
arxiv_abstract: >-
  Let $M$ be a smooth Fano threefold such that a canonical extension of the tangent bundle is an affine manifold. We show that $M$ is rational homogeneous.
topic: algebraic-geometry
tags:
  - fano-varieties
  - positivity
  - vector-bundles-sheaves
arxiv_id: "2211.11261v1"
arxiv_url: "https://arxiv.org/abs/2211.11261"
arxiv_submitted: "2022-11-21"
arxiv_updated: "2022-11-21"
summary: >-
  滑らかなFano三次元多様体の接束から作る標準拡大がアフィンであるなら、元の多様体は有理斉次多様体であることを示す。Picard数1の核心は次数5のdel Pezzo三次元多様体 $V_5$ の標準拡大がSteinでないことの証明であり、接束の正値性とMori理論を複素解析的条件へ結び付ける。
abstract_en: ""
summary_en: >-
  The paper studies canonical extensions attached to Kähler classes on smooth Fano threefolds. It proves that affineness of such an extension forces the threefold to be rational homogeneous. The difficult remaining case in the classification is the degree-five del Pezzo threefold, whose canonical extension is shown not to be Stein. The argument combines positivity of the tangent bundle, Mori contractions, and an explicit birational model of the projectivized extension.
abstract_ja: >-
  滑らかなFano三次元多様体 $M$ を考え、その接束の標準拡大がアフィン多様体になると仮定する。本論文は、この仮定から $M$ が有理斉次多様体であることを証明する。
abstract_source_url: "https://arxiv.org/abs/2211.11261"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2211.11261](https://arxiv.org/abs/2211.11261)
- **著者:** Andreas Höring, Thomas Peternell
- **初回投稿日:** 2022年11月21日
- **最終更新日:** 2022年11月21日
- **主分類・副分類:** math.AG（主分類）, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

コンパクトKähler多様体 $M$ とKähler類から、接束を含む拡大

$$
0\longrightarrow \mathcal O_M\longrightarrow V\longrightarrow T_M\longrightarrow 0
$$

を作り、$Z_M=\mathbb P(V)\setminus\mathbb P(T_M)$ と置く。Greb–Wongの予想は、射影多様体について、ある $Z_M$ がアフィンなら $M$ は $G/P$ 型の有理斉次多様体であると主張する。

本論文はこの予想を滑らかなFano三次元多様体について証明する。$Z_M$ のアフィン性から接束 $T_M$ がbigになるため、候補は強く制限される。

Picard数が2以上の場合は双有理Mori収縮が存在しないという先行結果とFano三次元多様体の分類を使う。Picard数1では、斉次な $\mathbb P^3$ と三次元二次超曲面を除く唯一の候補として、次数5のdel Pezzo三次元多様体 $V_5$ が残る。

核心は $V_5$ の標準拡大がSteinですらないことの証明である。これにより候補が排除され、アフィン標準拡大をもつ滑らかなFano三次元多様体は有理斉次多様体に限られる。

## 背景と問題設定

標準拡大は接束の正値性を複素解析的なStein性・代数的なアフィン性と結ぶ。Introductionが掲げるConjecture 1.1は「標準拡大がアフィンなら元の射影多様体は有理斉次」という特徴づけである。アフィン性は $T_M$ のbignessを含意するが、bignessだけでは斉次性は直ちに従わない。

論文は $\mathbb P(V)$ と境界因子 $\mathbb P(T_M)$ の組を双有理変換し、反標準因子がnefかつbigとなるweak Fano modelを考える。変換が $Z_M$ 上で双正則なら、像が境界補集合全体を覆うか否かによって、$Z_M$ がアフィンになる場合と正則凸ですらない場合とを判別できる。

## 主結果

### 主定理（Theorem 1.2）

滑らかなFano三次元多様体 $M$ について、あるKähler類に対応する $Z_M$ がアフィンなら、$M$ は有理斉次多様体である。

主要仮定は滑らかさ、三次元性、Fano性、および標準拡大のアフィン性である。結論は単なる接束の正値性ではなく、$M=G/P$ という大域的分類であり、Conjecture 1.1の三次元Fanoの場合を解決する。

### 核心となる排除定理（Theorem 1.3）

次数5のdel Pezzo三次元多様体 $V_5$ では、$Z_{V_5}$ はSteinでない。アフィン多様体はSteinであるため、この結論はPicard数1の唯一の非斉次候補を排除する。

## 証明の見取り図

まず既知の非存在結果により双有理Mori収縮を排除し、分類を介してPicard数2以上を処理する。Picard数1では接束のbignessに関する分類結果により、非斉次の場合を $V_5$ に絞る。

$V_5$ については $\mathbb P(V)$ と $\mathbb P(T_M)$ に反flipを施してweak Fano modelを明示的に構成する。IntroductionのProposition 1.5の二分法を適用し、変換後の $Z_M$ の像が境界補集合全体より真に小さいことを確かめることで、正則凸性、したがってStein性を否定する。

## 原論文との対応

- **Abstractページ:** [arXiv:2211.11261](https://arxiv.org/abs/2211.11261)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 1.2, Theorem 1.3, Proposition 1.5
- **論文構成の説明:** Section 1.B, pp. 2–3
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
