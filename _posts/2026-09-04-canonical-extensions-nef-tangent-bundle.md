---
layout: paper
title: "Canonical extensions of manifolds with nef tangent bundle"
title_ja: "nef接束をもつ多様体の標準拡大"
authors: "Niklas Müller"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  To any compact Kähler manifold $(X, ω)$ one may associate a bundle of affine spaces $Z_X\rightarrow X$ called a \emph{canonical extension} of $X$. In this paper we prove that if the tangent bundle of $X$ is nef, then the total space $Z_X$ is a Stein manifold. This partially answers a question raised by Greb-Wong of whether these two properties are actually equivalent. We also complement some known results for surfaces in the converse direction.
topic: algebraic-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - stein-geometry
arxiv_id: "2211.03469v2"
arxiv_url: "https://arxiv.org/abs/2211.03469"
arxiv_submitted: "2022-11-07"
arxiv_updated: "2026-01-21"
summary: >-
  コンパクトKähler多様体の接束がnefなら、その任意の標準拡大がSteinであることを示す。証明はnef接束をもつ多様体のAlbanese写像による構造分解と、標準拡大のファイバー積表示を用いる一方、逆向きについて半安定束から生じる高種数曲線上のルールド曲面では標準拡大がSteinにならないことも示す。
abstract_en: ""
summary_en: >-
  A Kähler class determines an affine-space bundle called the canonical extension of a compact Kähler manifold. The paper proves that nefness of the tangent bundle guarantees that every such extension is Stein. The proof uses the structural description of manifolds with nef tangent bundle through a locally constant Albanese fibration and decomposes the extension accordingly. In the converse direction, it rules out Stein canonical extensions for ruled surfaces over curves of genus at least two when the defining vector bundle is semistable.
abstract_ja: >-
  コンパクトKähler多様体 $(X,\omega)$ には、標準拡大と呼ばれるアフィン空間束 $Z_X\to X$ が付随する。本論文は $T_X$ がnefなら $Z_X$ がSteinであることを証明し、両条件の同値性を問うGreb–Wongの問題に一方向から答える。また、逆向きについて曲面の場合の既知結果を補う。
abstract_source_url: "https://arxiv.org/abs/2211.03469"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2211.03469](https://arxiv.org/abs/2211.03469)
- **著者:** Niklas Müller
- **初回投稿日:** 2022年11月7日
- **最終更新日:** 2026年1月21日
- **主分類・副分類:** math.AG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler類 $[\omega]\in H^1(X,\Omega_X^1)$ から、$\Omega_X^1$ を移動群とするアフィン空間束 $Z_X\to X$ が得られる。これは引き戻したKähler類が消える普遍的な複素多様体とも、射影束内の超曲面補集合とも理解できる。

Greb–Wongらの問題は、コンパクトKähler多様体について $T_X$ のnef性と、標準拡大のStein性が同値かを問う。本論文はnef性からStein性へ向かう含意を確立する。v2のIntroductionにある追記によれば、当初仮定されていた弱Campana–Peternell予想はWangにより証明されたため、結論は無条件である。

証明は、有限エタール被覆後にAlbanese写像がnef接束をもつFano多様体をファイバーとする局所定数束になるという構造定理を用いる。標準拡大を相対部分とAlbaneseトーラス由来の部分とのファイバー積に分解し、それぞれのStein性から全体を扱う。

逆方向の完全な同値は未解決である。論文は半安定ベクトル束 $E$ が定める種数2以上の曲線上のルールド曲面 $X=\mathbb P(E)$ では、どの標準拡大もSteinでないことを示し、曲面の場合に残る範囲を狭める。

## 背景と問題設定

標準拡大は、Kähler類を拡大類とする完全列から構成される。Introductionでは、$Z_X$ は $[p^*\omega]=0$ となる普遍空間として説明される。この構成はMonge–Ampère方程式の正則性に始まり、K安定性やFano多様体のKähler–Einstein計量にも現れる。

中心問題は、解析的なStein性が接束の代数幾何的正値性をどこまで検出するかである。nef接束をもつ多様体は構造理論が強力である一方、Fanoファイバーの斉次性を予想するCampana–Peternell問題が障害であった。

## 主結果

### 主定理（Theorem 0.2）

コンパクトKähler多様体 $X$ の接束 $T_X$ がnefなら、任意の標準拡大 $Z_X$ はSteinである。

論文本文の定理表記は弱Campana–Peternell予想を仮定しているが、v2のIntroductionの著者追記は同予想が解決済みであり、結論が無条件になったと明記する。従来は複素トーラス、および接束がbigかつnefなFano多様体などに限って知られていた。

### 逆方向の曲面結果（Lemma 0.3）

種数 $g(C)\ge 2$ の曲線上で、半安定ベクトル束 $E$ が定めるルールド曲面 $X=\mathbb P(E)\to C$ を考える。このとき $X$ の標準拡大は一つもSteinでない。これにより射影曲面の場合、未処理なのは主として楕円曲線上の不安定ルールド曲面となる。

## 証明の見取り図

有限エタール被覆後のAlbanese写像 $\alpha:X'\to\operatorname{Alb}(X')$ を、nef接束をもつFano多様体をファイバーとする局所定数正則ファイバー束として記述する。局所定数性から接束列が正則に分裂し、それに応じて標準拡大も相対余接束由来の拡大とトーラス由来の拡大とのファイバー積に分かれる。

Fanoファイバー側にはbigかつnefな接束に対する既知のアフィン性を、トーラス側には既知のStein性を適用する。最後に有限被覆から元の多様体へ性質を降ろす。曲面の逆向きではルールド曲面の標準拡大を解析し、高種数曲線と半安定性がStein性を妨げることを示す。

## 原論文との対応

- **Abstractページ:** [arXiv:2211.03469](https://arxiv.org/abs/2211.03469)
- **Introduction:** Section 0, pp. 1–2
- **Introduction中で言及された主要定理番号:** Theorem 0.2, Lemma 0.3
- **論文構成の説明:** IntroductionおよびSections 1–3冒頭, pp. 1–5
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
