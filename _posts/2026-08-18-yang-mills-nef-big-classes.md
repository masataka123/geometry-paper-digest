---
layout: paper
title: "The canonical structures of the limit of the Yang-Mills flows for nef and big classes"
title_ja: "nefかつbigな類に対するYang--Mills流の極限の標準構造"
authors: "Satoshi Jinnouchi"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In the previous paper \cite{Jin26}, the author introduced the notions of an adapted current $T$ and an adapted Hermitian-Einstein metric to establish the Kobayashi-Hitchin correspondence for a nef and big class $α$. As a continuation of the previous work, this paper studies the solvability and the convergence of the Yang-Mills flow for a nef and big class $α$ on a holomorphic vector bundle $E$ over a compact Kähler manifold $X$. In particular, we show that the limit of the Yang-Mills flow at infinity is determined by the holomorphic structure of $E$ and the nef and big class $α$. More precisely, if we fix an integrable unitary connection $A_0$ on $E$, we show that the $T$-Yang-Mills flow on $E$ with initial condition $A_0$ is solvable for all time and it converges to a $T$-Yang-Mills connection $A_{\infty}$ in the sense of Uhlenbeck limit. Furthermore, we also show that, on the ample locus of $α$, $A_{\infty}$ is complex-gauge equivalent to the direct sum of the Chern connections of the $T$-adapted Hermitian-Einstein metrics on the factors of the graded sheaf associated with the $α^{n-1}$-Harder-Narasimhan-Seshadri filtration of $E$.
topic: differential-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - stability
  - hermite-einstein-metrics
  - pluripotential-theory
arxiv_id: "2608.15007v1"
arxiv_url: "https://arxiv.org/abs/2608.15007"
arxiv_submitted: "2026-08-15"
arxiv_updated: "2026-08-15"
summary: >-
  コンパクトKähler多様体上のnefかつbigな類をadapted currentで表し、それに関するYang--Mills流の長時間存在とUhlenbeck収束を証明する。
  極限を $\alpha^{n-1}$-Harder--Narasimhan--Seshadri filtrationの次数付き層上のadapted Hermitian--Einstein接続で同定し、Kähler類の場合のBando--Siu予想型結果を退化した類へ拡張する。
abstract_en: ""
summary_en: >-
  The paper studies Yang--Mills flow when the polarization is a nef and big cohomology class rather than a Kähler class. Using a specially adapted positive current, it proves global-in-time solvability away from the non-Kähler locus and obtains an Uhlenbeck limit. The limiting connection is canonically identified with the direct sum of adapted Hermitian--Einstein connections on the stable factors of the relevant Harder--Narasimhan--Seshadri graded sheaf. This extends the established Kähler-class convergence picture to a degenerate geometric setting.
abstract_ja: >-
  コンパクトKähler多様体上の正則ベクトル束とnefかつbigな類 $\alpha$ に対し、adapted current $T$ を用いてYang--Mills流を定式化する。この流が全時間で解け、Uhlenbeckの意味で $T$-Yang--Mills接続へ収束することを示す。ample locus上では、極限は $\alpha^{n-1}$-Harder--Narasimhan--Seshadri filtrationの次数付き層の各因子が持つadapted Hermitian--Einstein計量のChern接続の直和と同一視される。
abstract_source_url: "https://arxiv.org/abs/2608.15007"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.15007](https://arxiv.org/abs/2608.15007)
- **著者:** Satoshi Jinnouchi
- **初回投稿日:** 2026年8月15日
- **最終更新日:** 2026年8月15日（v1）
- **主分類・副分類:** math.DG（主分類。副分類なし）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kobayashi--Hitchin対応は、正則ベクトル束の安定性をHermitian--Einstein計量の存在と結ぶ。Kähler類に関してはYang--Mills流のUhlenbeck極限が元の束のHarder--Narasimhan構造だけで決まることが知られている。本論文はその収束像をnefかつbigな類へ拡張する。

nefかつbigな類はKähler類の極限として現れるが、それを表す計量は正定値とは限らず、非Kähler locusに沿って特異になる。著者の先行研究で導入されたadapted currentは、ample locusでは滑らかなKähler計量であり、適切な滑らかな近似を持つ。この構造をYang--Mills流の背景計量として使う。

第一の主結果は $T$-Yang--Mills流の全時間存在である。第二の主結果は、Uhlenbeck極限を元の正則束の $\alpha^{n-1}$-Harder--Narasimhan--Seshadri filtrationから標準的に記述する。

## 背景と問題設定

Kählerの場合、Daskalopoulos--WentworthとSibleyは、Yang--Mills流の極限が元の正則構造のHarder--Narasimhan filtrationで決まるというBando--Siuの予想を解いた。nefかつbigな類では背景currentが退化するため、通常の放物型PDE論やChern--Weil公式をそのまま適用できないことが新しい困難である。

## 主結果

### 長時間存在（Theorem A）

$X$ をコンパクトKähler多様体、$\alpha$ をnefかつbigな類、$T\in\alpha$ をadapted currentとする。正則ベクトル束 $(E,\bar\partial_E)$ と滑らかなHermitian計量 $h_0$ に付随するChern接続 $A_0$ から始めた $T$-Yang--Mills流

$$
\frac{\partial A_t}{\partial t}=-d^{*h_0,T}_{A_t}F_{A_t},
\qquad A_{t=0}=A_0
$$

は全時間で解を持ち、$(X\setminus E_{\rm nK}(\alpha))\times[0,\infty)$ 上で滑らかである。

### 極限の標準構造（Theorem B）

$p>n=\dim X$ とする。流の時刻列 $t_j\to\infty$ とunitary gauge変換を選ぶと、非Kähler locusとHausdorff余次元4以上の閉集合を除いて、$A_{t_j}$ は弱い $L^p_{1,\mathrm{loc}}$ の意味で $T$-Yang--Mills接続 $A_\infty$ へ収束する。

さらに極限束は直交分解を持ち、ample locus上で

$$
\operatorname{Gr}^{\rm HNS}_{\alpha}(E)
=\bigoplus_i Q_i
\cong(E_\infty,A_\infty)
$$

となる平行同型が存在する。各極限因子の接続は、$Q_i$ 上の $T$-adapted Hermitian--Einstein計量のChern接続と対応する。したがって極限は初期計量の偶然ではなく、$E$ の正則構造と $\alpha$ により決まる。

## 証明の見取り図

adapted currentをKähler計量 $\omega_\varepsilon$ で近似し、Guo--Phong--Song--Sturmの熱核一様評価を使って $\omega_\varepsilon$-Yang--Mills流から $T$-流を構成する。Uhlenbeck compactnessにより部分列極限を得た後、Hermitian--Yang--Mills型汎関数を使って極限の曲率固有値と元のHarder--Narasimhan typeを一致させる。

最後にfiltrationの部分層を弱正則射影として扱い、近似列に沿う収束を示す。退化したcurrentのもとでは極限因子が非Kähler locusの補集合にしか定義されないため、adapted Hermitian--Einstein計量を使って次数付き層と極限束の平行同型を構成する。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.15007](https://arxiv.org/abs/2608.15007)
- **Introduction:** Section 1, pp. 2–6
- **Introduction中で言及された主要定理番号:** Theorem A, Theorem B, Remark C
- **論文構成の説明:** Introduction, pp. 5–6
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
