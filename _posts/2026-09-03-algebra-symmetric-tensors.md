---
layout: paper
title: "The algebra of symmetric tensors on smooth projective varieties"
title_ja: "滑らかな射影多様体上の対称テンソル代数"
authors: "Arnaud Beauville, Jie Liu"

arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We discuss in this note the algebra H^0(X, Sym*TX) for a smooth complex projective variety X . We compute it in some simple examples, and give a sharp bound on its Krull dimension. Then we propose a conjectural characterization of non-uniruled projective manifolds with pseudo-effective tangent bundle.
topic: algebraic-geometry
tags:
  - vector-bundles-sheaves
  - positivity
arxiv_id: "2309.12888v4"
arxiv_url: "https://arxiv.org/abs/2309.12888"
arxiv_submitted: "2023-09-22"
arxiv_updated: "2024-03-22"
summary: >-
  滑らかな射影多様体 $X$ の接束の対称冪の大域切断をまとめた次数付き代数 $S(X)$ を研究する。具体例を計算し、そのKrull次元に鋭い上界を与え、非単線織多様体で接束が擬有効となる場合の構造を予想する。
abstract_en: >-
  We discuss in this note the algebra H^0(X, Sym*TX) for a smooth complex projective variety X . We compute it in some simple examples, and give a sharp bound on its Krull dimension. Then we propose a conjectural characterization of non-uniruled projective manifolds with pseudo-effective tangent bundle.
summary_en: ""
abstract_ja: >-
  滑らかな複素射影多様体上で接束の全対称冪の大域切断が作る代数を調べる。いくつかの基本例で代数を計算し、Krull次元の鋭い上界を与える。さらに接束が擬有効な非単線織射影多様体の予想的特徴付けを提示し、次元5以下で確認する。
abstract_source_url: "https://arxiv.org/abs/2309.12888"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2309.12888](https://arxiv.org/abs/2309.12888)
- **著者:** Arnaud Beauville, Jie Liu
- **初回投稿日:** 2023年9月22日
- **最終更新日:** 2024年3月22日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかな射影多様体 $X$ に対し、接束の対称テンソルの大域切断を全次数で集めた代数を考える。余接束上の正則関数環としても解釈できる単純な対象だが、その構造は二次超曲面のような基本例でも複雑である。

本論文はAbel多様体、射影空間、有理等質多様体、二次超曲面、二次曲面二個の完全交叉、Hitchin系に由来するモジュライ空間などでこの代数を計算する。その後、Krull次元に鋭い上界を与える。

さらに非単線織射影多様体で接束が擬有効となる状況の構造予想を提示する。Introductionでは、その予想を次元5以下で確認すると述べられている。

## 背景と問題設定

中心となる次数付き $\mathbb C$-代数は

$$
S(X):=\bigoplus_{p\geq0}H^0(X,\operatorname{Sym}^pT_X)
=\mathcal O(T^*X)
=\bigoplus_{p\geq0}H^0(\mathbb PT^*X,\mathcal O_{\mathbb PT^*X}(p))
$$

である。対称微分形式の代数に比べて研究例が少なく、接束の正値性と余接束全空間の代数関数を結ぶ点が特徴である。

## 主結果

### 具体例とKrull次元

Introductionでは概略として次のように述べられている。$S(X)$ は複数の基本例で明示的に計算され、そのKrull次元には鋭い上界が与えられる。例えば $n$ 次元Abel多様体では接束が自明なので、$S(X)$ は $n$ 変数多項式環となる。一方、射影空間や等質多様体では余接束から冪零軌道閉包への写像が代数の記述を与える。

### 擬有効接束に関する予想

非単線織な滑らかな射影多様体で $T_X$ が擬有効となる場合を特徴付ける予想が提案される。Introductionが与える精度では正式な予想文の全仮定を再現せず、論文がこの特徴付けを次元 $\leq5$ で証明すると述べるに留める。

## 証明の見取り図

具体例では $T^*X$ の幾何と、その上の $\mathbb C^*$-同変写像を使って正則関数環を計算する。Hitchin系ではHitchin写像の一般ファイバーが余次元2以上の部分を除いて完全多様体の商となることから、基底上の関数が余接束上の関数を尽くす。一般の次元評価と擬有効性の議論は後半の独立した節へ分けられる。

## 原論文との対応
- **Abstractページ:** [arXiv:2309.12888](https://arxiv.org/abs/2309.12888)
- **Introduction:** Section 1, pp. 1–2
- **Introduction中で言及された主要定理番号:** Introductionでは主結果の番号を掲げず、Sections 4–5の内容を概説
- **論文構成の説明:** Introduction, p. 1
- **確認したarXivバージョン:** v4
- **確認したライセンス:** CC BY 4.0
- **source_scope:** Abstract and Introduction
